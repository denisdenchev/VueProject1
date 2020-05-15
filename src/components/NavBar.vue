<template>
	<div class="navBar flex flex-row  justify-around w-screen ">
		<div class="logo flex flex-row items-center p-0 mb-2 box-border">
			<p class="text-black font-bold tracking-widest mr-2 text-xl">
				KEYWORD
			</p>
			<span class="text-red-700 font-bold text-xl">CADDY</span>
			<div class="navLinks flex  flex-row ml-12 text-black">
				<p class="mr-6">Pricing</p>
				<p>Contact</p>
			</div>
		</div>
		<div class="loginGetStarted flex flex-row items-center text-black mb-2">
			<p class="mx-16">Login</p>
			<Button>Get Started</Button>
		</div>
	</div>
</template>

<script>
import Button from "./Button";
export default {
	name: "Navbar",
	components: { Button },
	// props: {
	// 	msg: String,
	// },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
