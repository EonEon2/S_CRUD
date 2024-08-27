<template>
    <div>
        <h1>Login Page</h1>
    </div>

    <label>ID: </label><input type="text" v-model="midInput">

    <div><button @click="handleClickLogin">Login</button></div>
</template>

<script setup>
import { ref } from 'vue';
import useMember from '../stores/useMember';


const {signin} = useMember()
const midInput = ref('')

const handleClickLogin = () => {
    const mid = midInput.value
    signin(mid)
    midInput.value=''
}



</script>

<style lang="scss" scoped>

</style>