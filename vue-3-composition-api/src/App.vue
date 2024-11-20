



<template>
  <div>
<!-- <h1>{{ title }}</h1>
<h1>{{ message }}</h1>
<h1>{{ year }}</h1> -->
<Home-view/>
  </div>
</template>

<script setup lang="ts">

  // import { ref } from "vue"
import HomeView from "./components/HomeView.vue";

    //  const title = ref("hello world!")
    //  const message = ref("hello world! yahoo") 
    //  const year = ref(2022) 

    //  setTimeout(() => {
    //   title.value = 'hello haha'
    // }, 2000);

</script>

<!-- <script lang="ts">
import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({ -->

    // Composition API
  // setup () {
    
    //REF รองรับ PREMITIVE TYPR STRING, NUMBER, BOOLEAN INCLUDING OBJECTS
    // const title = ref("hello world!") 
    // const message = ref("hello world! yahoo") 
    // const year = ref("hello world! year") 
    // console.log(title);  

    //reactive รองรับเฉพาะ object เท่านั้น!!!!!!!!!!!!!
    // const data = ref({
    //   title: 'Hello na',
    //   message: "Welcome message",
    //   year: 2022

    
    // })
    // console.log(data);

    // setTimeout(() => {
      // title.value = "Hello gg"
    //   data.value.title = 'hello haha'
    // }, 2000);

  //   // return {title, message, year}
  //   return {data}
  // },

  // data(){
  //   return{
  //     product: "test"
  //   }
  // }
   
  // // option API
  //  data(){
  //   return{
  //     title: "Hellow World"
  //   }
  //  },

  //  mounted(){
  //   setTimeout(() =>{
  //     this.title = "Hellow fluke"
  //   },2000)
  //  }

<!-- })
</script> -->

<style scoped>

</style>