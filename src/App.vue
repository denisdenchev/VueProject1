<template>
	<div id="app" class="bg-white w-full pt-4">
		<header>
			<NavBar />
		</header>
		<router-view>
			<div id="homePage">
				<HomePage />
				<Footer></Footer>
			</div>
		</router-view>
	</div>
</template>

<script>
import NavBar from "./components/NavBar";
import HomePage from "./containers/HomePage";
import Footer from "./components/Footer";

export default {
	name: "App",
	components: { NavBar, HomePage, Footer },
};
</script>
