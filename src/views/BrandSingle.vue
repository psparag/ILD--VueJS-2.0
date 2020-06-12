<template>
  <div class="brand-single">
    <!-- <appnavigation></appnavigation> -->
    <appheader></appheader>

    <!-- main section starts -->
    <section class="viewport">
      <div id="scroll-container" class="scroll-container">
        <div class="content bg-white">
          <page-title></page-title>
          <div class="relative c-z-6">
            <!-- Container starts -->
            <div class="relative">
              <div class="information-container">
                <div class="single-team-contents custom-padding-top-100">
                  <div class="information-container--grid">
                    <productherosection
                      v-bind:herosectiondata="getbrandDetails.heroSection"
                      v-bind:class="single_service_inner_container"
                    ></productherosection>
                    <heading
                      v-bind:headingdata="getbrandDetails.headingOne"
                      v-bind:class="padding_100"
                    ></heading>
                  </div>
                </div>
                <div class="single-project-extraContents custom-padding-bottom-200">
                  <heading
                    v-for="(extraContents, index) in getbrandDetails.extraContents"
                    :key="index"
                    v-bind:headingdata="extraContents"
                    v-bind:class="padding_100"
                  ></heading>
                  <div class="custom-padding-top-120">
                    <keep-alive>
                      <AppButtonExternal
                        v-bind:buttondata="buttondata"
                        v-bind:buttonURL="getbrandDetails.brandURL"
                      ></AppButtonExternal>
                    </keep-alive>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- main section ends  -->
</template>


<script>
import productherosection from "../components/productherosection";
import heading from "../components/heading";
import { testmixins } from "../assets/mixins/testmixins.js";
import appbuttonexternal from "../components/appButtonExternal";

import brands from "../json/brand.json";

export default {
  name: "TeamSingle",
  mixins: [testmixins],
  components: {
    productherosection: productherosection,
    heading: heading,
    AppButtonExternal: appbuttonexternal
  },
  data() {
    return {
      brands: brands,
      padding_100: "custom-padding-top-100",
      padding_150: "custom-padding-top-150 ",
      content_container_body_2: true,
      single_service_inner_container: "single-service-inner-container",
      buttondata: {
        fronttext: "Explore More",
        hovertext: "Go ahead !",
        buttoncolorclass: "bg-black",
        buttonbackbganimationclass: "bg-gray-200",
        buttontextcolorclass: "text-white",
        buttontexthovercolorclass: "text-gray-900"
      }
    };
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    getbrandDetails() {
      return this.brands.find(brand => brand.slug === this.slug);
    },
    galleryImagess: function() {
      return this.getbrandDetails.galleryImages.forEach(function(e) {
        this.imggg.push(e.url);
      });
    }
  },
  mounted: function() {}
};
</script>