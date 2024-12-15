<template>
    <v-card-actions class="justify-center h-100">
        <v-row justify="center" class="flwx-column" style="flex-grow:0 ;">
            <Datepicker
            v-model="date"
            locale="th"
            :format="format"
            placeholder="เลือกวัน"
            modeType="yyyy-MM-dd HH:mm:ss"
            position="center"
            autoApply
            @update:modelValue="handleDate"
            
            >
            <template #year="{ year }">
                {{ (year+543) }}
               
            </template>

            </Datepicker>

            <h4 class="mt-4">ค่าที่จะนำไปใช้: {{ date }}</h4>
        </v-row>
    </v-card-actions>
</template>

<script setup lang="ts">

import { ref } from 'vue'
const date = ref()

 const format = (date: any) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()
        const hour = date.getHours()
        const min = date.getMinutes()
        const sec = date.getSeconds()

        return `${day}/${month}/${year+543}`
 }

        const handleDate = (modelData: null) => {
            date.value = modelData
            if(date.value != null) {
                console.log(date.value);

            }
            
        }


</script>

<style scoped>

</style>