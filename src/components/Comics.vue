<template>
    <div class="container-comics">
        <h2 class="container-comics__title">
            {{randomComic.title}}
        </h2>
        <img class="container-comics__img" :src="randomComic.img" alt="#">
        <div class="container-comics__calification">
            <star-rating />
        </div>
    </div>
</template>
<script>
import StarRating from 'vue-star-rating'

export default {
    name: 'Comics',
    components: {
    StarRating
    },
    data() {
        return {
            randomComic: {},
        };
    },
    mounted() {
      const randomNumber = Math.floor((Math.random() * (999 - 1 + 1)) + 1);
      this.$store.dispatch('GET_COMICS', randomNumber).then((response) => {
        this.randomComic = response;
    });
  },
}
</script>

<style lang="scss" scoped>
    .container-comics {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        &__img {
            margin: 2rem 0;
        }
    }
</style>