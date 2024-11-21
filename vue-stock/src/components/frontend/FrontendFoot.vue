<template>
    <footer class="container px-4 py-6 mx-auto mt-6">
          <hr class="mb-6">
          <div class="flex flex-col justify-between mb-6 space-y-6 md:flex-row md:space-y-0">
              <div class="flex-1">
                 <router-link to="/"><img src="@/assets/img/logo.svg" alt="Logo"></router-link>
              </div>
              <div class="flex flex-1 space-x-6 font-medium md:justify-center">
                  
    
                    <router-link to="/features" class="transition-colors duration-200 hover:text-emerald-700">Features</router-link>
                    <router-link to="/services" class="transition-colors duration-200 hover:text-emerald-700">Service</router-link>
                    <router-link to="/testimonials" class="transition-colors duration-200 hover:text-emerald-700">Testimonials</router-link>
                    <router-link to="/contact" class="transition-colors duration-200 hover:text-emerald-700">Contact</router-link>
              </div>
              <div class="flex flex-1 space-x-4 md:justify-end">
                  <a href="">
                      <i class='text-2xl transition duration-500 ease-in-out transform hover:scale-125 bx bxl-facebook-circle' ></i>
                  </a>
                  <a href="">
                      <i class='text-2xl transition duration-500 ease-in-out transform hover:scale-125 bx bxl-twitter' ></i>
                  </a>
              </div>
          </div>
          <div class="flex flex-col space-y-2 text-xs text-gray-500 md:flex-row md:justify-center md:space-y-0 md:space-x-3">
              <p>Copyright © 2021 Amiso. All rights reserved.</p>
              <p>Hand illustration by <a class="underline text-emerald-700" href="https://icons8.com" rel="nofollow" target="_blank">icons8.com</a></p>
              <p>Photos by <a class="underline text-emerald-700" href="https://pexels.com" rel="nofollow" target="_blank">pexels.com</a></p>
          </div>
      </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>

    /* .router-link-exact-active{
        color: #059669 !important;
    } */
</style>