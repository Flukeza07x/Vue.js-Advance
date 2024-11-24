<template>

    <section class="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28"><!-- Start Hero -->
        <div class="grid items-center gap-10 lg:grid-cols-2">
            <div class="space-y-8 lg:space-y-12">
                <div class="space-y-6">

                    <!-- <h1 class="text-3xl leading-3">Count : {{ store.count }}</h1>
                    <h1 class="text-3xl leading-3">Double Count : {{ store.doubleCount }}</h1>
                    <button
                        class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2 px-5 rounded-lg text-white font-semibold mr-4"
                        @click="store.increment(1)">Increment
                    </button>

                    <button
                        class="bg-red-600 hover:bg-red-700 transition-colors duration-300 py-2 px-5 rounded-lg text-white font-semibold mr-4"
                        @click="store.decrement(1)">Decrement
                    </button>

                    <button
                        class="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 py-2 px-5 rounded-lg text-white font-semibold mr-4"
                        @click="store.waitAndAdd()">Wait+Increment
                    </button> -->

                    <h1 class="text-3xl leading-3">Count : {{ store.count }}</h1>
                    <h1 class="text-3xl leading-3">Double Count : {{ store.doubleCount }}</h1>
                    <button
                        class="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 py-2 px-5 rounded-lg text-white font-semibold mr-4"
                        @click="increment(1)">Increment
                    </button>

                    <button
                        class="bg-red-600 hover:bg-red-700 transition-colors duration-300 py-2 px-5 rounded-lg text-white font-semibold mr-4"
                        @click="decrement(1)">Decrement
                    </button>

                    <button
                        class="bg-pink-600 hover:bg-pink-700 transition-colors duration-300 py-2 px-5 rounded-lg text-white font-semibold mr-4"
                        @click="waitAndAdd()">Wait+Increment
                    </button>

                    <h1 class="text-4xl font-semibold sm:text-6xl">Landing page for <br>your online service</h1>
                    <p class="max-w-sm text-xl">Sed ea enim et expedita quo. Sint consequuntur nobis expedita mollitia
                        voluptatem aut est a quia.</p>
                </div>
                <div class="flex flex-col sm:flex-row space-y-2.5 sm:space-y-0">
                    <input
                        class="w-full px-6 py-4 border-2 rounded-lg outline-none sm:w-72 sm:border-r-0 sm:rounded-none sm:rounded-tl-lg sm:rounded-bl-lg focus:border-emerald-600"
                        type="text" placeholder="Your email address">
                    <button
type="submit"
                        class="px-6 py-4 font-semibold text-white transition-colors duration-300 rounded-lg bg-emerald-600 hover:bg-emerald-700 sm:rounded-none sm:rounded-tr-lg sm:rounded-br-lg">Get
                        Started</button>
                </div>
            </div>

            <!-- <div class="block">
                <img :src="state" alt="Illustration" class="md:h-96 mx-auto">
                <p class="grid grid-cols-2 text-center mt-4">
                    <button @click="prev()">&lt; Back</button>
                    <button @click="next()">Next></button>
                </p> -->

            <div class="carousel block">
                <transition>
                    <img :key="state" :src="state" alt="" class="slide mx-auto md:h-96">
                </transition>
            </div>


        </div>
    </section><!-- End Hero -->

    <section class="container px-4 mx-auto"><!-- Start Brands -->
        <div class="grid grid-cols-3 gap-8 lg:grid-cols-6">
            <div class="flex justify-center"><img src="@/assets/img/brands/varta.svg" alt="varta"></div>
            <div class="flex justify-center"><img src="@/assets/img/brands/lenovo.svg" alt="lenovo"></div>
            <div class="flex justify-center"><img src="@/assets/img/brands/bbs.svg" alt="bbs"></div>
            <div class="flex justify-center"><img src="@/assets/img/brands/weller.svg" alt="weller"></div>
            <div class="flex justify-center"><img src="@/assets/img/brands/british_airways.svg" alt="british airways">
            </div>
            <div class="flex justify-center"><img src="@/assets/img/brands/lufthansa.svg" alt="lufthansa"></div>
        </div>
    </section><!-- End Brands -->
</template>

<script setup lang="ts">

// import { useCycleList } from '@vueuse/core'

// const { state, next, prev } = useCycleList([
//     './src/assets/img/hero-illustration.png',
//     './src/assets/img/slide2.svg',
//     './src/assets/img/slide3.svg',
// ])
import { useIntervalFn } from '@vueuse/core'
import { useAppCycleList } from '../../hook/useAppCycleList'
import { computed } from 'vue'

import { storeToRefs, mapActions } from 'pinia'

//import counter.ts
import { useCounterStore } from '../../store/counter'

//Object store
const store = useCounterStore()

//หรือจะเขียนแบบ destructuring
const { count, doubleCount } = storeToRefs(store)
const { increment, decrement, waitAndAdd } = mapActions(useCounterStore, ['increment','decrement','waitAndAdd'])

const images = [
    './src/assets/img/hero-illustration.png',
    './src/assets/img/slide2.svg',
    './src/assets/img/slide3.svg',
]

const { state, next, isForward, } = useAppCycleList(images, null)

useIntervalFn(() => next(), 3000)

const direction = computed(() => {
    if (isForward.value) {
        return {
            from: 'translateX(100%)',
            to: 'translateX(-50%)',
        };
    } else {
        return {
            from: 'translateX(-100%)',
            to: 'translateX(100%)',
        };
    }
})

</script>

<style scoped>
.carousel {
    position: relative;
    top: -100px;
    /* left: 0%; */
}

img.slide {
    position: absolute;
    top: -80px;
    /* left: 15%; */
}

.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from {
    transform: v-bind('direction.from');
}

.v-leave-to {
    transform: v-bind('direction.to');
}
</style>