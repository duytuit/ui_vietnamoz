import { convertData } from "@/components/Common/Utils/Helper";
import { clientApi } from "@/components/Common/Utils/axios";
import { postData } from "@/components/Common/Utils/requestData";
import { useEffect, useState } from "react";

export async function fetchServiceVisas(params:any) {
    params = convertData(params)
    const response =  await clientApi.get(`vietnamoz/visa/list`,{params});
    if (response.data?.code == 200) return response.data?.data;
}
export async function fetchCategory(params:any) {
    params = convertData(params)
    const response =  await clientApi.get(`system/categories/list`,{params});
    if (response.data?.code == 200) return response.data?.data?.rows;
};
export async function fetchProduct(id:any) {
    const response =  await clientApi.get(`/system/product/${id}`);
    if (response.data?.code == 200) return response.data;
};
export async function fetchRegisteVisa(params:string,data) {
    // params = convertData(params)
    // console.log(params);
    const response =  await postData(`vietnamoz/visa/create?${params}`,data);
    return response.data;
};
export async function fetchCreateReceipt(params:string,data) {
    const response =  await postData(`vietnamoz/visa/receipt/create?${params}`,data);
    return response.data;
};
/**
 * upload data file
 * @param {Object} data - data object.
 * @param {string} data.file - The file of the data.
 */
export async function uploadFile(data:object={}) {
    const response =  await postData(`/system/upload/create`,data,true);
   if (response.data?.code == 200) return response.data;
};