<template>
    <div class="product">
        <img src="https://i1.kwejk.pl/k/obrazki/2019/10/KSwRO9gOTJJLim0i.jpg" alt="product image" />
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
};
</script>

<style scoped lang="scss">
.product {
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
}
</style>