<template>
    <div>

    <div v-if="loading" class="divLoding">
            <h1>loading...</h1>
    </div>

        <ul>
            <li v-for="todo in result.content" :key="todo.tno" @click="()=>handleClickMove(todo.mno)">
                    {{ todo }}
            </li>
        </ul>

        <template v-for="(p,idx) in pageArr" :key="idx">
            <span class="pageSpan" @click="() => handleClickPage(p.page)" > {{ p.label }} </span>
        </template>

    </div>
</template>

<script setup>
import { getList } from '../../apis/todoAPI';
import useListData from '../../hooks/useListData';
const {loading ,router, refresh, result, pageArr, moveToRead} = useListData(getList)

const handleClickPage = (pageNum) => {

router.push({query: {page:pageNum} }).then(() => {
  refresh.value = !refresh.value
})

}

const handleClickMove = (mno) => {
    moveToRead(mno)
}






</script>

<style>

.divLoding{
  position: absolute;
  top: 30vh;
  left: 40vw;
  width: 20vw;
  height: 6vh;
  background-color: tomato;
}

.pageSpan {
  margin:0.3em;
  padding:0.1em;
  border:1px solid black
}

</style>