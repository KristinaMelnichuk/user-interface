import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '2d2f55a1-7d92-4f48-9d23-6fe8f7ea86dc'
    },
});

export const usersAPI = {
    getUsers (pageNumber, pageSize) {
        return instance.get(`users?page=${pageNumber}&count=${pageSize}`,)
            .then(response => {
                return response.data;
            });
    }
}