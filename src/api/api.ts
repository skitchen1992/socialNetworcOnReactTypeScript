import axios from "axios";


const instance =  axios.create({
    withCredentials:true,
    baseURL:"https://social-network.samuraijs.com/api/1.0/",
    headers:{
        "API-KEY":"c48f3115-8ef6-4eff-913e-2249d6f1fd23"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }}

export const getUsers2 = (currentPage = 1, pageSize = 10) => {
    return instance.get(
        `follow?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}
