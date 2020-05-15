<template>
	<div>
		<div
			id="writeAndHighlight"
			class="flex flex-col md:flex-row justify-between "
		>
			<div
				id="leftBox"
				class="w-9/12 md:w-4/12 text-center mx-auto h-64 border-solid border-black border-2 my-3 pt-32 bg-gray-300"
			>
				image here
			</div>
			<div
				id="rightBox"
				class="w-9/12 md:w-4/12 text-center mx-auto h-64 border-solid border-black border-2 my-3"
			>
				<h2 class="text-xl font-bold mt-1 ">
					Simply write, we'll
				</h2>
				<h2
					class="bg-red-600 border rounded-lg  text-white p-1 w-24 mx-auto mb-2 text-xl font-bold  "
				>
					highlight
				</h2>
				<p class="w-9/12  mx-auto font-semibold">
					It's simple to use our software, simply add your list of desired
					keywords then as you type, we'll let you know what you've added v.s.
					what you've missed.
				</p>
			</div>
		</div>
		<div class="flex flex-col md:flex-row justify-between ">
			<div
				id="lefttBox"
				class="w-9/12 md:w-4/12 text-center mx-auto h-64 border-solid border-black border-2 my-3 pt-8"
			>
				<p class="w-9/12  mx-auto font-normal">
					"Using <span class="font-bold tracking-wide">Keyword Caddy</span> has
					changed the way we work and we can quickly see what we need to do in
					order to improve our articles!"
				</p>
				<p class="text-xs  w-9/12 mx-auto my-2">
					<span class="font-bold ">Josh Parker</span> Travel Blogger for
					Expedia.com
				</p>
			</div>

			<div
				id="rightBox"
				class="w-9/12 md:w-4/12 text-center mx-auto h-64 border-solid border-black border-2 my-3 pt-32 bg-gray-300"
			>
				image here
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "WriteAndHighlight",
};
</script>
