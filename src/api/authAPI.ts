import axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "2f833604-27d8-4456-8ea9-60570dd1e753"
    }
})


export const authAPI = {
    me () {
       return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe = false) {
      return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout () {
      return instance.delete(`auth/login`)
    }
}