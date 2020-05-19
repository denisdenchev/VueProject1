<template>
	<div id="createAccount">
		<div class="text-center my-24">
			<p class="font-semibold text-3xl">Create an account</p>
			<p class="text-gray-500 my-2 w-11/12 mx-auto">
				You are only few minutes away from getting onboard.
			</p>
		</div>
		<div
			class=" flex flex-col items-center shadow-2xl rounded-lg  py-5  w-3/4 md:w-1/2  mx-auto border-t-4 border-red-600 mb-64"
		>
			<div
				class=" rounded-lg bg-gray-100 w-11/12 flex flex-col text-center md:flex-row  justify-around py-2 my-4"
			>
				<div class="my-2">
					<p>Your selected plan</p>
					<p class="font-extrabold">Pro++</p>
				</div>
				<div class="my-2">
					<p class="font-bold">$9.74 per month</p>
					<p>$116.88 billed annually</p>
				</div>
			</div>
			<input
				type="text"
				placeholder="Email Address"
				class="my-4 mx-3 w-11/12   rounded-sm px-2 py-2 text-xl border border-solid border-black-100"
			/>

			<ButtonSecondary class="w-3/4  w-11/12 my-3 py-3">
				Next
			</ButtonSecondary>
		</div>
	</div>
</template>

<script>
import ButtonSecondary from "../components/ButtonSecondary";
export default {
	components: { ButtonSecondary },
};
</script>
