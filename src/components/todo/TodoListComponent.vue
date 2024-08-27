<template>
  <div class="container">
    <!-- Todo Items -->
    <div class="row">
      <div class="col-md-6 col-lg-6 col-xl-6" v-for="todo in serverData.content" :key="todo.mno">
        <div class="todo-card">
          <h2>{{ todo.mno }}</h2>
          {{ todo.title }} 
          <p>
            <RouterLink :to="`/todo/read/${todo.mno}`" class="btn btn-success">
              Read More &raquo;
            </RouterLink>
          </p>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="d-flex justify-content-center align-items-center mt-4">
      <ul class="pagination">
        <li v-for="{ page, label } in pageNums" :key="page" :class="`page-item ${ page == serverData.number + 1 ? 'active' : ''}`">
          <a class="page-link" @click="() => handleClickPage(page)">{{ label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { getList } from '../../apis/todoAPI';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

const serverData = ref({
  content: [],
  number: 0,
  size: 0,
  totalPages: 0
});

const router = useRouter();
const route = useRoute();

const handleClickPage = (pageNum) => {
  const currentQueryPage = parseInt(route.query.page || 1);
  if (currentQueryPage === pageNum) {
    getList(pageNum).then(res => serverData.value = res);
  } else {
    router.push({ path: '/todo/list', query: { page: pageNum } });
  }
};

const pageNums = computed(() => {
  const current = serverData.value.number + 1;
  let lastPageNum = Math.ceil(current / 10.0) * 10;
  const startPageNum = lastPageNum - 9;
  const prev = startPageNum !== 1;
  let next = true;

  if (serverData.value.totalPages <= lastPageNum) {
    lastPageNum = serverData.value.totalPages;
    next = false;
  }

  const arr = [];
  if (prev) {
    arr.push({ page: startPageNum - 1, label: "Prev" });
  }
  for (let i = startPageNum; i <= lastPageNum; i++) {
    arr.push({ page: i, label: i });
  }
  if (next) {
    arr.push({ page: lastPageNum + 1, label: "Next" });
  }
  return arr;
});

onMounted(async () => {
  const page = route.query.page || 1;
  const result = await getList(page);
  serverData.value = result;
});

onBeforeRouteUpdate(async (to, from, next) => {
  const result = await getList(to.query.page);
  serverData.value = result;
  next();
});
</script>

<style scoped>
.todo-card {
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
}

.todo-card h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.todo-card p {
  margin-bottom: 1rem;
}

.pagination {
  margin: 0;
}

.page-item.active .page-link {
  background-color: #007bff;
  border-color: #007bff;
}

.btn-success {
  margin-top: 0.5rem;
}
</style>
