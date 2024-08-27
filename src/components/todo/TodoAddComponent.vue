<template>
    <div class="container">
      <h1 class="page-title">Todo ADD</h1>
  
      <div class="form-group">
        <label for="title" class="form-label">Title</label>
        <input type="text" id="title" class="form-control" v-model="todo.title">
      </div>
  
      <div class="form-group">
        <label for="writer" class="form-label">Writer</label>
        <input type="text" id="writer" class="form-control" v-model="todo.writer">
      </div>
  
      <div class="form-group">
        <label for="dueDate" class="form-label">Due Date</label>
        <input type="date" id="dueDate" class="form-control" v-model="todo.dueDate">
      </div>
  
      <div class="form-group">
        <button type="button" class="btn btn-primary" @click="handleClickadd">Submit</button>
      </div>
    </div>
  </template>

<script setup>
import { ref } from 'vue';
import { postOne } from '../../apis/todoAPI';


const todo = ref({
    title:'',
    writer:'',
    dueDate:''
})

const handleClickadd = async() => {
    console.log(todo.value)
    const res = await postOne(todo.value)

    alert(res.mno)
}



</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
}

.page-title {
  text-align: center;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
  }

  .form-control {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  .btn-primary {
    display: block;
    width: 100%;
    padding: 0.75rem;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    
    &:hover {
      background-color: #0056b3;
    }
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .page-title {
    font-size: 1.5rem;
  }

  .form-group {
    margin-bottom: 1rem;
    
    .form-label {
      font-size: 0.875rem;
    }
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 1.25rem;
  }

  .form-control {
    font-size: 0.875rem;
  }

  .btn-primary {
    padding: 0.5rem;
    font-size: 0.875rem;
  }
}
</style>