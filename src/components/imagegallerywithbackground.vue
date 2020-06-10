<template>
  <div
    class="break-image-section-grid--row2 break-image-section-with-background-grid--row overflow-x-hidden"
  >
    <div class="break-image-section-grid-row2--grid">
      <div
        :class="`break-image-section-grid-row2-grid--column bg-black ` +  ( (index+1) % 2 == 0 ? 'mt-16':'')"
        v-for="(bgimage, index) in images"
        :key="index"
      >
        <img :src="getImgUrl(bgimage)" alt class="h-full w-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imagegallerywithbackground",
  props: ["images"],
  methods: {
    getImgUrl: function(img) {
      return require("../assets/img/" + img);
    }
  }
};
</script>