<template>
	<div id="jumboTron" class="pt-64 w-full mx-auto">
		<div class="textArea flex flex-col justify-between items-center ">
			<p class="font-semibold text-xl tracking-wider text-center">
				Dont leave your keywords behind
			</p>
			<p class="w-2/5  text-center my-4  ">
				Keyword Caddy is your one stop website to ensure your content contains
				all the keywords you need.
			</p>
			<Button>Get Started</Button>
		</div>
		<div class="flex flex-col sm:flex-col"></div>
		<SuperPoints />
		<WriteAndHighlight />
	</div>
</template>

<script>
import SuperPoints from "./SuperPoints";
import Button from "./Button";
import WriteAndHighlight from "./WriteAndHighlight";
export default {
	name: "Jumbotron",
	components: { Button, SuperPoints, WriteAndHighlight },
};
</script>

<style></style>
