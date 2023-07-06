import { clientApi } from "@/components/Common/Utils/axios";
import { useEffect, useState } from "react";

export async function fetchServiceVisas(categoryId:number) {
    const response =  await clientApi.get(`vietnamoz/visa/list?projectId=2&categoryId=${categoryId}`);
    if (response.data?.code == 200) return response.data?.data;
}
export async function fetchCategory(projectId:number) {
    const response =  await clientApi.get(`system/categories/list?projectId=${projectId}`);
    if (response.data?.code == 200) return response.data?.data?.rows;
};