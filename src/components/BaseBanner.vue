<template>
  <div>
    <div class="flex flex-col md:flex-row items-center" :class="{'md:flex-row-reverse': reverse}">
      <div class="w-full md:w-1/2 flex justify-center px-12 md:px-4 md:flex-shrink-0">
        <img :src="img" alt="KeywordCaddy" class="border border-black" />
      </div>

      <div class="lg:w-1/2 px-12 md:px-4 text-center md:text-left">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String,
      required: true
    },

    reverse: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
