<template>
	<div class="navBar flex flex-row  justify-around w-screen ">
		<div class="logo flex flex-row items-center p-0 mb-2 box-border">
			<BaseLogo />

			<div>
				<ul class="flex flex-row ml-12 text-gray-700">
					<li class="mx-4">
						<router-link to="pricing"> Pricing</router-link>
					</li>
					<li class="mx-4">
						<router-link to="contact"> Contact</router-link>
					</li>
				</ul>
			</div>
		</div>

		<div>
			<ul class="flex flex-row items-center mb-2">
				<li class="mx-16">
					<router-link to="login"> Login</router-link>
				</li>

				<li>
					<router-link to="getstarted"
						><ButtonPrimary>Get Started</ButtonPrimary>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import ButtonPrimary from "./ButtonPrimary";
import BaseLogo from "./BaseLogo";

export default {
	name: "Navbar",
	components: { BaseLogo, ButtonPrimary },
	// props: {
	// 	msg: String,
	// },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
