<template>
  <div id="app">
    <app-cursor></app-cursor>
    <!-- <loader></loader> -->
    <pagebackground></pagebackground>
    
    <transition name="fade">
        <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>




<script>
//import './assets/js/SplitTextPlugin';

import "./assets/css/tailwind.css";
// import { gsap } from "gsap";
// import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
// import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
// import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
import "./assets/css/custom-style.css";
//import './assets/js/mousemove.js'
//require('./assets/js/mousemove.js');

// import Loader from "./components/Loader";
import pagebackground from "./components/pagebackground";

export default {
  name: "App",
  components: {
    // loader: Loader,
    pagebackground: pagebackground
  }
};
</script>



<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
