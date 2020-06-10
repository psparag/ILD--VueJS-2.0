<template>
      <div class="loader page--loader">
        <div class="loader--grid">
          <div v-images-loaded:on.progress="Progress" class="loader-img-wrapper">
            <div v-for="loaderImage in imageList" :key="loaderImage.id" v-bind:class="'grid--item grid--item-' + loaderImage.id">
            <img :src="'/imgs/'+loaderImage.src">
            </div>
          </div>
        </div>
      </div>
</template>

<script>

import imagesLoaded from 'vue-images-loaded'

export default {
  name: 'Loader',
    directives: {
        imagesLoaded
    },
    methods: {
        Progress(instance, image ) {
        const addClass = image.isLoaded ? 'loaded' : 'broken';
        image.img.parentNode.classList.add(addClass);
        // console.log( 'image is ' + addClass + ' for ' + image.img.src );
      }
    },
    data() { 
      return {
          imageList:[
            {id:1, src: '1.png', },
            {id:2, src: '2.png' },
            {id:3, src: '3.png' },
            {id:4, src: '4.png' },
            {id:5, src: '5.png' },
            {id:6, src: '6.png' },
            {id:7, src: '7.png' },
            {id:8, src: '8.png' },
            {id:9, src: '9.png' },
            {id:10, src: '10.png' },
            {id:11, src: '11.png' },
            {id:12, src: '12.png' },
            {id:13, src: '13.png' },
            {id:14, src: '14.png' },
            {id:15, src: '15.png' },
            {id:16, src: '16.png' },
            {id:17, src: '17.png' },
            {id:18, src: '18.png' },
            {id:19, src: '19.png' },
            {id:20, src: '20.png' },
            {id:21, src: '21.png' },
            {id:22, src: '22.png' },
            {id:23, src: '23.png' },
            {id:24, src: '24.png' },
            {id:25, src: '25.png' },

            ]
        }
    }
}
</script>

<style scoped>
.loader--grid .loader-img-wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 2px;
  box-sizing: border-box;
  height: 100vh;
  max-height: 100vh;
  width: 100%;
  padding: 0px;
  background: black;
}

.loader--grid div {
  background: #ffffff;
}

.grid--item.grid--item-4 {
  grid-column-start: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}

.grid--item.grid--item-7 {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 7;
  grid-column-end: 9;
}

.grid--item.grid--item-8 {
  grid-row-start: 2;
  grid-row-end: 4;
  grid-column-start: 1;
  grid-column-end: 3;
}

.grid--item.grid--item-12 {
  grid-row-start: 3;
  grid-row-end: 5;
}

.grid--item.grid--item-13 {
  grid-row-start: 3;
  grid-row-end: 5;
  grid-column-start: 4;
  grid-column-end: 6;
}

.grid--item.grid--item-14 {
  grid-row-start: 3;
  grid-row-end: 5;
}

.grid--item.grid--item-19 {
  grid-row-start: 4;
  grid-row-end: 6;
  grid-column-start: 7;
  grid-column-end: 9;
}
.grid--item img {
  filter: blur(10px);
  max-width: 100%;
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position: center;
}
.grid--item.loaded img {
  filter: blur(0px);
  transition: filter 1.5s;
}
</style>