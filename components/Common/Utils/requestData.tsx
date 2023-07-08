import { createFormData, convertData } from "./Helper";
import { clientApi } from "./axios";

export const postData = (url, data, isUpload = false, timeout = 600000) => {
    if (isUpload) {
        const { file, files, gallery, image, avatar, ...params } = data
        data = createFormData(params, file, files, gallery, image, avatar)
     
    } else data = convertData(data)
    return clientApi.post(url, data, isUpload ? { timeout, headers: { 'Content-Type': 'multipart/form-data' } } : { timeout })
};

export const getData = (url, params) => {
    params = convertData(params)
    return clientApi.get(url, { params })
};

// export const postDataV3 = (url, data, isUpload = false, timeout = 600000) => {
//     if (isUpload) {
//         const { file, ...params } = data
//         data = createFormData(params, file)
//         console.log({ data })
//     } else data = convertData(data)
//     return clientApi.post(url, data, isUpload ? { timeout, responseType: 'blob', headers: { 'Content-Type': 'multipart/form-data' } } : { timeout })
// };

export const getDataV3 = (url, params, timeout = 600000) => {
    return clientApi.get(url + '?' + params, { timeout, responseType: 'blob', headers: { 'Content-Type': 'multipart/form-data' } })
};