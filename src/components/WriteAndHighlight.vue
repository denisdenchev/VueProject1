<template>
  <div>
    <div class="flex flex-col md:flex-row justify-between items-center">
      <div class="w-full lg:w-1/2 flex justify-center px-12 md:px-4">
        <img
          src="https://via.placeholder.com/500x350.png?text=Printscreen+of+application"
          alt="KeywordCaddy"
          class="border border-black"
        >
      </div>

      <div class="lg:w-1/2 px-12 md:px-4 text-center md:text-left">
        <h2 class="text-3xl font-bold mt-8 md:mt-0">
          Simply write, we'll
          <span class="bg-red-600 border rounded-lg text-white p-1 w-24 mx-auto mb-2 text-xl font-bold  ">
            highlight
          </span>
        </h2>

        <p class="mt-4 text-gray-700 leading-loose">
          It's simple to use our software, simply add your list of desired
          keywords then as you type, we'll let you know what you've added v.s.
          what you've missed.
        </p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row justify-between ">
      <div class="mx-auto  pt-8">
        <p class=" mx-auto font-normal">
          "Using <span class="font-bold tracking-wide">Keyword Caddy</span> has
          changed the way we work and we can quickly see what we need to do in
          order to improve our articles!"
        </p>

        <p class="text-xs  mx-auto my-2">
          <span class="font-bold ">Josh Parker</span> Travel Blogger for
          Expedia.com
        </p>
      </div>

      <div class="mx-auto h-64 border-solid border-black border-2 my-3 pt-32 bg-gray-300">
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
