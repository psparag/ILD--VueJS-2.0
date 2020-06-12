<template>
  <div class="featured-product-single">
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
                      v-bind:herosectiondata="getfeaturedProductDetails.heroSection"
                      v-bind:class="single_service_inner_container"
                    ></productherosection>
                    <heading
                      v-bind:headingdata="getfeaturedProductDetails.headingOne"
                      v-bind:class="padding_100"
                    ></heading>
                  </div>
                </div>
                <div class="single-project-extraContents custom-padding-bottom-200">
                  <heading
                    v-for="(extraContents, index) in getfeaturedProductDetails.extraContents"
                    :key="index"
                    v-bind:headingdata="extraContents"
                    v-bind:class="padding_100"
                  ></heading>
                  <div class="custom-padding-top-120">
                    <keep-alive>
                      <AppButton v-bind:buttondata="buttondata"></AppButton>
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
import appbutton from "../components/appbutton.vue";

import featuredProducts from "../json/featuredProducts.json";

export default {
  name: "FeaturedProductSingle",
  mixins: [testmixins],
  components: {
    productherosection: productherosection,
    heading: heading,
    AppButton: appbutton
  },
  data() {
    return {
      featuredProducts: featuredProducts,
      padding_100: "custom-padding-top-100",
      padding_150: "custom-padding-top-150",
      content_container_body_2: true,
      single_service_inner_container: "single-service-inner-container",
      buttondata: {
        fronttext: "View Product",
        hovertext: "Go ahead !",
        buttoncolorclass: "bg-black",
        buttonbackbganimationclass: "bg-gray-200",
        buttontextcolorclass: "text-white",
        buttontexthovercolorclass: "text-gray-900",
        buttenUrl: "#"
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
    getfeaturedProductDetails() {
      return this.featuredProducts.find(
        featuredProduct => featuredProduct.slug === this.slug
      );
    },
    galleryImagess: function() {
      return this.getfeaturedProductDetails.galleryImages.forEach(function(e) {
        this.imggg.push(e.url);
      });
    }
  },
  mounted: function() {}
};
</script>