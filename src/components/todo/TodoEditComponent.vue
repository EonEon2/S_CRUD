<template>
    <div>
        <div>
            {{ todo }}
        </div>
        <h1>Edit Page</h1>

        <div v-if="error">Error: {{error}}</div>

        <div v-else>
        <div>
            <label>mno</label><input type="text" v-model="todo.mno" readonly>
        </div>

        <div>
            <label>title</label><input type="text" v-model="todo.title">
        </div>

        <div>
            <label>writer</label><input type="text" v-model="todo.writer" readonly>
        </div>

        <div>
            <label>dueDate</label><input type="date" v-model="todo.dueDate">
        </div>
        
        <div>
        <button class="edit" @click="handleEdit">Edit</button>
        </div>

        <div>
        <button class="remove" @click="handleRemove">Remove</button>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { deleteOne, getOne, putOne } from '../../apis/todoAPI';
import { onMounted, ref } from 'vue';


const route = useRoute()
const router = useRouter()

const mno = route.params.mno
const error = ref(null);

const todo = ref({
    mno:0,
    title:'',
    writer:'',
    dueDate:''
})

const handleRemove = () =>{
    deleteOne(mno)
    router.replace("/todo/list")
}

const handleEdit = () => {
    putOne(todo.value).then(result => {
        router.replace(`/todo/read/${mno}`)
    })
   
}

onMounted(()=>{
    
    getOne(mno).then(data => todo.value=data).catch((err) => {
        error.value = err.response.data.message
        console.log(error.value)
    })
})


</script>

<style>
.edit{
    margin:0.5em;
}

.remove{
    margin:0.5em;
}

</style>