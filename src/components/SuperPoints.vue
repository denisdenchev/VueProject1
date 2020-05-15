<template>
	<div class="flex flex-col md:flex-row bg-gray-100 my-2 ">
		<div
			v-for="(point, index) in points"
			:key="index"
			class="w-full md:w-1/3 border-b border-black border-solid md:border-none  "
		>
			<h3 class="text-center font-bold tracking-wide mt-5">
				{{ point.title }}
			</h3>
			<p class=" font-normal text-center mb-6  ">
				{{ point.description }}
			</p>
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
