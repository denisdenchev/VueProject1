<template>
	<div id="app" class="bg-white sm:w-full pt-4">
		<NavBar></NavBar>
		<JumboTron></JumboTron>
	</div>
</template>

<script>
import NavBar from "./components/NavBar";
import JumboTron from "./components/JumboTron";
export default {
	name: "App",
	components: { NavBar, JumboTron },
};
</script>

<style></style>
