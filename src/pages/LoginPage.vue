<template>
    <div class="container">
      <div class="login-card p-4 shadow rounded">
        <h1 class="text-center mb-4">Login Page</h1>
        <form @submit.prevent="handleClickLogin">
          <div class="mb-3">
            <label for="idInput" class="form-label">ID:</label>
            <input
              id="idInput"
              type="text"
              v-model="midInput"
              class="form-control"
              placeholder="Enter your ID"
              required
            />
          </div>
          <button type="submit" class="btn btn-dark w-100">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import useMember from '../stores/useMember';
  
  const { signin } = useMember();
  const midInput = ref('');
  
  const handleClickLogin = () => {
    const mid = midInput.value;
    signin(mid);
    midInput.value = '';
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    background-color: #f8f9fa;
    padding-top: 2rem; /* Adjust the padding to move the container up */
  }
  
  .login-card {
    background-color: #ffffff;
    border: 1px solid #ced4da;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    max-width: 500px; /* Adjust the width of the card */
    width: 100%; /* Make the card responsive to the container width */
  }
  
  .login-card h1 {
    font-size: 1.5rem;
    color: #333;
  }
  
  .login-card .form-label {
    color: #495057;
  }
  
  .login-card .form-control {
    border: 1px solid #ced4da;
  }
  
  .login-card .btn-dark {
    background-color: #343a40; /* Dark grey color */
    border-color: #343a40; /* Dark grey border */
  }
  
  .login-card .btn-dark:hover {
    background-color: #23272b; /* Slightly darker grey on hover */
    border-color: #1d2124; /* Even darker grey border on hover */
  }
  </style>