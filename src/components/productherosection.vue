<template>
  <div class="relative c-z-5 c-xs-width-full">
    <div
      class="information-container-grid--heading-container information-grid-row-1 mx-auto text-center"
    >
      <p
        class="information-number text-2xl smli-font text-gray-900 letter-spacing-2"
      >{{herosectiondata.id}}</p>

      <p
        class="information-year mt-10 text-sm letter-spacing-2 uppercase custom-gray-100"
        v-if="herosectiondata.date"
      >{{herosectiondata.date}}</p>

      <p
        class="information-name custom-xs-heading-font-32 mt-8 text-5xl letter-spacing-10 smli-font text-gray-900 uppercase"
      >{{herosectiondata.title}}</p>
    </div>
    <div class="information-container-grid--image-container c-xs-width-full-100 mx-auto mt-24 information-grid-row-2">
      <agile
        :nav-buttons="status"
        :dots="status"
        :autoplay-speed="5000"
        :speed="2500"
        fade="fade"
        pause-on-hover="pause-on-hover"
        pause-on-dots-hover="pause-on-dots-hover"
        autoplay="autoplay"
      >
        <img
          v-for="(image, index) in herosectiondata.carouselImages"
          :key="index"
          class="slide object-cover w-full h-full"
          v-bind:src="getImgUrl(image)"
        />
      </agile>
    </div>
  </div>
</template>

<script>
import { VueAgile } from "vue-agile";

export default {
  name: "prodcutherosection",
  data() {
    return {
      carouselImageCount: this.herosectiondata.carouselImages.length
    };
  },
  components: {
    agile: VueAgile
  },
  props: {
    herosectiondata: Object
  },
  methods: {
    getImgUrl: function(img) {
      return require("../assets/img/" + img);
    }
  },
  computed: {
    status() {
      if (this.carouselImageCount > 1) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>