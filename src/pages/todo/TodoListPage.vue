<template>
    <div>
      <h1 class="page-title">List Page</h1>
      <TodoListComponent></TodoListComponent>
    </div>
  </template>
  
  <script setup>
  import TodoListComponent from '../../components/todo/TodoListComponent.vue';
  </script>
  
  <style scoped>
  .page-title {
    margin-bottom: 1rem;
  }
  </style>