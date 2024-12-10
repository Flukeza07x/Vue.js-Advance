<template>
    <div class="card" v-for="product in products" :key="product">
        <div class="card-body">
            <p class="card-title">Name: {{ product.name }}</p>
            <p class="card-text">Price: {{ product.price }}</p>
        </div>
        <hr>
    </div>
</template>

<script setup lang="ts">

import { ref , onMounted } from 'vue'
import { db } from '../plugins/firebase'

const products: any = ref([])

onMounted(() => {
    db.collection("products")
    .onSnapshot((querySnapshot) => {
        products.value = []
        querySnapshot.forEach((doc) => {
            products.value.push(doc.data()) 
             console.log(products.value[0])
        })
    })  
})

</script>

<style scoped>

</style>