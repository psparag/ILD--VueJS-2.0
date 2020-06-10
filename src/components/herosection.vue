<template>
  <div class="hero-section relative c-z-4">
    <div class="title-heading hero-section-container h-screen w-full bg-white pointer-events-none">
      <div class="hero-section-contents content-container-hero-section">
        <div
          class="title-heading--main-text leading-none uppercase text-gray-900 font-medium smli-font"
          v-html="herodata.title"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "herosection",
  props: ["herodata"],
  data() {
    return {};
  }
};
</script>

<style >
.hero-heding-text--animation {
  white-space: pre-line;
  float: none;
  /* display: inline-block; */
  margin-right: 0px;
  cursor: default;
  overflow: hidden;
}
</style>

