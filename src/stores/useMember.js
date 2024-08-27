import { defineStore } from "pinia";
import { computed, ref, toRef } from "vue";

const useMember = defineStore('useMember', () => {

    const userId = ref({mid:''})

    const toMid = toRef(userId.value, 'mid')

    const signin = (signinMid) => {
        
        userId.value.mid = signinMid
        localStorage.setItem('mid',signinMid)
        console.log('signin -------------')
    }

    const singout = () => {
        userId.value.mid = ''
        localStorage.removeItem('mid')
        console.log('singout------------')
    }

    const computedMid = computed(() => {

        
        if(!localStorage.getItem('mid')){
            return''
        }

        if(localStorage.getItem('mid')){
            userId.value.mid = localStorage.getItem('mid')
        }

        if(toMid){
            return toMid
        }

    })

    return {userId, signin, singout, computedMid, toMid}
})

export default useMember