<template>
  <div class="ild-footer">
    <div class="ild-footer-container">
      <div class="ild-footer-contents">
        <div class="footer-content-without-map relative">
          <div class="footer-background-color bg-black absolute w-full h-full"></div>
          <div class="background-grid-footer h-screen w-screen absolute top-0 left-0">
            <img
              src="../assets/img/grid-light.png"
              alt
              class="background-grid-footer-image h-full w-full"
              srcset
            />
          </div>
          <div class="custom-padding-top-150 custom-padding-bottom-150 c-padding-t-100 relative">
            <div class="footer-content">
              <p
                class="mx-auto text-center smli-font uppercase letter-spacing-4 text-xl text-white custom-xs-heading-font-18 custom-text-left"
              >Get In touch with us</p>
              <div class="footer-content-grid-col-2 custom-padding-top-100 c-padding-t-60">
                <div class="form-container">
                  <div class="name footer-input-fields">
                    <input
                      type="text"
                      class="input--name custom-cursor-none animate-link w-full border-none text-3xl text-white appearance-none bg-transparent focus:outline-none custom-xs-p-font-20"
                      placeholder="What’s your name?"
                    />
                  </div>
                  <div class="name footer-input-fields">
                    <input
                      type="email"
                      class="input--email custom-cursor-none animate-link w-full border-none text-3xl text-white appearance-none bg-transparent focus:outline-none custom-xs-p-font-20"
                      placeholder="What’s your e-mail ID?"
                    />
                  </div>
                  <div class="name footer-input-fields">
                    <input
                      type="text"
                      class="input--query custom-cursor-none animate-link w-full border-none text-3xl text-white appearance-none bg-transparent focus:outline-none custom-xs-p-font-20"
                      placeholder="What do you want to talk about?"
                    />
                  </div>
                  <div class="custom-padding-top-100 c-padding-t-60">
                    <keep-alive>
                      <AppButton v-bind:buttondata="buttondata"></AppButton>
                    </keep-alive>
                  </div>
                </div>
                <div class="location-container">
                  <p
                    class="smli-font uppercase letter-spacing-4 text-sm text-white opacity-60"
                  >Our office</p>
                  <p
                    class="address text-white pt-8 text-xl"
                  >D-14/9, Ist Floor, Okhla Industrial Area,Phase - I, New Delhi - 110020</p>
                  <p
                    class="smli-font uppercase letter-spacing-4 text-sm text-white opacity-60 pt-12"
                  >Reach us by phone</p>
                  <div class="phone-number-container pt-8">
                    <div class="phone-numbers flex flex-row self-center">
                      <img src="../assets/phone_icon.svg" alt srcset />
                      <a href="tel:+91987653210" class="pl-8 text-white text-xl">+91-987653210</a>
                    </div>
                    <div class="phone-numbers flex flex-row self-center">
                      <img src="../assets/phone_icon.svg" alt srcset />
                      <a href="tel:+91987653210" class="pl-8 text-white text-xl">+91-987653210</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-content-with-map">
          <div class="ild-location-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.5886657144474!2d77.2785424150801!3d28.522020882461465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce14e9e2a3353%3A0x2dfccde65f15501!2sInnovative%20Lighting%20Designs%20Ltd.!5e0!3m2!1sen!2sin!4v1591607193872!5m2!1sen!2sin"
              width="600"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import appbutton from "../components/appbutton.vue";

export default {
  name: "AppFooter",
  components: {
    AppButton: appbutton
  },
  data() {
    return {
      buttondata: {
        fronttext: "submit",
        hovertext: "Go ahead !",
        buttoncolorclass: "bg-gray-200",
        buttonbackbganimationclass: "bg-black",
        buttontextcolorclass: "text-black",
        buttontexthovercolorclass: "text-white",
        buttenUrl: "#"
      }
    };
  }
};
</script>

<style>
</style>