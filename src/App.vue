<template>
  <div
    id="app"
    class="bg-white w-full pt-4"
  >
    <header>
      <NavBar />
    </header>

    <HomePage />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import HomePage from './components/HomePage'

export default {
	name: "App",
	components: { NavBar, HomePage },
};
</script>
