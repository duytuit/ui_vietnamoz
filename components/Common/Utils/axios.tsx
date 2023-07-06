import axios, { AxiosError } from "axios";
// import store from "@/redux/store";
// import { clientId } from "./getClinentId";
// import { setUserInfo } from "@/redux/features/user";

export const clientApi = axios.create({
    // axios Cấu hình yêu cầu được cấu hình với tùy chọn BaseURL, cho biết rằng phần công khai URL yêu cầu
    baseURL: '/',
    // hết giờ
    timeout: 10000,

    headers: {'Accept': 'application/json'},
})

// Add a request interceptor
clientApi.interceptors.request.use(

    config => {
        // const token = store.getState().token.token || localStorage.getItem('token');

        config.headers['Authorization'] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInB2IjoxLCJpYXQiOjE2ODg1NzQxNTgsImV4cCI6MTY4OTE3ODk1OH0.IW4PikV9HtCioapP0aE0qL5R0YbASfv7PO0fUYgNnRY`;
        // config.headers['info'] = JSON.stringify({ "client_id": `${clientId}`, "build": 1, "device_name": "remix", "js_ver": "v1", "native_ver": "201", "os": "android", "os_ver": "111", "bundle_id": "123", "type": "user" })

        return config;
    },
    error => {
        return Promise.reject(error);
    });

//Add a response interceptor
clientApi.interceptors.response.use(
    async function (res) {
        if (res.data.mess === "token-expired") {
            localStorage.removeItem('userInfo');
            localStorage.removeItem('token');
            // store.dispatch(setUserInfo('token-expired'));
        };
        // if (res.data.status === false) ShowToast('error', res.data.mess)
        // if (res.data.message === "token-expired")
        //     return ShowToast('error', res.data.mess)
        return res
    },
    async function (error) {
        // console.log({ error })
        // let { name, message, ...e } = error
        // if (name === 'AxiosError' && message === 'Network Error') {
        //     message = 'lỗi kết nối AxiosNetworkError';
        // } else if (error.response) {
        //     if (error.response.status >= 500) message = 'server error '
        //     if (error.response.status >= 400) message = 'client error'
        // } else if (error?.message.startsWith('timeout of'))
        //     message = 'Server timeout';

        //     ShowToast('error', message)
        // return { status: false, mess: message, no_connect: true }
        // return Promise.reject(error);
        // store.dispatch(showToast({ severity: 'error', summary: 'Error', detail: 'Đường truyền không ổn định, vui lòng thử lại sau!' },));
        return { data: {}, status: false, mess: 'Đường truyền không ổn định, vui lòng thử lại sau!' }
    },
);