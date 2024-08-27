<template>
    <div>
        <h1>Todo Read Component</h1>
        {{ todo }}
        <button @click="handleMoveEdit">Edit</button>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getOne } from '../../apis/todoAPI';

const route = useRoute()
const router = useRouter()

const mno = route.params.mno

const todo = ref({
    mno:0,
    title:'',
    wrtier:'',
    dueData:''
})

onMounted(()=>{
    getOne(mno).then(data=> todo.value=data)
})

const handleMoveEdit = () => {
    router.push(`/todo/edit/${mno}`)
}




</script>

<style lang="scss" scoped>

</style>