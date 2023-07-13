import axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2f833604-27d8-4456-8ea9-60570dd1e753"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUser(id: any){
        return instance.post(`follow/${id}`)
            .then(response => response.data)
    },
    unfollowUser(id: any){
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    getProfile(id: any){
        return profileAPI.getProfile(id)
    }
}

export const profileAPI = {
    getProfile(id: any){
        return instance.get(`profile/` + id);
    },
    getStatus(id:any) {
        return instance.get(`status/` + id)
    },
    updateStatus(status: any) {
        return instance.put(`status` ,{status: status})
    }
}