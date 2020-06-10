<template>
  <div class="grid-background-container">
    <!-- to be used on dark background -->
    <div class="grid-background-container-div h-screen w-screen fixed top-0 left-0">
      <img class="grid-background-image" src="../assets/img/grid.png" alt />
    </div>

    <!-- to be used on light background -->
    <div class="grid-background-container-div h-screen w-screen fixed top-0 left-0">
      <img class="grid-background-image" src="../assets/img/grid-light.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  name: "pagebackground"
};
</script>
<style scoped>
.grid-background-container {
  position: fixed;
  z-index: 100; /*Top Most layer*/
  pointer-events: none;
}
.grid-background-image {
  height: 1920px;
  width: 1920px !important;
  max-width: none !important;
  opacity: 0.02;
}

.grid-background-container-div {
  overflow: hidden;
}
</style>