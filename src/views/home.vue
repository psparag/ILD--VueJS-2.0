<template>
  <div class="home">
    <!-- <app-cursor></app-cursor> -->
    <appnavigation></appnavigation>
    <appheader></appheader>

    <!-- main section starts -->
    <section class="viewport">
      <div id="scroll-container" class="scroll-container">
        <div class="content bg-white">
          <page-title pageTitle="© ILD"></page-title>
          <herosection v-bind:herodata="herodata"></herosection>
          <!-- Container starts -->
          <div class="relative c-z-2">
            <div class="break-image-section">
              <div class="break-image-section--grid custom-padding-top-200 c-padding-t-110 w-full">
                <heading v-bind:headingdata="headingdata"></heading>
                <imagegallery
                  v-bind:padding_200="padding_200"
                  v-bind:images="shuffledImages"
                  v-bind:class="padding_200"
                ></imagegallery>
                <heading v-bind:headingdata="headingdata2" v-bind:class="padding_200"></heading>
              </div>
            </div>
            <div class="custom-padding-top-100 c-padding-b-0 c-padding-t-80">
              <productcarousel v-bind:projects="carouselProjectData"></productcarousel>
            </div>
            <div class="feature-partner-section">
              <div class="feature-partner-section-container custom-padding-top-200 c-padding-t-100">
                <div class="feature-partner-section--grid w-full">
                  <div
                    class="feature-partner-section-grid--row1 text-gray-900 smli-font custom-heading-size-2 letter-spacing-10"
                  >
                    <p
                      class="text-center custom-text-left custom-xs-heading-font-18 custom-line-spacing-39 section-heading mx-auto uppercase"
                    >Featured partner products and projects</p>
                  </div>
                  <div
                    class="feature-partner-section-grid--row2 custom-padding-top-100 text-gray-800"
                  >
                    <div class="feature-partner-section-grid-row2">
                      <featuredproducts
                        v-bind:featuredData="featuredProductsData"
                        gridClass="left"
                        gridDataRight="true"
                      ></featuredproducts>
                      <featuredproducts
                        v-bind:padding_150="padding_150"
                        v-bind:featuredData="featuredProjectsData"
                        gridClass="right"
                        gridDataLeft="true"
                      ></featuredproducts>
                    </div>
                  </div>
                  <div class="feature-partner-section-grid--row3 mx-auto text-center leading-tight">
                    <heading v-bind:headingdata="headingdata3" v-bind:class="padding_200"></heading>
                    <div class="custom-padding-top-100">
                      <div class="button-grid--home mx-auto">
                        <AppButton v-bind:buttondata="buttondata1"></AppButton>
                        <div class="gallery-browse-button w-64 mx-auto text-center">
                          <button
                            class="custom-cursor-none w-full focus:outline-none"
                            @click="scrollTofooter"
                          >
                            <div
                              class="bg-gray-200 temp-button overflow-hidden animate-link button-hover-animation h-16 relative text-xs leading-none uppercase letter-spacing-2"
                            >
                              <div class="bg-black button-background z-0 absolute bottom-0 left-0"></div>
                              <div
                                class="button-first-text-container overflow-hidden h-4 w-64 absolute text-center"
                              >
                                <p class="text-black button-first-text">Get In touch with us</p>
                              </div>
                              <div
                                class="button-second-text-container overflow-hidden h-4 w-64 absolute text-center"
                              >
                                <p class="text-white button-second-text">Go ahead !</p>
                              </div>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <appfooter v-bind:class="padding_200"></appfooter>
                </div>
              </div>
            </div>
          </div>
          <!-- Container ends -->
        </div>
      </div>
    </section>
    <!-- main section ends  -->
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);
// import appbutton from "../components/appbutton"
import productcarousel from "../components/productcarousel";
import appbutton from "../components/appbutton.vue";
import herosection from "../components/herosection";
import appfooter from "../components/AppFooter";
import featuredproducts from "../components/featuredproducts";
import imagegallery from "../components/imagegallery";
import heading from "../components/heading";
import { testmixins } from "../assets/mixins/testmixins";

import projects from "../json/projects.json";
import featuredProductsData from "../json/featuredProducts.json";
import featuredProjectsData from "../json/featuredProjects.json";

export default {
  name: "home",
  mixins: [testmixins],
  gsap: [gsap],
  ScrollToPlugin: [ScrollToPlugin],
  components: {
    // AppButton: appbutton,
    productcarousel: productcarousel,
    AppButton: appbutton,
    herosection: herosection,
    appfooter: appfooter,
    featuredproducts: featuredproducts,
    imagegallery: imagegallery,
    heading: heading
  },
  data() {
    return {
      buttondata1: {
        fronttext: "Know more about us",
        hovertext: "Go ahead !",
        buttoncolorclass: "bg-black",
        buttonbackbganimationclass: "bg-gray-200",
        buttontextcolorclass: "text-white",
        buttontexthovercolorclass: "text-black",
        buttenUrl: "about"
      },
      buttondata2: {
        fronttext: "Get In touch with us",
        hovertext: "Go ahead !",
        buttoncolorclass: "bg-gray-200",
        buttonbackbganimationclass: "bg-black",
        buttontextcolorclass: "text-black",
        buttontexthovercolorclass: "text-white",
        buttenUrl: "#"
      },
      herodata: {
        subtitle: `<span>
                    ©
                    <span class="uppercase text-gray-900 smli-font letter-spacing-2">
                        ILD
                    </span>
                </span>`,
        title: `<div class="hero-heding-text--animation overflow-hidden"><p class="text-left opacity-50">Intelligent</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-60 herosection-home-ml-line-2">Inspiring</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-70 text-right">Inventive</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-80 herosection-home-ml-line-4">Iconic</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-90">Illumination</p></div>`
      },
      buttonblackdata: {
        fronttext: "Learn more about us",
        hovertext: "Go ahead !",
        buttoncolorclass: "bg-gray-900",
        buttonbackbganimationclass: "bg-gray-100",
        buttontextcolorclass: "text-white",
        buttontexthovercolorclass: "text-gray-900"
      },
      headingdata: {
        headingsize: "small",
        headingtext: "Innovative lighting design (ILD)",
        paragraphtext:
          "<p>Creative lighting that understands design.<br>The best spatial designs deserve the best lighting solutions. At ILD, the latest lighting trends, from across the world, are combined with pioneering technology to create extraordinary luminaries.</p> <p>This is the lighting your work of art needs.</p> "
      },
      headingdata2: {
        headingsize: "large",
        headingtext: "Projects by ild"
      },
      headingdata3: {
        headingtext: "What we do",
        headingsize: "small",
        paragraphtext:
          "<p>ILD offers the most technologically advanced, energy-efficient, and superior grade lighting systems which understand design and illuminate spaces the way they should be. We strive to give your creativity the light it needs to shine and resonate through the world. As exclusive distributors for the leading lighting manufacturers in the world, ILD is known for its quality and trust and stands in a unique position to understand your project like no one else. </p> <p>With our constant research on global trends and a cohesive design team, ILD is a well-rounded, one-stop destination for creators who want their work to shine.</p>"
      },
      padding_150: "custom-padding-top-150 c-padding-t-80",
      padding_200: "custom-padding-top-200 c-padding-t-100",
      padding_250: "custom-padding-top-250 c-padding-t-150",
      padding_350: "custom-padding-top-350 c-padding-t-110",

      carouselProjectData: projects,
      featuredProductsData: featuredProductsData,
      featuredProjectsData: featuredProjectsData,
      bgImages: [
        "picture_1.png",
        "picture_2.png",
        "picture_3.png",
        "picture_4.png",
        "picture_5.png"
      ]
    };
  },
  computed: {
    shuffledImages: function() {
      return this.shuffle(this.bgImages).slice(0, 3);
    }
  },
  methods: {
    scrollTofooter: function() {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: ".ild-footer-container", offsetY: 0 },
        ease: "power2.in"
      });
    },
    getImgUrl: function(img) {
      return require("../assets/img/" + img);
    },
    shuffle: function(array) {
      var j, x, i;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
      }
      return array;
    }
  }
};
</script>