<template>
  <div class="ild-work work">
    <!-- <app-cursor></app-cursor> -->

    <appnavigation></appnavigation>

    <appheader></appheader>

    <!-- main section starts -->
    <section class="viewport">
      <div id="scroll-container" class="scroll-container">
        <div class="content bg-white">
          <page-title pageTitle="© Work At ild"></page-title>
          <herosection v-bind:herodata="herodata"></herosection>
          <!-- Container starts -->
          <div class="content-container-body-2 c-xs-width-full relative c-z-2">
            <component-gallery
              v-bind:data="data"
              v-bind:class="padding_150"
              v-bind:showFilters="showFilters"
            ></component-gallery>
          </div>
          <!-- Container ends -->
          <appfooter v-bind:class="padding_200"></appfooter>
        </div>
      </div>
    </section>
    <!-- main section ends  -->
  </div>
</template>

<script>
import herosection from "../components/herosection";
import data from "../json/projects.json";
import ComponentItem from "../components/ComponentItem";
import appfooter from "../components/AppFooter";
import { testmixins } from "../assets/mixins/testmixins.js";

export default {
  name: "Work",
  mixins: [testmixins],
  components: {
    herosection: herosection,
    appfooter: appfooter,
    "component-gallery": ComponentItem
  },
  data() {
    return {
      herodata: {
        title: `<div class="hero-heding-text--animation overflow-hidden"><p class="text-left opacity-60">Work At</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-70 herosection-team-ml-line-2">Innovative</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-80 text-left">Lighting</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-90 herosection-team-ml-line-4">Designs</p></div>`
      },
      data: data,
      padding_150: "custom-padding-top-150 c-padding-t-110",
      padding_250: "custom-padding-top-250",
      padding_200: "custom-padding-top-200 c-padding-t-100",
      showFilters: true
    };
  }
};
</script>