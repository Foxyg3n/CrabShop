<template>
    <img :src="imgPath(img)"></img>
</template>

<script>
export default {
    name: 'ProductCart',
    props: {
        img: String
    },
    methods: {
        imgPath(image) {
            return require('@/assets/' + image + '')
        }
    }
}

</script>