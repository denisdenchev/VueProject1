<template>
	<div>
		<div class="flex flex-col justify-between  items-center text-center mt-16">
			<h1 class="my-6 font-bold text-2xl">Simplify use your SEO writing</h1>
			<p class="my-4  w-2/5  ">
				Our plans are designed to help you focus on what matters most<span
					class="font-bold"
				>
					the content.</span
				>
			</p>
			<p class="mb-12 w-2/5">
				<span class="font-bold ">FREE</span> 5 day trial. No credit card
				required. Money back guarantee.
			</p>
		</div>
		<div class="bg-gray-200 md:py-24 py-6">
			<div
				id="monthly"
				class="flex flex-row justify-evenly  w-4/5 md:w-1/6 mx-auto pt-4"
			>
				<p :class="{ yearly: toggle }">Monthly</p>
				<toggle-button
					@change="toggle = !toggle"
					:value="true"
					:color="{ checked: '#e53e3e', unchecked: '#e53e3e' }"
				/>
				<p id="yearly" :class="{ yearly: !toggle }">
					Yearly
				</p>
			</div>

			<div
				id="tabs"
				class="flex flex-col md:flex-row items-center justify-between md:w-2/3 md:mx-auto"
			>
				<div class="my-10 text-center">
					<div class="bg-white  py-2">
						<p>Essential</p>
						<p>from $3.74/month</p>
					</div>
					<div class="text-center pt-4 bg-gray-300 px-2">
						<p>Up to 15 projects</p>
						<p>1-45 keywords per project</p>
						<p>basic email support</p>
						<router-link to="register">
							<ButtonSecondary class="mt-32 mb-5 px-12 py-3"
								>Try for free</ButtonSecondary
							></router-link
						>
					</div>
				</div>
				<div class="my-10">
					<div class="bg-white  py-2 text-center">
						<p>Pro</p>
						<p>from $5.99/month</p>
					</div>
					<div class="text-center pt-4 bg-gray-300 px-2">
						<p>Up to 45 projects</p>
						<p>1-99 keywords per project</p>
						<p>priority support</p>
						<router-link to="register">
							<ButtonSecondary class="mt-32 px-12 py-3 mb-5"
								>Try for free</ButtonSecondary
							></router-link
						>
					</div>
				</div>
				<div class="my-10">
					<div class="bg-white  py-2 text-center">
						<p>Pro++</p>
						<p>from $9.74/month</p>
					</div>
					<div class="text-center bg-gray-300 pt-4 px-2">
						<p>Up to 90 projects</p>
						<p>1-149 keywords per project</p>
						<p>Support within 1 working day</p>
						<router-link to="register">
							<ButtonSecondary class="mt-32 px-12 py-3 mb-5"
								>Try for free</ButtonSecondary
							></router-link
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { ToggleButton } from "vue-js-toggle-button";
import ButtonSecondary from "../components/ButtonSecondary";

export default {
	// methods: {
	// 	onChangeEventHandler() {
	// 		if ((this.toggle - button.value = "true")) {
	// 			alert("hello");
	// 		}
	// 	},
	// },
	name: "PricingPage",
	components: { ButtonSecondary, ToggleButton },
	data() {
		return {
			toggle: false,
		};
	},
};
</script>
<style>
.yearly {
	font-weight: 700;
}
</style>
