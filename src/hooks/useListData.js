import { computed, onMounted, ref, watch } from "vue"
import { onBeforeRouteUpdate, useRoute, useRouter } from "vue-router"
import { getList } from "../apis/todoAPI"


const useListData = () => {

    const route = useRoute()
    const router = useRouter()
    
    const loading = ref(false)
    const refresh = ref(false)
    const result = ref({
        content:[],
        number:0,
        size:10,
        totalElements:0,
        totalPages:0
    })

    const loadPageData = async(page) => {

        loading.value = true

        const data = await getList(page)

        result.value = data
        loading.value = false
    }

    const pageArr = computed(() => {

        // 현재 페이지 번호
        const currentPage = result.value.number + 1

        // 마지막 페이지 번호
        let lastPage = Math.ceil(currentPage/10.0)*10

        // 시작 페이지 번호
        const start = lastPage - 9

        //이전, 다음
        const prev = start !== 1
        const next = result.value.totalPages > lastPage

        if(result.value.totalPages < lastPage){
            lastPage = result.value.totalPages
        }

        const pageArr = []

        if(prev){
            pageArr.push({page: start-1, label:'이전'})
        }

        for(let i=start; i<= lastPage; i++){
            pageArr.push({page:i, label:i})
        }


        if(next){
            pageArr.push({page: lastPage+1, label:'다음'})
        }

        return pageArr

    })

    onMounted(() => {
        loadPageData(route.query.page || 1)
    })

    watch(refresh, ()=> {
        loadPageData(route.query.page || 1)
    })

    onBeforeRouteUpdate((to,from,next) => {
        loadPageData(to.query.page || 1)
        next()
    })

    
    const moveToRead = (mno) => {
        router.push(`/todo/read/${mno}`)
    }



    return{ loading ,router, route, result, pageArr, refresh, moveToRead  }

}

export default useListData