<template>
	<div id="button">
		<button
			class="rounded-full bg-red-700 text-white w-32 h-8 text-center flex flex-row justify-center"
		>
			<slot>Click me</slot>
			<div class="icons pl-3 ">
				<font-awesome-icon :icon="['fas', 'chevron-right']" />
				<font-awesome-icon :icon="['fas', 'chevron-right']" />
			</div>
		</button>
	</div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);
export default {
	name: "Button",
};
</script>
