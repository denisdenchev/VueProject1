<template>
  <div id="footer" class="bg-black bg-opacity-75 py-2 lg:w-full">
    <div class="flex flex-col md:flex-row md:justify-evenly items-center text-center">
      <div class="text-white my-3 md:flex md:flex-col">
        <p class="font-bold my-2">Keyword Caddy</p>
        <p>37 Keyword Plaza</p>
        <p>New York</p>
        <p>1292838</p>
        <p>United States</p>
      </div>
      <div class="text-white my-3">
        <p>Terms and Conditions</p>
        <p>Privacy</p>
      </div>
      <div class="text-white my-3">
        <p>Pricing</p>
        <p>Support</p>
        <p>Contact Us</p>
        <p>Login</p>
      </div>
      <div class="text-white my-3">
        <div class="flex flex-row items-center">
          <img src="../assets/icons8-usa-32.png" class="mx-2" />
          <p>English (United States)</p>
        </div>
        <div class="flex flex-row items-center">
          <img src="../assets/icons8-spain-flag-32.png" class="mx-2" />
          <p>Spanish</p>
        </div>
      </div>
    </div>
    <div class="text-white my-5 flex flex-col text-center md:flex-row md:justify-around">
      <BaseLogo class="my-2" />
      <div>
        <p>&copy; Copyright Keyword Caddy 2020.</p>
        <!-- <h3 id="date">{{ dateBuilder() }}</h3> -->
        <p>All rights Reserved</p>
      </div>
    </div>
  </div>
</template>

<script>
// dateBuilder() {
//   let d = new Date();
//   let year = d.getFullYear();
//   return ` ${year}`;
// }

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BaseLogo from "./BaseLogo";

library.add(faChevronRight);
export default {
  components: { BaseLogo },
  name: "Footer"
};
</script>