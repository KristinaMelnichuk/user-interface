import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": '2d2f55a1-7d92-4f48-9d23-6fe8f7ea86dc'
    },
});

// Определяем API для работы с пользователем
export const usersAPI = {
    async getUsers(pageNumber, pageSize) {
            const response = await instance.get(`users?page=${pageNumber}&count=${pageSize}`);
            return response.data;
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {})
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },
}