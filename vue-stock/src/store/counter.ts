import { defineStore } from 'pinia'

export const useCounterStore = defineStore("counter",{
    state: () => {
        return{
            count: 10
        }
    },

    //ไว้เขียนฟังก์ชันจัดการตัวแปนใน state
    actions: {
        increment( val: number){
            this.count += val
        },
        decrement(val: number){
            this.count -= val
        },
        async waitAndAdd() {
            setTimeout(() => {
                 this.count ++
            },1000)
        }
    },

    //ไว้กำหนดค่าของตัวแปรแบบอัตโนมัติ
    getters: {
       doubleCount: (state) => state.count * 2
    },
    
})
