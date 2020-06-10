<template>
  <!-- about us page section    -->
  <div class="about-us-stats-section">
    <div class="about-us-stats-section--container relative">
      <div class="w-full overflow-x-hidden">
        <div class="about-us-stats-section-container--grid">
          <!-- item -->
          <div
            v-for="(galleryitem, index) in imagegallerydata"
            :class="'stats-item-container stats-item-1 text-center ' +  ( index % 2 != 0 ? 'mt-16':'')"
            :key="galleryitem.id"
          >
            <div class="stat-item-contents relative">
              <div
                class="stats-number z-10 pointer-events-none smli-font mx-auto"
              >{{galleryitem.id}}</div>
              <div
                class="stats-info-container text-center w-full pointer-events-none text-gray-900 pt-10"
              >
                <p>{{galleryitem.text}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "imagegallerywithtext",
  props: ["imagegallerydata"],
  methods: {
    getImgUrl: function(img) {
      return require("../assets/img/" + img);
    }
  }
};
</script>