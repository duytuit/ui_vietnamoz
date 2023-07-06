import { convertData } from "@/components/Common/Utils/Helper";
import { clientApi } from "@/components/Common/Utils/axios";
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