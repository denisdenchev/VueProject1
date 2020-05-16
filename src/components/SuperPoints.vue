<template>
  <div class="bg-gray-100 pb-8 md:py-20">
    <div class="w-4/5 md:container mx-auto flex flex-col md:flex-row ">
      <div
        v-for="(point, index) in points"
        :key="index"
        class="w-full md:w-1/3 mt-8 md:mt-0 md:px-4"
      >
        <h3 class="font-bold tracking-wide">
          {{ point.title }}
        </h3>

        <p class="mt-4 leading-loose text-gray-500">
          {{ point.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			points: [
				{
					title: "Super awesome point one",
					description:
						"Super awesome detailed point about super awesome point1",
				},
				{
					title: "Super awesome point two",
					description:
						"Super awesome detailed point about super awesome point2",
				},
				{
					title: "Super awesome point three",
					description:
						"Super awesome detailed point about super awesome point3",
				},
			],
		};
	},
	name: "SuperPoints",
	components: {},
};
</script>
