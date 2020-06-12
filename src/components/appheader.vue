<template>
  <div>
    <!-- Sidebar Section starts -->
    <div class="sidebar-fixed-section pt-16 fixed right-0 h-full z-50 pointer-events-none">
      <div class="overflow-y-hidden sidebar-fixed-section-grid--div">
        <p
          @click="headerMenu()"
          ref="menu_toggler"
          class="text-xs sidebar-fixed-section-grid--menu uppercase text-right text-gray-900 pointer-events-auto animate-link"
        >Menu</p>
      </div>
      <p
        ref="ild_email"
        class="sidebar-fixed-section-grid--email uppercase text-xs text-gray-900 pointer-events-auto animate-link custom-xs-hidden"
      >contact@ILDLIMITED.COM</p>
      <div
        ref="dark_mode_toggle"
        class="sidebar-fixed-section-grid--dark-mode uppercase text-xs animate-link flex flex-row custom-xs-hidden"
      >
        <div class="bg-black h-3 w-3 rounded-full"></div>
        <p
          class="sidebar-fixed-section-grid-dark-mode--text ml-6 text-gray-900 pointer-events-auto"
        >Try the dark mode</p>
      </div>
    </div>
    <!-- Sidebar Section ends -->
    <!-- Menu Starts -->
    <div ref="menu" class="menu fixed h-screen w-screen hidden z-40">
      <div class="menu--container">
        <div
          ref="menu_background"
          class="menu-background absolute h-0 w-screen left-0 top-0 bg-gray-900"
        ></div>
        <div class="menu-container--content relative">
          <div class="menu-container-content--titles h-100 z-50 w-full absolute">
            <div
              ref="menu_container_content_titles_grid"
              class="menu-container-content-titles--grid py-16 pointer-events-none"
            >
              <div class="overflow-y-hidden">
                <h1
                  class="menu-tiles uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
                >
                  <router-link class="custom-cursor-none" to="/">Home</router-link>
                </h1>
              </div>
              <div class="overflow-y-hidden">
                <h1
                  class="menu-tiles uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
                >
                  <router-link class="custom-cursor-none" to="/about">About</router-link>
                </h1>
              </div>
              <div class="overflow-y-hidden">
                <h1
                  class="menu-tiles uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
                >
                  <router-link class="custom-cursor-none" to="/work">Work</router-link>
                </h1>
              </div>
              <div class="overflow-y-hidden">
                <h1
                  class="menu-tiles uppercase smli-font mx-auto text-white opacity-30 menu-animation animate-link"
                >
                  <router-link class="custom-cursor-none" to="/partners">Partners</router-link>
                </h1>
              </div>
              <div class="overflow-y-hidden">
                <button
                  @click="openFooter"
                  class="menu-tiles uppercase smli-font mx-auto text-white opacity-30 focus:outline-none menu-animation animate-link custom-cursor-none openFooter"
                >Contact</button>
              </div>
            </div>
          </div>
          <div class="menu-container-content--rotating-pictures absolute hidden">
            <img
              src="@/assets/img/taj_mahal_main_east_gate_entrance_2.jpg"
              alt
              class="absolute image animation-rotation object-cover opacity-0"
            />
            <img
              src="@/assets/img/awadhshilpagram_1.png"
              alt
              class="absolute image animation-rotation object-cover opacity-0"
            />
            <img
              src="@/assets/img/kolkata_residence_1.png"
              alt
              class="absolute image animation-rotation object-cover opacity-0"
            />
            <img
              src="@/assets/img/lodha_group_7.png"
              alt
              class="absolute image animation-rotation object-cover opacity-0"
            />
            <img
              src="@/assets/img/rumi_gate_1.jpg"
              alt
              class="absolute image animation-rotation object-cover opacity-0"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Menu Ends -->
  </div>
</template>		

<script>
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

export default {
  name: "appheader",
  data() {
    return {
      is_menu_open: false,
      menu_background: "",
      menu_toggler: "",
      ild_email: "",
      dark_mode_toggle: "",
      menu: "",
      menu_container_content_titles_grid: ""
    };
  },
  mounted() {
    this.menu_background = this.$refs.menu_background;
    this.menu_toggler = this.$refs.menu_toggler;
    this.ild_email = this.$refs.ild_email;
    this.dark_mode_toggle = this.$refs.dark_mode_toggle;
    this.menu = this.$refs.menu;
    this.menu_container_content_titles_grid = this.$refs.menu_container_content_titles_grid;
  },
  methods: {
    openFooter() {
      var rotating_picture_container = document.querySelector(
        ".menu-container-content--rotating-pictures"
      );
      rotating_picture_container.classList.add("hidden");
      gsap.to(rotating_picture_container, 1 ,{opacity:0, ease: "power4.out"});

      var menu_tiles = document.querySelectorAll(".menu-tiles");
      var menu_close_timeline = new gsap.timeline();
      this.ild_email.classList.remove("hidden");
      this.dark_mode_toggle.classList.remove("hidden");
      menu_close_timeline
        .to(
          menu_tiles,
          0.5,
          {
            y: 100,
            stagger: 0.05,
            ease: "power4.in"
          },
          0
        )
        .to(
          this.menu_background,
          1,
          {
            height: "0%",
            ease: "expo.inOut",
            delay: 0.5
          },
          0
        )
        .to(
          this.menu_toggler,
          2,
          {
            y: -100,
            onComplete: () => {
              this.is_menu_open = false;
              this.menu.classList.add("hidden");
              gsap.set(this.menu_toggler, { y: 100 }, 0);
              this.menu_toggler.innerHTML = "Menu";
              this.menu_toggler.classList.add("text-gray-900");
              this.menu_toggler.classList.remove("text-white");
              this.menu_toggler.classList.remove("opacity-30");
            }
          },
          0
        )
        .to(this.menu_toggler, 2, { y: 0, ease: "power4.out" }, 0)
        .to(window, {
          duration: 1.5,
          scrollTo: { y: ".ild-footer-container", offsetY: 0 },
          ease: "power2.in"
        });
    },
    headerMenu() {
      var menu_animation = document.querySelectorAll(".menu-animation");
      var menu_tiles = document.querySelectorAll(".menu-tiles");
      var rotating_picture_container = document.querySelector(
        ".menu-container-content--rotating-pictures"
      );

      gsap.to(rotating_picture_container, 0.8 ,{opacity:1, ease: "power4.out"});

      rotating_picture_container.classList.remove("hidden");
      var rotating_picture_container_images = rotating_picture_container.querySelectorAll(
        ".image"
      );
      if (this.is_menu_open) {
        this.menu_container_content_titles_grid.classList.add(
          "pointer-events-none"
        );
        var menu_close_timeline = new gsap.timeline();
        this.ild_email.classList.remove("hidden");
        this.dark_mode_toggle.classList.remove("hidden");
        menu_close_timeline
          .to(
            menu_tiles,
            0.5,
            {
              y: 100,
              stagger: 0.05,
              ease: "power4.in"
            },
            0
          )
          .to(
            this.menu_background,
            1,
            {
              height: "0%",
              ease: "expo.inOut",
              delay: 0.5
            },
            0
          )
          .to(
            this.menu_toggler,
            2,
            {
              y: -100,
              onComplete: () => {
                this.is_menu_open = false;
                this.menu.classList.add("hidden");
                gsap.set(this.menu_toggler, { y: 100 }, 0);
                this.menu_toggler.innerHTML = "Menu";
                this.menu_toggler.classList.add("text-gray-900");
                this.menu_toggler.classList.remove("text-white");
                this.menu_toggler.classList.remove("opacity-30");
              }
            },
            0
          )
          .to(this.menu_toggler, 2, { y: 0, ease: "power4.out" }, 2);
      } else {
        this.menu_container_content_titles_grid.classList.remove(
          "pointer-events-none"
        );
        this.is_menu_open = true;
        var menu_open_timeline = new gsap.timeline();
        this.menu.classList.remove("hidden");

        menu_open_timeline
          .to(this.menu_background, 2, {
            height: "100%",
            ease: "expo.inOut"
          })
          .set(menu_tiles, { y: 100 }, 0)
          .to(
            menu_tiles,
            2,
            { y: 0, stagger: 0.1, delay: 1, ease: "power4.out" },
            0
          )
          .to(
            this.menu_toggler,
            2,
            {
              y: -100,
              onComplete: () => {
                this.menu_toggler.innerHTML = "Close";
                this.ild_email.classList.add("hidden");
                this.dark_mode_toggle.classList.add("hidden");
                gsap.set(this.menu_toggler, { y: 100 }, 0);
                this.menu_toggler.classList.remove("text-gray-900");
                this.menu_toggler.classList.add("text-white");
                this.menu_toggler.classList.add("opacity-30");
              }
            },
            0
          )
          .to(this.menu_toggler, 2, { y: 0, ease: "power4.out" }, 2);
      }
      menu_animation.forEach((e, f) => {
        e.addEventListener("mouseenter", () => {
          gsap.to(rotating_picture_container_images[f], 0.7, {
            rotation: 0,
            scale: 2,
            opacity: 1
          });
          gsap.to(menu_animation[f], 1, { opacity: 1 });
        });
        e.addEventListener("mouseleave", () => {
          gsap.to(rotating_picture_container_images[f], 0.7, {
            rotation: 30,
            scale: 1,
            opacity: 0,
            onComplete: () => {
              gsap.set(rotating_picture_container_images[f], { rotation: -30 });
            }
          });
          gsap.to(menu_animation[f], 1, { opacity: 0.3 });
        });
      });
    }
  }
};
</script>