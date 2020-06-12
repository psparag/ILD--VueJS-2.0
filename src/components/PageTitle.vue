<template>
  <div class="top-page-title--section pt-16 fixed c-z-3">
    <div class="title-heading--small-text text-2xl uppercase">
      <router-link to="/" class="custom-cursor-none animate-link">
        <img src="../assets/ild_logo.png" class alt="Img" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    pageTitle: {
      type: String
    }
  }
};
</script>