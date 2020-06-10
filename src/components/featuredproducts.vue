<template>
  <div
    :class="`feature-partner-section-grid-row2-grid--column1 content-container-body ` + margintopclass(padding_150)"
  >
    <div
      class="feature-partner-section-grid-row2-grid-column1--grid--outer-grid"
      :class="gridClass"
    >
      <div class="feature-partner-section-grid-row2-grid-column2--grid" v-if="gridDataLeft"></div>
      <div class="feature-partner-section-grid-text--wrapper">
        <p
          class="featured-partner-heading text-lg text-gray-700 text-left feature-partner-section-grid-row2-grid-column1--heading smli-font uppercase letter-spacing-4"
          v-if="gridDataRight"
        >Featured products from partners</p>
        <p
          class="featured-partner-heading text-lg text-gray-700 text-left feature-partner-section-grid-row2-grid-column1--heading smli-font uppercase letter-spacing-4"
          v-if="gridDataLeft"
        >Featured projects from partners</p>
        <div class="feature-partner-section-grid-row2-grid-column1--grid">
          <div v-for="data in featuredData" :key="data.id" class="feature-project-1">
            <router-link
              class="custom-cursor-none"
              :to=" {name: data.page, params: {slug: data.slug}} "
            >
              <img
                :src="getImgUrl(data.thumbnailUrl)"
                alt
                class="w-full bg-black object-cover img-size-responsive feature-items-on-hover-animation"
              />
              <div class="feature-product-grid pt-5">
                <p
                  class="text-sm feature-product-grid--text uppercase letter-spacing-2 text-gray-900"
                >{{ data.heroSection.title }}</p>
                <div></div>
                <img
                  :src="getImgUrl('right_small_arrow.svg')"
                  alt
                  class="w-6 h-4 feature-partner-section--arrow"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="feature-partner-section-grid-row2-grid-column2--grid" v-if="gridDataRight"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "featuredproductsaa",
  props: {
    featuredData: {
      type: Array
    },
    padding_150: {
      type: String
    },
    gridClass: {
      type: String
    },
    gridDataLeft: {
      type: String
    },
    gridDataRight: {
      type: String
    }
  },
  // computed: {
  //     featuredprojects: function () {
  //         return this.projects.filter(function (project) {
  //             return project.type === 'featured'
  //         })
  //     }
  // },
  methods: {
    getImgUrl: function(img) {
      return require("../assets/img/" + img);
    },
    margintopclass: function(padding_150) {
      return padding_150 ? padding_150 : "";
    }
  }
};
</script>