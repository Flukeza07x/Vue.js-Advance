<template>
    <section class="container px-4 py-12 mx-auto sm:py-16 md:py-20 xl:py-28">
        <div class="mb-10 space-y-4 text-center lg:mb-16">
            <h2 class="text-4xl font-semibold md:text-5xl">Contact us</h2>
            <p class="mx-auto text-lg md:max-w-md">บริการด้าน IT Service ในปัจจุบันมีความสำคัญกับทุุกธุรกิจ ดังนั้น IT Genius จะต้องเป็นผู้ให้บริการ ด้านไอทีอย่างสมบูรณ์แบบ ครบวงจร เพื่อตอบสนองทุกความต้องการของลูกค้าในยุคปัจจุบัน</p>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-2 lg:gap-10">
            <div class="p-8 transition-colors duration-200 border-2 border-gray-200 rounded-lg hover:border-emerald-600">
                <div class="grid md:grid-cols-2">
                    <h1 class="font-bold mb-4">ที่อยู่</h1>
                    <p class="text-end"></p>
                </div>
                <p class="mb-4">บริษัท ไอทีจีเนียส เอ็นจิเนียริ่ง จำกัด เลขที่ 5 ซอยลาดพร้าววังหิน 68 ถนนลาดพร้าววังหิน แขวงลาดพร้าว เขตลาดพร้าว กรุงเทพมหานคร 10230</p>
                <p>โทร.02-570-8449</p>
                <p>อีเมล์ contact@itgenius.co.th</p>
            </div>
            <div class="p-8 transition-colors duration-200 border-2 border-gray-200 rounded-lg hover:border-emerald-600">
                <div class="grid md:grid-cols-2">
                    <h1 class="font-bold mb-4">ข้อมูลการชำระเงิน</h1>
                    <p class="text-end">
                        <button @click="copy()">
                            <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
                            class="w-6 h-6 inline-block text-emerald-600">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                            </svg>

                            {{ copied ? 'คัดลอกแล้ว':'คัดลอกเลขบัญชี'}}
                        </button>
                    </p>
                </div>
                <p>ธนาคารไทยพาณิชย์</p>
                <p>เลขบัญชี: <span>010-4349-835</span></p>
                <p>สาขาลาดพร้าว ซอย 59</p>
                <p>บัญชีประเภท: ออมทรัพย์</p>
                <p>ชื่อบัญชี: บริษัท ไอทีจีเนียส เอ็นจิเนียริ่ง จำกัด</p>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
   import {ref} from 'vue'
   import { useClipboard } from '@vueuse/core'
   
   const accNumber = ref('0104349835')
   const { copy,copied } = useClipboard({source: accNumber.value , copiedDuring:1000 })

</script>

<style scoped>

</style>