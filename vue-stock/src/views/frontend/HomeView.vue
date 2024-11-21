<template>
    
    <section class="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28"><!-- Start Hero -->
          <div class="grid items-center gap-10 lg:grid-cols-2">
              <div class="space-y-8 lg:space-y-12">
                  <div class="space-y-6">
                      <h1 class="text-4xl font-semibold sm:text-6xl">Landing page for <br>your online service</h1>
                      <p class="max-w-sm text-xl">Sed ea enim et expedita quo. Sint consequuntur nobis expedita mollitia voluptatem aut est a quia.</p>
                  </div>
                  <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0">
                      <input class="w-full px-6 py-4 border-2 rounded-lg outline-none sm:w-72 sm:border-r-0 sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg focus:border-emerald-600" type="text" placeholder="Your email address">
                      <button type="submit" class="px-6 py-4 font-semibold text-white transition-colors duration-300 rounded-lg bg-emerald-600 hover:bg-emerald-700 sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg">Get Started</button>
                  </div>
              </div>
              <div>
                  <img src="@/assets/img/hero-illustration.png" alt="Illustration">
              </div>
          </div>
      </section><!-- End Hero -->
      
      <section class="container px-4 mx-auto"><!-- Start Brands -->
          <div class="grid grid-cols-3 gap-8 lg:grid-cols-6">
              <div class="flex justify-center"><img src="@/assets/img/brands/varta.svg" alt="varta"></div>
              <div class="flex justify-center"><img src="@/assets/img/brands/lenovo.svg" alt="lenovo"></div>
              <div class="flex justify-center"><img src="@/assets/img/brands/bbs.svg" alt="bbs"></div>
              <div class="flex justify-center"><img src="@/assets/img/brands/weller.svg" alt="weller"></div>
              <div class="flex justify-center"><img src="@/assets/img/brands/british_airways.svg" alt="british airways"></div>
              <div class="flex justify-center"><img src="@/assets/img/brands/lufthansa.svg" alt="lufthansa"></div>
          </div>
      </section><!-- End Brands -->
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>