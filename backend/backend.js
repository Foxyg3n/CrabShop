const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const fs = require('fs');
const { createPool: pool } = require('mysql');

const app = express();
const PORT = 3000;

let mysqlPool = createPoolFromConfig();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log("Backend is running on port " + PORT);
});

// MySQL setup

app.post("/backend/checksetup", (req, res) => {
    res.status(200).send({ setup: fs.existsSync("config.json") });
});

app.post("/backend/setup", (req, res) => {
    if (fs.existsSync("config.json")) {
        res.status(200).send({ message: "Setup already done" });
        return;
    }

    const minLength = 3;
    const maxLength = 255;

    if (req.body.address.length < minLength || req.body.address.length > maxLength) {
        res.status(400).send("Host must be between 3 and 255 characters");
        return;
    }

    if (req.body.user.length < minLength || req.body.user.length > maxLength) {
        res.status(400).send("User must be between 3 and 255 characters");
        return;
    }

    if (req.body.password.length < minLength || req.body.password.length > maxLength) {
        res.status(400).send("Password must be between 3 and 255 characters");
        return;
    }

    if (req.body.database.length < 1 || req.body.database.length > maxLength) {
        res.status(400).send("Database must be between 1 and 255 characters");
        return;
    }

    const config = {
        host: req.body.address,
        user: req.body.user,
        password: req.body.password,
        database: req.body.database
    };

    const data = JSON.stringify(config, null, 2);
    fs.writeFileSync("config.json", data);
});

// Authentication

const sessions = new Set();

function isAuthenticated(req) {
    return sessions.has(req.cookies.session);
}

function isAuthenticatedMiddleware(req, res, next) {
    if (isAuthenticated(req)) next();
    else res.status(401).send({ error: "Not authenticated" });
}

app.post("/backend/validate", (req, res) => {
    const authenticated = isAuthenticated(req);
    if (!authenticated) {
        res.clearCookie("session");
        res.clearCookie("username");
    }
    res.status(200).send({ authenticated, username: req.cookies.username });
});

app.post("/backend/login", express.urlencoded({ extended: false }), (req, res) => {
    if (mysqlPool == null) {
        res.status(401).send({ error: "MySQL pool not created" });
        return;
    }

    mysqlPool.query(`SELECT * FROM admin WHERE username = ? AND password = ?`, [req.body.username, req.body.password], (error, results) => {
        if (error) {
            res.status(500).send({ error: "Error connecting to database" });
            return;
        }

        if (results.length == 0) {
            res.status(401).send("Invalid credentials");
            return;
        }

        const hour = 3600e3;
        const sessionId = Math.random().toString(36).substring(2);
        sessions.add(sessionId);
        res.cookie("session", sessionId, { maxAge: hour });
        res.cookie("username", req.body.username, { maxAge: hour });
        res.status(200).send({ username: req.body.username, message: "Logged in" });
        setTimeout(() => sessions.delete(sessionId), hour);
    });
});

app.post("/backend/logout", (req, res) => {
    sessions.delete(req.cookies.session);
    res.clearCookie("session");
    res.clearCookie("username");
    res.status(200).send({ message: "Logged out" });
});

// FUNCTIONS

function createPoolFromConfig() {
    try {
        const data = fs.readFileSync("config.json");
        const config = JSON.parse(data);
        return pool({
            host: config.host,
            user: config.user,
            password: config.password,
            database: config.database
        });
    } catch (error) {
        return null;
    }
}