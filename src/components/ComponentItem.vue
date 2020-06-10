<template>
  <div class="item-section-grid-row2-grid--column1">
    <ul class="category-filter c-xs-grid-column-2 " v-if="showFilters">
      <li class="filter-parent-list--item">
        <a href="#" class="uppercase">View All</a>
      </li>
      <li class="filter-parent-list--item">
        <ul class="filter-child-list-item c-xs-grid-column-1 c-xs-grid-column-1-grid-gap">
          <li v-for="n in 5" :key="n">
            <a href="#" class="text-gray-300 uppercase">Filter category</a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="item-section-grid-row2-grid-column1--grid--outer-grid right">
      <div class="item-section-grid-text--wrapper">
        <div
          :class="'item-section-grid-row2-grid-column1--grid c-xs-grid-column-2 ' + (showFilters ? 'custom-padding-top-150 c-padding-t-80' : '')"
        >
          <div class="item" v-for="item in data" :key="item.id">
            <router-link
              class="custom-cursor-none"
              :to=" {name: item.page, params: {slug: item.slug}} "
            >
              <img
                :src="getImgUrl(item.thumbnailUrl, item.page)"
                alt
                class="w-full bg-gray-800 object-cover object-top img-size-responsive feature-items-on-hover-animation"
              />
              <div class="item-member-grid c-xs-grid-item-grid pt-5">
                <p class="text-sm item-member-grid--text uppercase">{{item.heroSection.title}}</p>
                <div></div>
                <img
                  src="/img/right_small_arrow.fd6a9465.svg"
                  alt
                  class="w-6 h-4 item-section--arrow feature-partner-section--arrow"
                />
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentItem",
  props: {
    data: {
      type: Array
    },
    showFilters: {
      type: Boolean
    }
  },
  methods: {
    getImgUrl: function(img, page) {
      if (page == "TeamSingle") {
        return require("../assets/team/" + img);
      } else {
        return require("../assets/img/" + img);
      }
    }
  }
};
</script>