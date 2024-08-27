<script setup>
import { RouterLink } from 'vue-router';
import { RouterView } from 'vue-router';
import useMember from './stores/useMember';

const {computedMid, singout} = useMember()
</script>

<template>
  <div>
    <span><RouterLink to="/">Main</RouterLink></span>
    <span><RouterLink to="/about">About</RouterLink></span>
    <span><RouterLink to="/todo">todo</RouterLink></span>


    <span v-if="computedMid === ''"><RouterLink to="/signin">Login</RouterLink></span>
    <span v-if="computedMid !== ''"><button @click="singout">Logout</button></span>
  </div>

  <hr/>
  userId: {{ computedMid }}
  <hr/>
  <RouterView></RouterView>
  
</template>

<style>

span{
  margin: 0.2em;
}

</style>
