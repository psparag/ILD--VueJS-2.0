import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);
import ScrollMagic from "scrollmagic"; // Or use scrollmagic-with-ssr to avoid server rendering problems
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "../../../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

// import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"
// import "../node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators"

export const testmixins = {
    mounted: function () {
        // function repeatOften() {
        //   console.log("repeatOften frame");
        //   requestAnimationFrame(repeatOften);
        // }
        // requestAnimationFrame(repeatOften);

        //get scrollbar width
        document.documentElement.style.setProperty("--scrollbar-width", window.innerWidth - document.documentElement.clientWidth + "px");
        var agile_nav_button = document.querySelectorAll(".agile__nav-button");
        agile_nav_button.forEach((e) => {
            e.classList.add("animate-link");
        });
        // gallery code starts
        var current_mouse_pos_x = 0;
        var current_mouse_pos_y = 0;
        var max_distance = 50;
        var offset_distance = window.innerWidth / 2;
        var normal_mouse_pos_x = current_mouse_pos_x - offset_distance;

        var project_titles = document.querySelectorAll(".movable-gallery-project-title");

        var movable_gallery_item = document.querySelectorAll(".movable-gallery-item");
        var movable_gallery_item_image = document.querySelectorAll(".movable-gallery-image");
        var static_gallery_item_image = document.querySelectorAll(".static-gallery-image");
        var is_click_area_active = false;
        var cursor = document.querySelector(".cursor");
        var animate_link = document.querySelectorAll(".animate-link");
        var feature_items_on_hover_animation = document.querySelectorAll(".feature-items-on-hover-animation");
        var project_section = document.querySelectorAll(".projects-section");
        var number_of_clicks = Array(project_section.length).fill(0);
        var current_cursor_value;
        var animation_flag = true;
        var is_gallery_container_active = false;
        var is_gallery_button_active = false;
        var feature_partner_section_arrows = document.querySelectorAll(".feature-partner-section--arrow");
        var gallery_move_offset = (window.innerWidth * 8) / 100;
        var animate_gallery;

        function isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }

        if (!isMobile()) {
            document.addEventListener("mousemove", (e) => {
                current_mouse_pos_x = e.clientX;
                current_mouse_pos_y = e.clientY;
            });

            window.addEventListener("resize", () => {
                gsap.to(cursor, {
                    duration: 1,
                    x: current_mouse_pos_x - cursor.getBoundingClientRect().width / 2,
                    y: current_mouse_pos_y - cursor.getBoundingClientRect().height / 2,
                    ease: "power4.out",
                });
            });

            var convert_range = (current_position) => {
                return ((current_position - -offset_distance) / (offset_distance - -offset_distance)) * (max_distance - -max_distance) + -max_distance;
            };

            var render = function render() {
                normal_mouse_pos_x = current_mouse_pos_x - offset_distance;

                if (project_section.length) {
                    project_section.forEach((e) => {
                        e.addEventListener("mouseenter", () => {
                            project_titles = e.querySelectorAll(".movable-gallery-project-title");
                        });
                    });
                }
                gsap.to(project_titles, 2, {
                    x: convert_range(normal_mouse_pos_x),
                    ease: "power4.out",
                });

                gsap.to(cursor, {
                    duration: 1,
                    x: current_mouse_pos_x - cursor.getBoundingClientRect().width / 2,
                    y: current_mouse_pos_y - cursor.getBoundingClientRect().height / 2,
                    ease: "power4.out",
                });

                if (!is_click_area_active) {
                    cursor_change(direction());
                }

                requestAnimationFrame(render);
            };

            var cursor_change = (value) => {
                if (value === "right") {
                    cursor.childNodes[1].src = require("../arrow_right.svg");
                } else if (value === "left") {
                    cursor.childNodes[1].src = require("../arrow_left.svg");
                } else if (value === "click") {
                    cursor.childNodes[1].src = require("../arrow_plus.svg");
                } else if (value === "body") {
                    cursor.childNodes[1].src = require("../default_cursor.svg");
                }

                current_cursor_value = value;
            };

            var direction = () => {
                if (is_gallery_container_active) {
                    if (current_mouse_pos_x <= offset_distance) {
                        return "left";
                    } else {
                        return "right";
                    }
                } else {
                    return "body";
                }
            };

            if (project_section.length) {
                project_section.forEach((e, f) => {
                    var gallery_container = e.querySelector(".gallery-container");
                    gallery_container.addEventListener("mouseenter", () => {
                        is_gallery_container_active = true;
                        is_gallery_button_active = true;
                        cursor_change(direction());
                        animate_gallery(gallery_container, f);
                    });
                    gallery_container.addEventListener("mouseleave", () => {
                        is_gallery_container_active = false;
                        is_gallery_button_active = false;
                    });
                });
            }

            feature_items_on_hover_animation.forEach((e, f) => {
                e.addEventListener("mouseenter", () => {
                    cursor_change("click");
                    is_click_area_active = true;
                    gsap.to(e, 1, { scale: 1.05, ease: "power4.out" });
                    gsap.to(feature_partner_section_arrows[f], 1, {
                        css: { x: 20 },
                        ease: "power4.out",
                    });
                });
                e.addEventListener("mouseleave", () => {
                    cursor_change("body");
                    is_click_area_active = false;
                    gsap.to(e, 1, { scale: 1, ease: "power4.out" });
                    gsap.to(feature_partner_section_arrows[f], 1, {
                        css: { x: 0 },
                        ease: "power4.out",
                    });
                });
            });
            static_gallery_item_image.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    cursor_change("click");
                    is_click_area_active = true;
                    gsap.to(e, 1, { scale: 1.05, ease: "power4.out" });
                    gsap.to(e.childNodes[0], 1, { scale: 1.25, ease: "power4.out" });
                });
                e.addEventListener("mouseleave", () => {
                    cursor_change(direction());
                    is_click_area_active = false;
                    gsap.to(e, 1, { scale: 1, ease: "power4.out" });
                    gsap.to(e.childNodes[0], 1, { scale: 1, ease: "power4.out" });
                });
            });
            movable_gallery_item_image.forEach((e) => {
                e.addEventListener("mouseenter", () => {
                    cursor_change("click");
                    is_click_area_active = true;
                    gsap.to(e, 1, { scale: 1.05, ease: "power4.out" });
                    gsap.to(e.childNodes[0], 1, { scale: 1.25, ease: "power4.out" });
                });
                e.addEventListener("mouseleave", () => {
                    cursor_change(direction());
                    is_click_area_active = false;
                    gsap.to(e, 1, { scale: 1, ease: "power4.out" });
                    gsap.to(e.childNodes[0], 1, { scale: 1, ease: "power4.out" });
                });
            });

            animate_link.forEach((e) => {
                e.addEventListener("mouseover", () => {
                    gsap.to(cursor.childNodes[1], 0.4, { scale: 0.3 }, 0);
                });
                e.addEventListener("mouseleave", () => {
                    gsap.to(cursor.childNodes[1], 0.4, { scale: 1 }, 0);
                });
            });

            animate_gallery = (target, index) => {
                target.addEventListener("click", () => {
                    movable_gallery_item = target.querySelectorAll(".movable-gallery-item");
                    movable_gallery_item_image = target.querySelectorAll(".movable-gallery-image");
                    if (current_cursor_value === "right" && number_of_clicks[index] < movable_gallery_item.length - 2 && animation_flag === true) {
                        animation_flag = false;
                        var gallery_item_move_timeline = new gsap.timeline();

                        gallery_item_move_timeline
                            .to(movable_gallery_item, 2, {
                                x: "-=" + (movable_gallery_item[0].getBoundingClientRect().width + gallery_move_offset),
                                ease: "power4.inOut",
                            })
                            .to(movable_gallery_item_image, 1, { scaleX: 1.2, ease: "power4.in" }, 0)
                            .to(
                                movable_gallery_item_image,
                                1,
                                {
                                    scaleX: 1,
                                    ease: "power4.out",
                                    onComplete: () => {
                                        animation_flag = true;
                                    },
                                },
                                1
                            )
                            .timeScale(1.2);
                        number_of_clicks[index]++;
                    } else if (current_cursor_value === "left" && number_of_clicks[index] > 0 && animation_flag === true) {
                        animation_flag = false;
                        gallery_item_move_timeline = new gsap.timeline();
                        gallery_item_move_timeline
                            .to(movable_gallery_item, 2, {
                                x: "+=" + (movable_gallery_item[0].getBoundingClientRect().width + gallery_move_offset),
                                ease: "power4.inOut",
                            })
                            .to(movable_gallery_item_image, 1, { scaleX: 1.1, ease: "power4.in" }, 0)
                            .to(
                                movable_gallery_item_image,
                                1,
                                {
                                    scaleX: 1,
                                    ease: "power4.out",
                                    onComplete: () => {
                                        animation_flag = true;
                                    },
                                },
                                1
                            )
                            .timeScale(1.2);
                        number_of_clicks[index]--;
                    }
                });
            };

            requestAnimationFrame(render);
        }


        /** button code */

        var temp_button = document.querySelectorAll(".temp-button");
        var button_animation_timeline;
        var button_first_text = document.querySelectorAll(".temp-button .button-first-text");
        var button_second_text = document.querySelectorAll(".temp-button .button-second-text");
        var first_para, second_para;
        var button_animation_duration = 0.75;

        button_first_text.forEach((e) => {
            first_para = e.innerHTML.split("");
            e.innerHTML = "";
            first_para.forEach((f) => {
                e.innerHTML = e.innerHTML + "<span>" + f + "</span>";
            });
        });
        button_second_text.forEach((e) => {
            second_para = e.innerHTML.split("");
            e.innerHTML = "";
            second_para.forEach((f) => {
                e.innerHTML = e.innerHTML + "<span>" + f + "</span>";
            });
        });

        function button_animation_play(target) {
            button_animation_timeline = new gsap.timeline({
                paused: true,
                defaults: { ease: "power2.inOut" },
            });
            button_animation_timeline.timeScale(1.2);
            button_animation_timeline
                .to(
                    target.querySelector(".button-background"),
                    button_animation_duration,
                    {
                        height: "100px",
                    },
                    button_animation_duration / 3
                )
                .to(
                    target.querySelectorAll(".button-first-text span"),
                    button_animation_duration,
                    {
                        y: "-1rem",
                        stagger: 0.01,
                    },
                    0
                )
                .to(
                    target.querySelectorAll(".button-second-text span"),
                    button_animation_duration,
                    {
                        y: "0rem",
                        stagger: 0.01,
                    },
                    button_animation_duration / 3
                );
            button_animation_timeline.play();
        }

        function button_animation_reverse() {
            button_animation_timeline.reverse();
        }

        temp_button.forEach((e) => {
            e.addEventListener("mouseenter", () => {
                button_animation_play(e);
                if (is_gallery_button_active) {
                    cursor_change("body");
                    is_gallery_container_active = false;
                }
            });

            e.addEventListener("mouseleave", () => {
                button_animation_reverse();
                if (is_gallery_button_active) {
                    cursor_change(direction());
                    is_gallery_container_active = true;
                }
            });
        });
        var scrollTofooter = document.querySelector(".scrollTofooter");
        if (scrollTofooter) {
            scrollTofooter.addEventListener("click", function () {
                gsap.to(window, {
                    duration: 1.5,
                    scrollTo: { y: ".ild-footer-container", offsetY: 0 },
                    ease: "power2.in"
                });
            })
        }


        //Make a ScrollMagic scene for image galley with text
        var controller = new ScrollMagic.Controller();
        var stats = document.querySelectorAll(".about-us-stats-section");

        stats.forEach(function (e) {
            //References to DOM elements
            var scrollsection = e.querySelector(".about-us-stats-section-container--grid");

            var tween1 = new gsap.timeline({ immediateRender: false });

            tween1
                .to(scrollsection, { duration: 6, x: "-20%" })
                .to(scrollsection, { duration: 6, x: "-40%" })
                .to(scrollsection, { duration: 6, x: "-60%" })
                .to(scrollsection, { duration: 6, x: "-80%" })
                .to(scrollsection, { duration: 6, x: "-100%" });

            //Make a ScrollMagic scene
            new ScrollMagic.Scene({
                triggerElement: e,
                triggerHook: 0.15,
                duration: "400%",
            })
                .setTween(tween1)
                .setPin(e)
                .addTo(controller);
        });

        //Make a ScrollMagic scene for image gallery
        var galleryController = new ScrollMagic.Controller();
        var imageGalleryScroll = document.querySelectorAll(".image-gallery-scroll--animation");

        imageGalleryScroll.forEach(function (element) {
            //References to DOM elements
            var imageOverlay = element.querySelectorAll(".gallery-overlay");
            var backgroundImage = element.querySelectorAll(".gallery-image");

            var animateGalleryImage = new gsap.timeline({ immediateRender: false });

            animateGalleryImage.to(imageOverlay, { duration: 1.5, height: "0%", ease: "power2.inOut", stagger: 0.2 }).fromTo(backgroundImage, { duration: 1.5, scale: "1.2" }, { scale: "1", ease: "power2.inOut", stagger: 0.2 }, "-=1.4");

            //Make a ScrollMagic scene
            new ScrollMagic.Scene({
                triggerElement: element,
                triggerHook: 0.5,
            })
                .setTween(animateGalleryImage)
                .addTo(galleryController);
        });

        //ScrollMagic scene for hero heading

        var heroHeadingtl = new gsap.timeline({ paused: true, delay: 1 });

        heroHeadingtl.fromTo(
            ".hero-section .hero-heding-text--animation p",
            { y: "100%" },
            {
                y: "0%",
                duration: 0.8,
                stagger: 0.1,
                ease: "circ.out",
            }
        );

        heroHeadingtl.play();
    },
};
