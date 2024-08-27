<template>
    <div class="container">
      <div class="header">
        <div class="header-content">
          <h1 class="page-title"></h1>
          <RouterLink v-if="!isAddPage" to="/todo/add">
            <button class="btn btn-primary">Todo ADD</button>
          </RouterLink>
        </div>
        <RouterView></RouterView>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { RouterLink, RouterView, useRoute } from 'vue-router';
  
  const route = useRoute();
  const isAddPage = computed(() => route.path === '/todo/add');
  </script>
  
  <style scoped>
  .container {
    padding: 1rem;
  }
  
  .header {
    margin-bottom: 1rem;
  }
  
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .page-title {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .btn-primary {
    margin-left: 1rem;
  }
  </style>