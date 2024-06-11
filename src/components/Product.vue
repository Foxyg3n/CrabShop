<template>
    <div class="product">
        <img src="https://i1.kwejk.pl/k/obrazki/2019/10/KSwRO9gOTJJLim0i.jpg" alt="product image" />
        <h2>{{ offer.name }}</h2>
        <p>{{ offer.price }}</p>
        <div class="details">
            Cenka
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductCart",
    props: {
        offer: Object,
    },
};
</script>

<style scoped lang="scss">
.product {
    position: relative;
    width: 360px;
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

    .details {
        position: absolute;
        bottom: 0;
        z-index: -1;
        width: calc(100% - 20px);
        background: #f0f0f0;
        border-radius: 0 0 5px 5px;
        transform: translateY(0);
        transition: transform 300ms;
        background: var(--background);
        color: white;
        padding: 10px 0;
    }

    &:hover .details {
        transform: translateY(100%);
    }
}
</style>