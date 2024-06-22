<template>
    <div class="product">
        <img :src="assets(offer.img)" alt="product image" />
        <h2>{{ offer.name }}</h2>
        <p>{{ offer.price }}</p>
        <button>Details</button>
    </div>
</template>

<script>
export default {
    name: "ProductCart",
    props: {
        offer: Object,
    },
    methods: {
        assets(image) {
            return require("../assets/" + image + "");
        },
    },
};
</script>

<style scoped lang="scss">
.product {
    width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    border-radius: 5px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #fff;

    h2 {
        font-size: 28px;
        margin: 0;
        margin-top: 10px;
    }

    img {
        width: 100%;
        border-radius: 5px 5px 0 0;
    }

    p {
        margin-top: 0;
    }

    button {
        font: inherit;
        background: var(--background);
        color: var(--primary);
        border: none;
        padding: 5px 15px;
        border-radius: 5px;
        margin-bottom: 10px;
        cursor: pointer;
    }

    button:hover {
        background: #86878b;
    }
}
</style>