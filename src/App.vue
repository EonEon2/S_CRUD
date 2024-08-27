<template>
  <div>
    <!-- Navigation Bar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <RouterLink to="/" class="navbar-brand">TodoList</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav">
            <RouterLink to="/" class="nav-item nav-link" active-class="active">Home</RouterLink>
            <RouterLink to="/about" class="nav-item nav-link">About</RouterLink>
            <RouterLink to="/todo" class="nav-item nav-link">Todo</RouterLink>
            
          </div>
          <div class="navbar-nav ms-auto">
            <RouterLink to="/signin" class="nav-item nav-link" v-if="computedMid === ''">Login</RouterLink>
            <button class="btn btn-outline-light" v-if="computedMid !== ''" @click="singout">Logout</button>
          </div>
        </div>
      </div>
    </nav>
    
    <hr/>
    <div class="container mt-3">
      UserId: {{ computedMid }}
    </div>
    <hr/>
    <RouterView></RouterView>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import useMember from './stores/useMember';

const { computedMid, singout } = useMember();
</script>

<style scoped>
/* Scoped styles to apply additional customization */
.navbar-nav .nav-link {
  margin-right: 1rem;
}

.navbar-brand {
  margin-right: 1rem;
}

.btn-outline-light {
  margin-left: 1rem;
}
</style>
