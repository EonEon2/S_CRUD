<template>
    <div>
        <RouterLink v-if="!isAddPage" to="/todo/add"><button>Todo ADD</button></RouterLink>

        <RouterView></RouterView>
    </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';


const route = useRoute();
const isAddPage = computed(() => route.path === '/todo/add');

watch(route, () => {
})


</script>

<style lang="scss" scoped>

</style>