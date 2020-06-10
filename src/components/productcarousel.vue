<template>
  <div class="projects-section">
    <!-- gallery -->
    <div class="gallery-container relative overflow-x-hidden">
      <div class="movable-gallery-container relative z-10">
        <!-- item 1 -->
        <div
          v-bind:class="`movable-gallery-item relative ` +  ( (index + 1) % 2 == 0 ? 'mt-16':'') "
          v-for="(project, index) in projects"
          :key="project.id"
        >
          <router-link
            class="custom-cursor-none"
            :to=" {name: 'ProductSingle', params: {slug: project.slug}} "
          >
            <div
              class="movable-gallery-number text-2xl z-10 pointer-events-none smli-font letter-spacing-2 text-gray-900"
            >{{ project.heroSection.id }}</div>
            <div class="movable-gallery-image-container">
              <div class="movable-gallery-image overflow-hidden">
                <img :src="getImgUrl(project.thumbnailUrl)" alt class="h-full w-full object-cover" />
              </div>
              <div
                class="movable-gallery-project-title pointer-events-none text-gray-200 absolute smli-font"
              >
                <div class="movable-gallery-project-title-split uppercase text-center">
                  <p class="letter-spacing-10">{{ project.heroSection.title }}</p>
                </div>
              </div>
            </div>
            <div class="movable-gallery-project-detail z-10 mt-10">
              <div
                class="movable-gallery-project-detail-line border border-gray-900 pointer-events-none"
              ></div>
              <p
                class="text-sm letter-spacing-2 uppercase text-gray-900"
              >{{ project.heroSection.date }}</p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="mouseareas absolute top-0 bottom-0 h-full w-full left-0" style="z-index: -10;">
        <div class="mouseareas-left"></div>
        <div class="mouseareas-right"></div>
      </div>
      <div class="custom-padding-top-100 c-padding-t-80">
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
  name: "productcarousel",
  components: {
    AppButton: appbutton
  },
  props: {
    projects: {
      type: Array
    }
  },
  data() {
    return {
      buttondata: {
        fronttext: "Browse all Projects",
        hovertext: "Go ahead !",
        buttoncolorclass: "bg-black",
        buttonbackbganimationclass: "bg-gray-200",
        buttontextcolorclass: "text-white",
        buttontexthovercolorclass: "text-gray-900",
        buttenUrl: "/work"
      }
    };
  },
  methods: {
    getImgUrl: function(img) {
      return require("../assets/img/" + img);
    }
  }
};
</script>