<template>
  <div class="gallery-browse-button w-64 mx-auto text-center">
    <router-link class="custom-cursor-none" :to="buttondata.buttenUrl">
      <div
        v-bind:class="buttondata.buttoncolorclass + ` temp-button overflow-hidden animate-link button-hover-animation h-16 relative text-xs leading-none uppercase letter-spacing-2`"
      >
        <div
          v-bind:class="buttondata.buttonbackbganimationclass + ` button-background z-0 absolute bottom-0 left-0`"
        ></div>
        <div class="button-first-text-container overflow-hidden h-4 w-64 absolute text-center">
          <p
            v-bind:class="buttondata.buttontextcolorclass + ` button-first-text `"
          >{{buttondata.fronttext}}</p>
        </div>
        <div class="button-second-text-container overflow-hidden h-4 w-64 absolute text-center">
          <p
            v-bind:class="buttondata.buttontexthovercolorclass + ` button-second-text`"
          >{{buttondata.hovertext}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
//import {gsap} from "gsap"

export default {
  name: "appbutton",
  props: {
    buttondata: Object
  }
};
</script>