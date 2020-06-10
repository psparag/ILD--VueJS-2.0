<template>
  <!-- Sidebar Section starts -->
  <div class="sidebar-fixed-section pt-16 fixed right-0 h-full z-50 pointer-events-none">
    <div class="overflow-y-hidden sidebar-fixed-section-grid--div">
      <p
        @click="headerMenu()"
        class="text-xs sidebar-fixed-section-grid--menu uppercase text-right text-gray-900 pointer-events-auto animate-link"
      >Menu</p>
    </div>
    <p
      class="sidebar-fixed-section-grid--email uppercase text-xs text-gray-900 pointer-events-auto animate-link custom-xs-hidden"
    >contact@ILDLIMITED.COM</p>
    <div
      class="sidebar-fixed-section-grid--dark-mode uppercase text-xs animate-link flex flex-row custom-xs-hidden"
    >
      <div class="bg-black h-3 w-3 rounded-full"></div>
      <p
        class="sidebar-fixed-section-grid-dark-mode--text ml-6 text-gray-900 pointer-events-auto"
      >Try the dark mode</p>
    </div>
  </div>
  <!-- Sidebar Section ends -->
</template>		


<script>
import { gsap } from "gsap";

export default {
  name: "appheader",
  data() {
    return {
      is_menu_open: false
    };
  },
  methods: {
    headerMenu() {
      var menu_animation = document.querySelectorAll(".menu-animation");
      var rotating_picture_container = document.querySelector(
        ".menu-container-content--rotating-pictures"
      );
      var rotating_picture_container_images = rotating_picture_container.querySelectorAll(
        ".image"
      );
      var menu_background = document.querySelector(".menu-background");
      var menu_toggler = document.querySelector(
        ".sidebar-fixed-section-grid--menu"
      );
      var ild_email = document.querySelector(
        ".sidebar-fixed-section-grid--email"
      );
      var dark_mode_toggle = document.querySelector(
        ".sidebar-fixed-section-grid--dark-mode"
      );
      var menu_container_content_titles_grid = document.querySelector(
        ".menu-container-content-titles--grid"
      );
      var menu = document.querySelector(".menu");

      if (this.is_menu_open) {
        menu_container_content_titles_grid.classList.add("pointer-events-none");
        var menu_close_timeline = new gsap.timeline();
        ild_email.classList.remove("hidden");
        dark_mode_toggle.classList.remove("hidden");
        menu_close_timeline
          .to(
            menu_animation,
            0.5,
            {
              y: 100,
              stagger: 0.05,
              ease: "power4.in"
            },
            0
          )
          .to(
            menu_background,
            1,
            {
              height: "0%",
              ease: "expo.inOut",
              delay: 0.5
            },
            0
          )
          .to(
            menu_toggler,
            2,
            {
              y: -100,
              onComplete: () => {
                this.is_menu_open = false;
                menu.classList.add("hidden");
                gsap.set(menu_toggler, { y: 100 }, 0);
                menu_toggler.innerHTML = "Menu";
                menu_toggler.classList.add("text-gray-900");
                menu_toggler.classList.remove("text-white");
                menu_toggler.classList.remove("opacity-30");
              }
            },
            0
          )
          .to(menu_toggler, 2, { y: 0, ease: "power4.out" }, 2);
      } else {
        menu_container_content_titles_grid.classList.remove(
          "pointer-events-none"
        );
        this.is_menu_open = true;
        var menu_open_timeline = new gsap.timeline();
        menu.classList.remove("hidden");

        menu_open_timeline
          .to(menu_background, 2, {
            height: "100%",
            ease: "expo.inOut"
          })
          .set(menu_animation, { y: 100 }, 0)
          .to(
            menu_animation,
            2,
            { y: 0, stagger: 0.1, delay: 1, ease: "power4.out" },
            0
          )
          .to(
            menu_toggler,
            2,
            {
              y: -100,
              onComplete: () => {
                menu_toggler.innerHTML = "Close";
                ild_email.classList.add("hidden");
                dark_mode_toggle.classList.add("hidden");
                gsap.set(menu_toggler, { y: 100 }, 0);
                menu_toggler.classList.remove("text-gray-900");
                menu_toggler.classList.add("text-white");
                menu_toggler.classList.add("opacity-30");
              }
            },
            0
          )
          .to(menu_toggler, 2, { y: 0, ease: "power4.out" }, 2);
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
  },
  mounted() {
    //console.log("mounted");
    //this.hearedMenu();
  }
};
</script>