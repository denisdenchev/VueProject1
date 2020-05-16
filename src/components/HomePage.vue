<template>
  <div>
    <div>
      <JumboTron
        title="Don't leave your keywords behind"
        class="py-12 md:py-20 lg:py-48 xl:py-64 w-full mx-auto"
      >
        <p>
          Keyword Caddy is your one stop website to ensure your content contains
          all the keywords you need.
        </p>

        <ButtonPrimary class="mt-4 px-12 py-3">
          Get Started
        </ButtonPrimary>
      </JumboTron>
    </div>

    <SuperPoints />

    <div class="container mx-auto my-12 lg:my-24">
      <BaseBanner img="https://via.placeholder.com/500x350.png?text=Printscreen+of+application">
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
      </BaseBanner>
    </div>

    <div class="bg-gray-100 py-24">
      <div class="container mx-auto">
        <BaseBanner
          img="https://placeimg.com/500/350/nature"
          :reverse="true"
        >
          <p class="text-3xl">
            "Using <span class="font-bold tracking-wide">Keyword Caddy</span> has
            changed the way we work and we can quickly see what we need to do in
            order to improve our articles!"
          </p>

          <p class="mt-2 text-sm text-gray-700">
            <span class="font-bold">Josh Parker,</span>
            Travel Blogger for Expedia.com
          </p>
        </BaseBanner>
      </div>
    </div>
  </div>
</template>

<script>
  import BaseBanner from "./BaseBanner";
  import ButtonPrimary from "./ButtonPrimary";
  import JumboTron from "./JumboTron";
  import SuperPoints from "./SuperPoints";

export default {
  components: {
    BaseBanner,
    ButtonPrimary, 
    JumboTron,
    SuperPoints,
  },

  data() {
    return {
      //
    };
  },

  methods: {
    //
  }
};
</script>
