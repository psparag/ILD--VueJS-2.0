<template>
  <div
    v-bind:class="'break-image-section-grid--row2 image-gallery-scroll--animation c-md-width-full-100 ' + (content_container_body_2 ? 'content-container-body-2' : 'content-container-body')"
  >
    <div class="break-image-section-grid-row2--grid ">
      <div
        :class="`break-image-section-grid-row2-grid--column image-gallery--item bg-black overflow-hidden ` +  ( (index + 1) % 2 == 0 ? 'mt-16':'')"
        v-for="(bgimage, index) in images"
        :key="index"
      >
        <div
          class="gallery-image overflow-hidden mx-auto"
          v-bind:style=" {'background-image' : 'url(' + getImgUrl(bgimage) + ')'} "
        >
          <!-- <img :src="getImgUrl('1.jpg')" alt class="h-full w-full object-cover" /> -->
          <!-- <p>test</p> -->
        </div>
        <div class="gallery-overlay"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imagegallery",
  props: ["padding_200", "images", "content_container_body_2"],
  methods: {
    getImgUrl: function(img) {
      return require("../assets/img/" + img);
    }
  }
};
</script>