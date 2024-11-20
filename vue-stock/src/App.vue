<template>
  <main>
    <header class="container flex items-center justify-between px-4 mx-auto mt-6"><!-- Start Header -->
            <div>
                <a href="/"><img src="@/assets/img/logo.svg" alt="Logo"></a>
            </div>
            <div class="flex items-center">
                <div class="hidden space-x-6 font-medium md:block">
                    <a href="#0" class="transition-colors duration-200 hover:text-emerald-700">Features</a>
                    <a href="#0" class="transition-colors duration-200 hover:text-emerald-700">Prices</a>
                    <a href="#0" class="transition-colors duration-200 hover:text-emerald-700">About</a>
                    <a href="#0" class="transition-colors duration-200 hover:text-emerald-700">Contacts</a>
                    <button class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold">Get Started</button>
                </div>
                <div class="md:hidden">
                    <a href="#0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                    </a>
                </div>
            </div>
        </header>

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

      <section class="container px-4 py-12 mx-auto space-y-12 sm:py-16 md:py-20 xl:py-28 sm:space-y-16 xl:space-y-24"><!-- Start Points -->
          <div class="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0 lg:space-x-10">
              <div class="w-full lg:w-1/2">
                  <img class="w-full" src="@/assets/img/block-pic-1.svg" alt="">
              </div>
              <div class="w-full lg:w-1/2">
                  <div class="space-y-5 sm:space-y-6">
                      <h3 class="text-3xl font-semibold md:text-4xl">Incredible</h3>
                      <p class="w-full text-lg sm:w-4/5">
                          Consequatur quidem deserunt qui fugit cumque ut esse est dignissimos. Itaque quia et veritatis. Qui voluptatem dolor quia exercitationem sed similique. Incidunt quae suscipit nihil deleniti. Possimus praesentium sunt aut tempora ut alias.
                      </p>
                      <button class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold flex space-x-2.5">
                          <span>Get Started</span>
                          <span>
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex flex-col items-center justify-between space-y-6 lg:flex-row-reverse lg:space-y-0 lg:space-x-10">
              <div class="w-full lg:w-1/2">
                  <img class="w-full" src="@/assets/img/block-pic-2.svg" alt="">
              </div>
              <div class="w-full lg:w-1/2">
                  <div class="space-y-5 sm:space-y-6">
                      <h3 class="text-3xl font-semibold md:text-4xl">Fantastic</h3>
                      <p class="w-full text-lg sm:w-4/5">
                          Itaque cupiditate soluta necessitatibus. Quis ut veritatis sed exercitationem autem est. Pariatur dolorum officiis fuga officia labore libero. Magni tenetur delectus. Et consequatur accusantium quisquam reiciendis aut.
                      </p>
                      <button class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold flex space-x-2.5">
                          <span>Get Started</span>
                          <span>
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                          </span>
                      </button>
                  </div>
              </div>
          </div>
          <div class="flex flex-col items-center justify-between space-y-6 lg:flex-row lg:space-y-0 lg:space-x-10">
              <div class="w-full lg:w-1/2">
                  <img class="w-full" src="@/assets/img/block-pic-3.svg" alt="">
              </div>
              <div class="w-full lg:w-1/2">
                  <div class="space-y-5 sm:space-y-6">
                      <h3 class="text-3xl font-semibold md:text-4xl">Intelligent</h3>
                      <p class="w-full text-lg sm:w-4/5">
                          Neque aperiam labore reiciendis fugit error mollitia. Repellat non voluptatem expedita quos quia. Quae architecto quia perferendis dicta facilis. Impedit aut sit. Voluptatem praesentium rem officiis.
                      </p>
                      <button class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2.5 px-5 rounded-lg text-white font-semibold flex space-x-2.5">
                          <span>Get Started</span>
                          <span>
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                          </span>
                      </button>
                  </div>
              </div>
          </div>
      </section><!-- End Points -->

      <section class="bg-gray-100"><!-- Start Features -->
          <div class="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28">
              <div class="mb-10 space-y-4 text-center lg:mb-16">
                  <h2 class="text-4xl font-semibold md:text-5xl">Our service features</h2>
                  <p class="mx-auto text-lg md:max-w-md">Aliquid officiis cumque sunt sint. Et quo culpa. Enim sed natus molestiae fugiat cum consequatur quia sunt.</p>
              </div>
              <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 lg:gap-10">
                  <div class="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
                      <div class="flex items-center justify-center w-12 h-12 text-white rounded-full bg-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
                            </svg>
                      </div>
                      <div class="space-y-4">
                          <h4 class="text-2xl font-semibold md:text-3xl">Incredible</h4>
                          <p>Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.</p>
                      </div>
                  </div>
                  <div class="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
                      <div class="flex items-center justify-center w-12 h-12 text-white rounded-full bg-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
                            </svg>
                      </div>
                      <div class="space-y-4">
                          <h4 class="text-2xl font-semibold md:text-3xl">Generic</h4>
                          <p>Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.</p>
                      </div>
                  </div>
                  <div class="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
                      <div class="flex items-center justify-center w-12 h-12 text-white rounded-full bg-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                            </svg>
                      </div>
                      <div class="space-y-4">
                          <h4 class="text-2xl font-semibold md:text-3xl">Awesome</h4>
                          <p>Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.</p>
                      </div>
                  </div>
                  <div class="p-6 space-y-6 transition-shadow duration-200 bg-white rounded-lg shadow hover:shadow-xl">
                      <div class="flex items-center justify-center w-12 h-12 text-white rounded-full bg-emerald-600">
                          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                            </svg>
                      </div>
                      <div class="space-y-4">
                          <h4 class="text-2xl font-semibold md:text-3xl">Refined</h4>
                          <p>Adipisci tempora pariatur modi recusandae. Omnis neque dolorum. Natus facere voluptatem.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section><!-- End Features -->

      <section class="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28"><!-- Start Testimonials -->
          <div class="mb-10 space-y-4 text-center lg:mb-16">
              <h2 class="text-4xl font-semibold md:text-5xl">Testimonials</h2>
              <p class="mx-auto text-lg md:max-w-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellendus numquam.</p>
          </div>
          <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3 lg:gap-10">
              <div class="p-8 transition-colors duration-200 border-2 border-gray-200 rounded-lg hover:border-emerald-600">
                  <div class="flex items-center mb-6 space-x-4">
                      <img class="w-16 h-16 rounded-full" src="@/assets/img/testimonials-ava-1.jpg" alt="">
                      <div>
                          <h5 class="font-semibold">Aron Lowe</h5>
                          <p class="text-sm text-gray-600">Schneider Inc</p>
                      </div>
                  </div>
                  <p>
                      Itaque est odio et rerum harum molestias aliquam. Ullam et aut velit culpa aut. Perferendis nesciunt non voluptatibus mollitia omnis. Dolorem error inventore. Cupiditate nihil modi quos rerum. Mollitia rerum ipsam facere velit.
                  </p>
              </div>
              <div class="p-8 transition-colors duration-200 border-2 border-gray-200 rounded-lg hover:border-emerald-600">
                  <div class="flex items-center mb-6 space-x-4">
                      <img class="w-16 h-16 rounded-full" src="@/assets/img/testimonials-ava-2.jpg" alt="">
                      <div>
                          <h5 class="font-semibold">Murphy Ryan</h5>
                          <p class="text-sm text-gray-600">Gibson Inc</p>
                      </div>
                  </div>
                  <p>
                      Quis voluptatem nobis quibusdam. Fuga aliquid eum repudiandae aut iure omnis. Omnis facere nisi minus ut quos excepturi saepe perspiciatis et. Dolore ut nihil minima natus enim consequuntur aut qui. Ullam dicta labore dolores eos.
                  </p>
              </div>
              <div class="p-8 transition-colors duration-200 border-2 border-gray-200 rounded-lg hover:border-emerald-600">
                  <div class="flex items-center mb-6 space-x-4">
                      <img class="w-16 h-16 rounded-full" src="@/assets/img/testimonials-ava-3.jpg" alt="">
                      <div>
                          <h5 class="font-semibold">Lukas Walker</h5>
                          <p class="text-sm text-gray-600">Kiehn LLC</p>
                      </div>
                  </div>
                  <p>
                      Et quibusdam voluptatem molestias cum autem autem et ut. Ad et tenetur. Autem quis id tempora accusantium quod dolores et. Possimus voluptatem hic nulla consequatur voluptates libero quia expedita. Eum aut voluptatem qui praesentium vitae.
                  </p>
              </div>
          </div>
      </section><!-- End Testimonials -->

      <section class="container mx-auto sm:px-4"><!-- Start Sing up -->
          <div class="px-4 py-12 text-white bg-emerald-600 sm:py-16 md:py-20 xl:py-28 sm:rounded-lg">
              <div class="mb-8 space-y-4 text-center lg:mb-12">
                  <h2 class="text-4xl font-semibold md:text-5xl">Start your free trial</h2>
                  <p class="mx-auto text-lg md:max-w-md">Trial period - 14 days, no credit card required</p>
              </div>
              <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0 justify-center">
                  <input class="w-full px-6 py-4 border-2 border-white border-solid rounded-lg outline-none sm:w-72 sm:border-r-0 sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg focus:border-emerald-700" type="text" placeholder="Your email address">
                  <button type="submit" class="px-6 py-4 font-semibold text-white transition-colors duration-300 rounded-lg bg-emerald-700 hover:bg-emerald-800 sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg">Get Started</button>
              </div>
          </div>
      </section><!-- End Sing up -->

      <footer class="container px-4 py-6 mx-auto mt-6">
          <hr class="mb-6">
          <div class="flex flex-col justify-between mb-6 space-y-6 md:flex-row md:space-y-0">
              <div class="flex-1">
                  <a href="/"><img src="@/assets/img/logo.svg" alt="Logo"></a>
              </div>
              <div class="flex flex-1 space-x-6 font-medium md:justify-center">
                  <a href="#0" class="transition-colors duration-200 hover:text-emerald-700">Features</a>
                  <a href="#0" class="transition-colors duration-200 hover:text-emerald-700">Prices</a>
                  <a href="#0" class="transition-colors duration-200 hover:text-emerald-700">About</a>
                  <a href="#0" class="transition-colors duration-200 hover:text-emerald-700">Contacts</a>
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
  </main>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>