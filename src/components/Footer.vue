<template>
  <div id="footer" class="bg-black bg-opacity-75 py-2 lg:w-full">
    <div class="flex flex-col md:flex-row md:justify-evenly items-center text-center">
      <div class="text-white my-3 md:flex md:flex-col">
        <slot name="one"></slot>
      </div>
      <div class="text-white my-3">
        <slot name="two"></slot>
      </div>
      <div class="text-white my-3">
        <slot name="three"></slot>
      </div>
      <div class="text-white my-3">
        <slot name="four"></slot>
      </div>
    </div>
    <div class="text-white my-5 flex flex-col text-center md:flex-row md:justify-around">
      <slot name="five"></slot>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);
export default {
  name: "Footer"
};
</script>