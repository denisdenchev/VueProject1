<template>
  <div id="app" class="bg-white w-full pt-4">
    <header>
      <NavBar />
    </header>

    <HomePage />
    <Footer>
      <template v-slot:one>
        <p class="font-bold my-2">Keyword Caddy</p>
        <p>37 Keyword Plaza</p>
        <p>New York</p>
        <p>1292838</p>
        <p>United States</p>
      </template>
      <template v-slot:two>
        <p>Terms and Conditions</p>
        <p>Privacy</p>
      </template>
      <template v-slot:three>
        <p>Pricing</p>
        <p>Support</p>
        <p>Contact Us</p>
        <p>Login</p>
      </template>
      <template v-slot:four>
        <div class="flex flex-row items-center">
          <img src="./assets/icons8-usa-32.png" class="mx-2" />
          <p>English (United States)</p>
        </div>
        <div class="flex flex-row items-center">
          <img src="./assets/icons8-spain-flag-32.png" class="mx-2" />
          <p>Spanish</p>
        </div>
      </template>
      <template v-slot:five>
        <BaseLogo class="my-2" />
        <div>
          <p>&copy; Copyright Keyword Caddy 2020.</p>
          <!-- <h3 id="date">{{ dateBuilder() }}</h3> -->
          <p>All rights Reserved</p>
        </div>
      </template>
    </Footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import BaseLogo from "./components/BaseLogo";

export default {
  name: "App",
  components: { NavBar, HomePage, Footer, BaseLogo }
  // dateBuilder() {
  //   let d = new Date();

  //   let year = d.getFullYear();

  //   return ` ${year}`;
  // }
};
</script>
