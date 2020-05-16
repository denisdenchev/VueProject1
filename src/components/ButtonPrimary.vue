<template>
  <button class="px-4 py-2 rounded-full bg-red-700 text-white text-center text-sm">
    <slot />

    <div class="inline pl-3">
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
      <font-awesome-icon :icon="['fas', 'chevron-right']" />
    </div>
  </button>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);
export default {
	name: "Button",
};
</script>
