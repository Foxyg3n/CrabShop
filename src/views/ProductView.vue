<template>
    <div class="product">
        <h2>{{ offer.name }}</h2>
        <div :style="{ backgroundImage: 'https://i1.kwejk.pl/k/obrazki/2019/10/KSwRO9gOTJJLim0i.jpg' }" class="image"></div>
        <p>{{ offer.price }}</p>
    </div>
</template>

<script>
export default {
    name: "Product",
    props: {
        offer: Object
    },
};
</script>