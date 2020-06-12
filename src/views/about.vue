<template>
  <div class="about">
    <!-- <app-cursor></app-cursor> -->

    <!-- <appnavigation></appnavigation> -->

    <appheader></appheader>

    <!-- main section starts -->
    <section class="viewport">
      <div id="scroll-container" class="scroll-container">
        <div class="content bg-white about-page">
          <page-title pageTitle="© About Us"></page-title>
          <herosection v-bind:herodata="herodata"></herosection>

          <!-- Container starts -->
          <div class="relative c-z-2">
            <div class="ild-container">
              <div class="ild-container-contents w-full">
                <heading v-bind:headingdata="headingdata"></heading>
                <imagegallerywithbackground v-bind:class="padding_150" v-bind:images="break_images"></imagegallerywithbackground>
                <heading v-bind:headingdata="headingdata2" v-bind:class="padding_200"></heading>
                <imagegallerywithtext
                  v-bind:imagegallerydata="imagegallerydata"
                  v-bind:class="padding_100"
                ></imagegallerywithtext>
                <div class="ild-logo-container">
                  <div class="ild-logo-contents custom-padding-top-250 c-padding-t-110">
                    <div class="logo-container">
                      <div class="ild-logo">
                        <img src="../assets/ild_logo.png" alt class="w-full h-full object-cover" />
                      </div>
                      <div
                        class="text-gray-900 w-full smli-font custom-heading-size-2 letter-spacing-10"
                      >
                        <p
                          class="custom-text-left our-logo-text custom-xs-heading-font-18 custom-line-spacing-39 uppercase"
                        >Our logo</p>
                      </div>
                    </div>
                    <heading v-bind:headingdata="headingdata3" v-bind:class="padding_78"></heading>
                  </div>
                </div>
                <heading v-bind:headingdata="headingdata4" v-bind:class="padding_200"></heading>
                <div class="custom-padding-top-100 c-padding-t-110">
                  <service-carousel v-bind:services="services"></service-carousel>
                </div>
                <heading v-bind:headingdata="headingdata5" v-bind:class="padding_200"></heading>
                <div class="custom-padding-top-100 c-padding-t-110">
                  <design-carousel v-bind:designProcess="designProcess"></design-carousel>
                </div>
                <div class="team-carosuel-container custom-padding-top-200">
                  <team-carousel v-bind:teams="featuredTeamMembers" :class="teamgalleryBackground"></team-carousel>
                </div>
              </div>
            </div>
            <appfooter></appfooter>
          </div>
          <!-- Container ends -->
        </div>
      </div>
    </section>
    <!-- main section ends  -->
  </div>
</template>

<script>
import TeamCarousel from "../components/TeamCarousel";
import herosection from "../components/herosection";
import heading from "../components/heading";
import imagegallerywithtext from "../components/imagegallerywithtext";
import imagegallerywithbackground from "../components/imagegallerywithbackground";
import ServiceCarousel from "../components/ServiceCarousel";
import DesignCarousel from "../components/DesignCarousel";
import services from "../json/services.json";
import appfooter from "../components/AppFooter";
import designProcess from "../json/designProcess.json";
import teams from "../json/team.json";
import { testmixins } from "../assets/mixins/testmixins.js";

export default {
  name: "about",
  mixins: [testmixins],
  components: {
    herosection: herosection,
    imagegallerywithbackground: imagegallerywithbackground,
    heading: heading,
    appfooter: appfooter,
    imagegallerywithtext: imagegallerywithtext,
    "team-carousel": TeamCarousel,
    "service-carousel": ServiceCarousel,
    "design-carousel": DesignCarousel
  },
  data() {
    return {
      herodata: {
        subtitle: `
                    <span class="uppercase text-gray-900 smli-font letter-spacing-2">
                        About Us
                	</span>`,
        title: `<div class="hero-heding-text--animation overflow-hidden"><p class="text-left opacity-50 herosection-about-ml-line-1">Art</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-60">Architecture</p></div>
                <div class="hero-heding-text--animation overflow-hidden"><p class="title-heading-main-text--mobile-margin-top -mt-4 opacity-70 text-right">Aesthetics</p></div>`
      },
      break_images: ["picture_14.jpg", "picture_20.jpg", "picture_10.jpg"],
      headingdata: {
        headingid: "01",
        headingsize: "small",
        headingtext: "our story",
        paragraphtext:
          "<p>Mastering ambient lighting technology and unravelling the complexities of electrical lighting,  Vikram Jain, the director of Innovative Lighting Designs Limited, started his career back in 1993 with the manufacturing of electrical ballasts and light batons (traditional lighting systems). With a desire to keep learning and evolving, he took another step to expand his business by manufacturing ceiling panels, downlight fixtures and trading some commercial fixtures from Far-East Countries. </p> <p>In 2006, Vikram attended the Light + Build fair in Germany, which inspired him to take Lighting to another dimension. After realizing the technological urgency this industry requires, Innovative Lighting Designs Limited (ILDL) started partnering and having exclusive sales agreements with some of the leading lighting brands from across the globe. What started off with just one single brand representation took multiple manifolds over the years as ILDL today represents 16+ brands from across the world.From manufacturing and marketing a few lighting products to single handedly conceiving, creating and executing his ideas to reality, Innovative was born.</p> <p>ILDL started off in 2006 with an ideology to translate lateral thinking into actionable processes that will contribute to improve on existing techniques and provide value-added services to our customers. Vikram and his team have created a virtual lighting think – tank, inspiring people and transforming spaces with light.</p>"
      },
      headingdata2: {
        headingid: "02",
        headingsize: "large",
        headingtext: "our mission",
        paragraphtext:
          "<p>ILDL’s aim is to be recognised as the leading lighting solutions provider for South and South-East Asia, backed up by the highest standards of quality, ethics and integrity. </p> <p>We believe in promoting a culture that benefits our clients as well as our employees. We strive to create a work environment that encourages employee engagement at all levels to achieve outstanding performance and continuous improvement. We aspire to convert our love and passion for lighting into products that would provide both utility and solace to our customers.</p>"
      },
      headingdata3: {
        headingsize: "large",
        paragraphtext:
          "<p>Our logo embodies the ideals of the company. The brand symbol is based on the luminance flux (ϕ), representing not only the lighting aspect but also a new aesthetic that communicates the values of our brand: efficiency, integrity, growth and innovation. The bold typography is chosen to complement the symbol, resulting in a logo with a geometric rigour matched by the freedom of the curves. Through the white background, we aim to convey the limitless ability of the company to develop and adapt based on the ever-changing world while the contrasting black shows the company’s confidence and certainty. </p><p>The overall contrast in the black and white signifies unity, and demonstrates the element of the light present that enables the viewer to see the potential of the company. The result intends to create a fresh, positive and hopeful communication system coherent across all mediums to better express the ‘innovative’ work we do. </p>"
      },
      headingdata4: {
        headingid: "04",
        headingsize: "large",
        headingtext: "Services at Ild"
      },
      headingdata5: {
        headingsize: "large",
        headingtext: "design and development Approach"
      },
      imagegallerydata: [
        {
          id: "34+",
          text: "No of Empolyees"
        },
        {
          id: "23+",
          text: "Partner brands "
        },
        {
          id: "2006",
          text: "Established "
        }
      ],
      services: services,
      designProcess: designProcess,
      teams: teams,
      padding_120: "custom-padding-top-120 c-padding-t-110",
      padding_100: "custom-padding-top-100",
      padding_78: "custom-padding-top-78",
      padding_42: "custom-pt-42 c-padding-t-110",
      padding_250: "custom-padding-top-250 c-padding-t-110",
      padding_200: "custom-padding-top-200 c-padding-t-100",
      padding_150: "custom-padding-top-150",
      teamgalleryBackground: "teamgalleryBackground"
    };
  },
  computed: {
    featuredTeamMembers: function() {
      return this.teams.filter(function(teams) {
        return teams.type === "featured";
      });
    }
  }
};
</script>