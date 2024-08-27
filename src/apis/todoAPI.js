import axios from "axios"

const host = 'http://49.174.76.109:8088/api/v1/todos'


export const getList = async(page) => { // 전체조회
    const res = await axios.get(`${host}/list`, {params:{page:page}})

    console.log(res.data)
    return res.data
}

export const getOne = async(mno) => { // 한개 조회
    const res = await axios.get(`${host}/${mno}`)

    return res.data
}

export const postOne = async(obj) => { // 추가
    const res = await axios.post(`${host}`,obj)

    return res.data
}

export const deleteOne = async(mno) => { // 삭제
    const res = await axios.delete(`${host}/${mno}`)

    return res.data
}

export const putOne = async (todo) => { //수정
    const res = await axios.put(`${host}/${todo.mno}`,todo)

    return res.data
}