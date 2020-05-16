<template>
  <div>
    <div class="flex flex-col w-4/5 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto justify-between items-center">
      <h1 class="font-bold text-3xl tracking-wider text-center">
        {{ title }}
      </h1>

      <div class="max-w-screen-sm md:px-12 lg: my-4 leading-loose text-gray-700 text-center">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "Jumbotron",
	
	props: {
		title: {
			type: String,
			required: true,
		}
	}
};
</script>
