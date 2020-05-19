<template>
	<div id="loginPage">
		<div
			class=" flex flex-col items-center shadow-2xl rounded-lg  my-64  w-3/4 md:w-2/5  mx-auto border-t-4 border-red-600"
		>
			<BaseLogo class=" mx-auto my-8" />
			<input
				type="text"
				placeholder="Email address"
				class="shadow-md my-2 mx-3 w-11/12  rounded-md px-2 py-1 text-xl border border-black-100"
			/>
			<input
				type="text"
				placeholder="Password"
				class="shadow-md my-2 mx-3 w-11/12   rounded-md px-2 py-1 text-xl border border-solid border-black-100"
			/>
			<ButtonSecondary class="w-3/4  w-11/12 my-3">
				<router-link to="account">
					Login
				</router-link>
			</ButtonSecondary>

			<p>OR</p>
			<ButtonSecondary class="w-3/4  w-11/12 my-3">
				<router-link to="create-account">
					Signup
				</router-link>
			</ButtonSecondary>
			<p class="mb-3">Having troubles loggin in?</p>
		</div>
	</div>
</template>

<script>
import BaseLogo from "../components/BaseLogo";
import ButtonSecondary from "../components/ButtonSecondary";
export default {
	components: { BaseLogo, ButtonSecondary },
};
</script>
