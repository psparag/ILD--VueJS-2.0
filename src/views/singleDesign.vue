<template>
  <div class="project-single">
    <!-- <appnavigation></appnavigation> -->
    <appheader></appheader>

    <!-- main section starts -->
    <section class="viewport">
      <div id="scroll-container" class="scroll-container">
        <div class="content bg-white">
          <page-title :pageTitle="getDesignApproach.heroSection.title"></page-title>
          <div class="relative c-z-6">
            <!-- Container starts -->
            <div class="relative">
              <div class="information-container">
                <div class="single-service-contents custom-padding-top-100">
                  <div class="information-container--grid">
                    <productherosection
                      v-bind:herosectiondata="getDesignApproach.heroSection"
                      v-bind:class="single_service_inner_container"
                    ></productherosection>
                    <heading
                      v-bind:headingdata="getDesignApproach.headingOne"
                      v-bind:class="padding_100"
                    ></heading>
                  </div>
                </div>
                <div class="single-project-extraContents custom-padding-bottom-200">
                  <heading
                    v-for="(extraContents, index) in getDesignApproach.extraContents"
                    :key="index"
                    v-bind:headingdata="extraContents"
                    v-bind:class="padding_100"
                  ></heading>
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

import designApproach from "../json/designProcess.json";

export default {
  name: "DesignSingle",
  mixins: [testmixins],
  components: {
    productherosection: productherosection,
    heading: heading
  },
  data() {
    return {
      designApproach: designApproach,
      padding_100: "custom-padding-top-100",
      padding_150: "custom-padding-top-150",
      content_container_body_2: true,
      single_service_inner_container: "single-service-inner-container"
    };
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    getDesignApproach() {
      return this.designApproach.find(design => design.slug === this.slug);
    },
    galleryImagess: function() {
      return this.getDesignApproach.galleryImages.forEach(function(e) {
        this.imggg.push(e.url);
      });
    }
  },
  mounted: function() {}
};
</script>