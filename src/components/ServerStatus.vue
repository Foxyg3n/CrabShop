<template>
    <div :class="[status ? 'green' : 'red', 'server-status']">
        <div class="wave"></div>
        <div class="wave"></div>
    </div>
</template>

<script>
export default {
    name: 'ServerStatus',
    props: {
        status: Boolean
    }

}
</script>

<style scoped lang="scss">
.server-status {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;

    .wave {
        position: absolute;
        top: 0;
        left: 0;
        border: 0;
        width: 10px;
        height: 10px;
        border-radius: 50%;

        &:nth-child(2) {
            animation-delay: 0.33s;
        }
    }

    &.green {
        background-color: #47e18d;

        .wave {
            animation: sploosh-online 2s cubic-bezier(0.165, 0.84, 0.44, 1);
            animation-iteration-count: infinite;
        }
    }

    &.red {
        background-color: rgb(235, 85, 85);

        .wave {
            animation: sploosh-offline 2s cubic-bezier(0.165, 0.84, 0.44, 1);
            animation-iteration-count: infinite;
        }
    }
}

@keyframes sploosh-offline {
    0% {
        box-shadow: 0 0 0 0px rgba(225,71,71,0.7);
        background: rgba(225,71,71,0.7)
    }

    80% {
        background: rgba(223,66,139,0)
    }

    100% {
        box-shadow: 0 0 0 8px rgba(205,66,223,0)
    }
}

@keyframes sploosh-online {
    0% {
        box-shadow: 0 0 0 0px rgba(71,225,141,0.6);
        background: rgba(71,225,141,0.7)
    }

    80% {
        background: rgba(66,166,223,0)
    }

    100% {
        box-shadow: 0 0 0 8px rgba(66,166,223,0)
    }
}
</style>