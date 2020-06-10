<template>
  <div class="project-single">
    <appnavigation></appnavigation>
    <appheader></appheader>

    <!-- main section starts -->
    <section class="viewport">
      <div id="scroll-container" class="scroll-container">
        <div class="content bg-white">
          <page-title :pageTitle="getProject.heroSection.title"></page-title>
          <div class="relative c-z-6">
            <!-- Container starts -->
            <div class="relative">
              <div class="information-container">
                <div class="single-project-contents custom-padding-top-100">
                  <div class="information-container--grid">
                    <productherosection v-bind:herosectiondata="getProject.heroSection"></productherosection>
                    <heading v-bind:headingdata="getProject.headingOne" v-bind:class="padding_100"></heading>
                  </div>
                </div>
                <div class="break-image-section information-page-break-section">
                  <div
                    class="break-image-section--grid information-page-break-section--grid w-full productsingle-page-gridgap"
                  >
                    <imagegallery
                      v-bind:class="padding_150"
                      v-bind:images="getProject.galleryImages"
                      v-bind:content_container_body_2="content_container_body_2"
                    ></imagegallery>
                    <!-- <heading v-bind:headingdata="getProject.headingTwo"></heading> -->
                  </div>
                </div>
                <div class="single-project-extraContents custom-padding-bottom-200">
                  <heading
                    v-for="(extraContents, index) in getProject.extraContents"
                    :key="index"
                    v-bind:headingdata="extraContents"
                    v-bind:class="padding_150"
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
import imagegallery from "../components/imagegallery";
import { testmixins } from "../assets/mixins/testmixins.js";

import projects from "../json/projects.json";

export default {
  name: "productsingle",
  mixins: [testmixins],
  components: {
    productherosection: productherosection,
    heading: heading,
    imagegallery: imagegallery
  },
  data() {
    return {
      projects: projects,
      padding_100: "custom-padding-top-100",
      padding_150: "custom-padding-top-150 c-padding-t-100",
      content_container_body_2: true
    };
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    getProject() {
      return this.projects.find(project => project.slug === this.slug);
    },
    galleryImagess: function() {
      return this.getProject.galleryImages.forEach(function(e) {
        this.imggg.push(e.url);
      });
    }
  }
};
</script>