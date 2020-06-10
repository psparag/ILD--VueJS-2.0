<template>
  <div class="projects-section">
    <!-- gallery -->
    <div
      class="gallery-container relative overflow-x-hidden custom-padding-top-100 custom-padding-bottom-100"
    >
      <p
        class="break-image-section-grid-row3--large-text text-5xl text-center letter-spacing-10 uppercase text-white smli-font custom-xs-heading-font-18"
      >team at Ild</p>
      <div class="movable-gallery-container relative z-10 custom-padding-top-100">
        <!-- item 1 -->
        <div
          v-bind:class="`movable-gallery-item relative ` +  ( (index + 1) % 2 == 0 ? 'mt-16':'') "
          v-for="(team, index) in teams"
          :key="team.id"
        >
          <router-link
            class="custom-cursor-none"
            :to=" {name: 'TeamSingle', params: {slug: team.slug}} "
          >
            <div
              class="movable-gallery-number text-2xl z-10 pointer-events-none smli-font letter-spacing-2 text-white"
            >{{ team.heroSection.id }}</div>
            <div class="movable-gallery-image-container">
              <div class="movable-gallery-image overflow-hidden">
                <img :src="getImgUrl(team.thumbnailUrl)" class="h-full w-full object-cover" />
              </div>
              <div
                class="movable-gallery-project-title pointer-events-none text-gray-200 absolute smli-font"
              >
                <div class="movable-gallery-project-title-split uppercase text-center">
                  <p class="letter-spacing-10">{{ team.heroSection.title }}</p>
                </div>
              </div>
            </div>
            <div class="movable-gallery-project-detail z-10 mt-10">
              <div
                class="movable-gallery-project-detail-line border border-white pointer-events-none"
              ></div>
              <p class="text-sm letter-spacing-2 uppercase text-white">{{ team.designation }}</p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="mouseareas absolute top-0 bottom-0 h-full w-full left-0" style="z-index: -10;">
        <div class="mouseareas-left"></div>
        <div class="mouseareas-right"></div>
      </div>
      <div class="custom-padding-top-100">
        <keep-alive>
          <AppButton v-bind:buttondata="buttondata"></AppButton>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import appbutton from "../components/appbutton.vue";

export default {
  name: "TeamCarousel",
  components: {
    AppButton: appbutton
  },
  props: {
    teams: {
      type: Array
    }
  },
  data() {
    return {
      buttondata: {
        fronttext: "Browse our Team",
        hovertext: "Go ahead !",
        buttoncolorclass: "bg-white",
        buttonbackbganimationclass: "bg-black",
        buttontextcolorclass: "text-black",
        buttontexthovercolorclass: "text-white",
        buttenUrl: "/team"
      }
    };
  },
  methods: {
    getImgUrl: function(img) {
      return require("../assets/team/" + img);
    }
  }
};
</script>
<style scoped>
.projects-section {
  background-color: #111111;
}
.movable-gallery-item {
  background: transparent;
}
</style>