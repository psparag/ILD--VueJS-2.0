<template>
  <div class="projects-section">
    <!-- gallery -->
    <div class="gallery-container relative overflow-x-hidden">
      <div class="movable-gallery-container relative z-10">
        <!-- item 1 -->
        <div
          v-bind:class="`movable-gallery-item relative ` +  ( (index + 1) % 2 == 0 ? 'mt-16':'') "
          v-for="(service, index) in services"
          :key="service.id"
        >
          <router-link
            class="custom-cursor-none"
            :to=" {name: 'ServiceSingle', params: {slug: service.slug}} "
          >
            <div
              class="movable-gallery-number text-2xl z-10 pointer-events-none smli-font letter-spacing-2 text-gray-900"
            >{{service.heroSection.id }}</div>
            <div class="movable-gallery-image-container">
              <div class="movable-gallery-image overflow-hidden">
                <img :src="getImgUrl(service.thumbnailUrl)" alt class="h-full w-full object-cover" />
              </div>
            </div>
            <div class="movable-gallery-project-detail z-10 mt-10">
              <div
                class="movable-gallery-project-detail-line border border-gray-900 pointer-events-none"
              ></div>
              <div class="arrow-inner-grid">
                <p
                  class="text-sm letter-spacing-2 uppercase text-gray-900"
                >{{ service.heroSection.title }}</p>
                <img :src="getImgUrl('right_small_arrow.svg')" alt class="w-6 h-4" />
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="mouseareas absolute top-0 bottom-0 h-full w-full left-0" style="z-index: -10;">
        <div class="mouseareas-left"></div>
        <div class="mouseareas-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "servicecarousel",
  props: {
    services: {
      type: Array
    }
  },
  methods: {
    getImgUrl: function(img) {
      return require("../assets/img/" + img);
    }
  }
};
</script>