<template>
  <!-- Menu Starts -->
  <div class="menu fixed h-screen w-screen hidden z-40">
    <div class="menu--container">
      <div class="menu-background absolute h-0 w-screen left-0 top-0 bg-gray-900"></div>
      <div class="menu-container--content relative">
        <div class="menu-container-content--titles h-100 z-50 w-full absolute">
          <div class="menu-container-content-titles--grid py-16 pointer-events-none">
            <div class="overflow-y-hidden">
              <h1
                class="uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
              >
                <router-link class="custom-cursor-none" to="/">Home</router-link>
              </h1>
            </div>
            <div class="overflow-y-hidden">
              <h1
                class="uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
              >
                <router-link class="custom-cursor-none" to="/about">About</router-link>
              </h1>
            </div>
            <div class="overflow-y-hidden">
              <h1
                class="uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
              >
                <router-link class="custom-cursor-none" to="/work">Work</router-link>
              </h1>
            </div>
            <div class="overflow-y-hidden">
              <h1
                class="uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
              >
                <router-link class="custom-cursor-none" to="/brands">Brands</router-link>
              </h1>
            </div>
            <div class="overflow-y-hidden">
              <h1
                class="uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
              >
                <router-link class="custom-cursor-none" to="/team">Team</router-link>
              </h1>
            </div>
          </div>
        </div>
        <div class="menu-container-content--rotating-pictures absolute">
          <img
            src="@/assets/img/1.jpg"
            alt
            class="absolute image animation-rotation object-cover opacity-0"
          />
          <img
            src="@/assets/img/2.jpg"
            alt
            class="absolute image animation-rotation object-cover opacity-0"
          />
          <img
            src="@/assets/img/3.jpg"
            alt
            class="absolute image animation-rotation object-cover opacity-0"
          />
          <img
            src="@/assets/img/4.jpg"
            alt
            class="absolute image animation-rotation object-cover opacity-0"
          />
          <img
            src="@/assets/img/3.jpg"
            alt
            class="absolute image animation-rotation object-cover opacity-0"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- Menu Ends -->
</template>

<script>
//import { gsap } from "gsap";

export default {
  name: "navigation"
};
</script>