"use client"
import { use, useEffect, useRef, useState } from "react";
import { useOder } from "../context/orderContext";
import { Checkbox } from 'primereact/checkbox';  
import { Form } from "@unform/web";
import FormInput from "@/components/Common/FormInput";
import { convertObjToParam, formatCurrencyV2 } from "@/components/Common/Utils/Helper";
import { fetchRegisteVisa } from "@/components/Hero/api";
import { redirect } from "next/navigation";
const Step5=({ formStep,setNewCustomer, nextFormStep ,product,customer,register})=> {
    const [chauffeurService, setChauffeurService] = useState(false);
    const [active, setActive] = useState(false);
    const [travelInsuranceService, setTravelInsuranceService] = useState(false);
    const [serviceTotal, setServiceTotal] = useState(0);
    async function handleSubmit(event) {
      console.log(event);
      console.log('đã đóng');
      setActive(true)
      setTimeout(() => {
        setActive(false)
        console.log('đã mở');
      }, 4000)
      const register = localStorage.getItem('register')
      let __register = JSON.parse(register)
      console.log('đang thực thi',__register);
      var elements = document.getElementsByClassName("input_express_service");
      let services=[];
      for (let i=0; i<elements.length; i++) {
        const element:any = elements[i] as HTMLElement;
        if(element.checked == true){
          const service =JSON.parse(element.value);
          console.log(service);
          services.push(service)
        }
      }
      __register.services = services;
      __register.currency = localStorage.getItem('currency');
      __register.exchange_rate = localStorage.getItem('exchange_rate');
      console.log('__register',JSON.stringify(__register));
      const param={
        projectId:product.projectId
      }
      const data={
        register:__register
      }
      const rs_register = await fetchRegisteVisa(convertObjToParam(param),data)
      if(rs_register.code = '000'){
        // redirect(rs_register.checkoutUrl);
        if(rs_register.checkoutUrl){
            // localStorage.removeItem('register')
            window.location.href = rs_register.checkoutUrl;
        }
      }
    }
    let _register:any = localStorage.getItem('register')
    let _new_register = JSON.parse(_register)
    let _serviceVisas:any = localStorage.getItem('serviceVisas')
    let _new_serviceVisas = JSON.parse(_serviceVisas)
   
    const currency = localStorage.getItem('currency');
    const exchange_rate = parseInt( localStorage.getItem('exchange_rate'));
   let sumery = (currency == 'USD' ? (_new_register.product.price / exchange_rate)  : _new_register.product.price)*_new_register.customers.length
    
    useEffect(()=>{
      setServiceTotal(sumery);
    },[])
    console.log('serviceTotal',serviceTotal);
    
  const express_service = (item,event) => {
    // console.log(event);
    // console.log(item);
    
    const mydivclass = event.target.closest(".extra-service-card").querySelector('.relative') as HTMLElement;
    //const mydivclass = event.target.closest(".extra-service-card").querySelector('.card-service-icon');
    console.log(mydivclass);
    const price = (currency == 'USD' ? (item.price / exchange_rate)  : item.price);
    console.log('price',price);
    
    if(mydivclass.classList.contains('text-white')) {
      console.log('có');
      setServiceTotal(serviceTotal-price)
      mydivclass.classList.remove('text-white')
    }else{
      setServiceTotal(serviceTotal+price)
      console.log('khong');
      mydivclass.classList.add('text-white')
    }
  };
  const chauffeur_service = () => {
    console.log(chauffeurService);
    setChauffeurService(!chauffeurService);
  };
  const travel_insurance_service = () => {
    console.log(travelInsuranceService);
    setTravelInsuranceService(!travelInsuranceService);
  };
  return (
    <>
      <div className={`${formStep === 4 ? "block" : "hidden"}`}>
        <div className="app-modal-column-group app-modal-column-group-checkout">
          <div className="app-modal-column app-modal-column-checkout alternative-column">
            <div className="app-column-header no-margin">ORDER SUMMARY</div>
            <div className="table-container">
              <table className="flex-no-wrap my-5 flex w-full flex-row !justify-center rounded-lg sm:bg-white sm:shadow-lg">
                <thead className="text-white">
                  <tr className="bg-teal-400 flex-no wrap mb-2 flex flex-col rounded-l-lg sm:mb-0 sm:table-row sm:rounded-none">
                    <th className="p-3 text-left text-black dark:text-white border-s-fuchsia-500 dark:bg-[#1D2144]">Visa Type</th>
                    <th className="p-3 text-left text-black dark:text-white border-s-fuchsia-500 dark:bg-[#1D2144]">QTY</th>
                    <th className="p-3 text-left text-black dark:text-white border-s-fuchsia-500 dark:bg-[#1D2144]">Price</th>
                  </tr>
                </thead>
                <tbody className="sm:flex-none">
                  <tr className="flex-no wrap mb-2 flex flex-col sm:mb-0 sm:table-row">
                    <td className="border-s-fuchsia-500 dark:bg-[#1D2144] p-3">
                    {_new_register.product?.name}
                    </td>
                    <td className="truncate border-s-fuchsia-500 dark:bg-[#1D2144] p-3">
                    {_new_register.customers.length}
                    </td>
                    <td className="text-red-400 border-s-fuchsia-500 dark:bg-[#1D2144] p-3">
                      {currency == 'USD' ?sumery.toFixed(2):formatCurrencyV2(sumery.toString())} {currency == 'USD' ? 'USD':'VND'}
                    </td>
                  </tr>
                
                </tbody>
              </table>
              <div>Add to your order?</div>
              <div className="extra-services-wr">
                {
                  _new_serviceVisas.service?.rows.map((item,index)=>(
                    <>
                     <input className="input_express_service" id={`express_service_${index}`} type="checkbox" value={JSON.stringify(item)}/>
                          <label className="extra-service-card w-inline-block dark:bg-[#1D2144] express_service" htmlFor={`express_service_${index}`}>
                          <div key={index} className="relative h-[100%]" onClick={()=>express_service(item,event)}>
                            <div className="extra-service-card-header">
                                <div className="card-service-icon"></div>
                                <div >{currency == 'USD' ?(item?.price / exchange_rate).toFixed(2)  : formatCurrencyV2(item?.price.toString())} {currency == 'USD' ? 'USD':'VND'}</div>
                              </div>
                              <h1 className="card-header card-header-service">
                                {item?.name}
                              </h1>
                              <p className="card-para car-para-sm card-para-service">
                                {item?.desc_detail }
                              </p>
                          </div>
                          </label>
                    </>
                  ))
                }
              </div>
              <div>
                <div className="w-form">
                  <form className="ng-untouched ng-pristine ng-invalid">
                    <div className="input-group-coupon">
                      <div className="input-container-coupon">
                        <FormInput
                          className="coupon-code-field ng-untouched ng-pristine ng-invalid"
                          type="text"
                          placeholder="Referral or discount code?"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="dotted-line"></div>
              <div className="flex-row">
                <div className="table-header table-header-large">Total</div>
                <div className="table-header table-header-right table-header-large">
                { currency == 'USD' ? serviceTotal.toFixed(2):formatCurrencyV2(serviceTotal.toString())} {currency == 'USD' ? 'USD':'VND'}
                </div>
              </div>
            </div>
            <div className="app-modal-footer">
              <button className="bp-btn btn-modal-next w-button" disabled={active} onClick={handleSubmit}>
                PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Step5