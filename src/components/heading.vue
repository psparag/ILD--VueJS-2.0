<template>
  <div>
    <div class="break-image-section-grid--row1" v-if="headingdata.headingsize === 'small'">
      <div class="section-paragraph">
        <p
          class="text-lg custom-xs-heading-font-18 uppercase smli-font text-gray-900 text-center custom-text-left letter-spacing-4"
          v-if="headingdata.headingtext"
        >{{headingdata.headingtext}}</p>
        <div
          v-if="headingdata.paragraphtext"
          v-bind:class="'break-image-section-grid-row1--text custom-xs-p-font-26 custom-paragraph-size-1 text-center custom-text-left mx-auto  ' + (headingdata.headingtext ? 'custom-padding-top-78' : '')"
        >
          <div
            class="text-gray-800 c-paragraph-text custom-line-spacing-44"
            v-html="headingdata.paragraphtext"
          ></div>
        </div>
      </div>
    </div>

    <div
      class="heading-1 break-image-section-grid--row3"
      v-else-if="headingdata.headingsize === 'large'"
    >
      <div class="section-paragraph">
        <p
          v-if="headingdata.headingtext"
          class="break-image-section-grid-row3--large-text custom-xs-heading-font-18 custom-heading-size-2 text-center custom-text-left letter-spacing-10 uppercase text-gray-900 smli-font"
        >{{headingdata.headingtext}}</p>
        <div
          v-if="headingdata.paragraphtext"
          v-bind:class="'break-image-section-grid-row3--text custom-xs-p-font-26 custom-paragraph-size-2 text-center custom-text-left mx-auto  ' + (headingdata.headingtext ? 'custom-padding-top-90 c-padding-t-78' : '')"
        >
          <div
            class="text-gray-800 c-paragraph-text custom-line-spacing-33"
            v-html="headingdata.paragraphtext"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "headingwithtext",
  props: {
    headingdata: Object
  }
};
</script>