import axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2f833604-27d8-4456-8ea9-60570dd1e753"
    }
})


export const getUsers = (currentPage: number, pageSize: number) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}


export const followUser = (id: any) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const unfollowUser = (id: any) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}