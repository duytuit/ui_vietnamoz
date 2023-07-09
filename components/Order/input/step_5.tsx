"use client"
import { useRef, useState } from "react";
import { useOder } from "../context/orderContext";
import { Checkbox } from 'primereact/checkbox';  
import { Form } from "@unform/web";
import FormInput from "@/components/Common/FormInput";
import { formatCurrencyV2 } from "@/components/Common/Utils/Helper";
const Step5=({ formStep,setNewCustomer, nextFormStep ,product,customer,register})=> {
    const [isShowExpressService, setShowExpressService] = useState(false);
    const [chauffeurService, setChauffeurService] = useState(false);
    const [travelInsuranceService, setTravelInsuranceService] = useState(false);
    const formRef = useRef();

    async function handleSubmit(data) {
      console.log(data);
      nextFormStep();
    }
    let _register:any = localStorage.getItem('register')
    let _new_register = JSON.parse(_register)
    let _serviceVisas:any = localStorage.getItem('serviceVisas')
    let _new_serviceVisas = JSON.parse(_serviceVisas)
    // if(_register){
    //  const _new_register = JSON.parse(_register)
    //  _new_register.product =event
    //  localStorage.setItem('register',JSON.stringify(_new_register))
    // }else{
    //   register.product =event
    //   localStorage.setItem('register',JSON.stringify(register))
    // }
    const currency = localStorage.getItem('currency');
    const exchange_rate = parseInt( localStorage.getItem('exchange_rate'));
   let sumery = (currency == 'USD' ? (_new_register.product.price / exchange_rate)  : _new_register.product.price)
  const express_service = (event) => {
    const mydivclass = event.target.closest(".extra-service-card").querySelector('.relative') as HTMLElement;
    //const mydivclass = event.target.closest(".extra-service-card").querySelector('.card-service-icon');
    console.log(mydivclass);
    
    if(mydivclass.classList.contains('text-white')) {
      console.log('có');
      mydivclass.classList.remove('text-white')
    }else{
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
    <Form ref={formRef} onSubmit={handleSubmit}>
      <div className={`${formStep === 4 ? "block" : "hidden"}`}>
        <div className="app-modal-column-group app-modal-column-group-checkout">
          <div className="app-modal-column app-modal-column-checkout alternative-column">
            <div className="app-column-header no-margin">ORDER SUMMARY</div>
            <div className="table-container">
              {/* <div className="flex-row">
                    <div className="table-header">Visa Type</div>
                    <div className="table-header table-header-middle">QTY </div>
                    <div className="table-header table-header-right">Price</div>
                  </div>
                  <div className="flex-row">
                    <div className="table-text-left">
                      96 hours transit visa - Single Entry Visa
                    </div>
                    <div className="table-text-middle">0</div>
                    <div className="table-text-right">140 </div>
                  </div>
                  <div className="dotted-line"></div>
                  <div className="flex-row">
                    <div className="table-header">Subtotal</div>
                    <div className="table-header table-header-right">
                      
                      USD 0
                    </div>
                  </div> */}
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
                    <td className="hover:bg-gray-100 border-s-fuchsia-500 dark:bg-[#1D2144] p-3">
                    {_new_register.product?.name}
                    </td>
                    <td className="hover:bg-gray-100 truncate border-s-fuchsia-500 dark:bg-[#1D2144] p-3">
                    {_new_register.customers.length}
                    </td>
                    <td className="hover:bg-gray-100 text-red-400 hover:text-red-600 cursor-pointer border-s-fuchsia-500 dark:bg-[#1D2144] p-3 hover:font-medium">
                      {currency == 'USD' ?(sumery*_new_register.customers.length).toFixed(2):formatCurrencyV2((sumery*_new_register.customers.length).toString())} {currency == 'USD' ? 'USD':'VND'}
                    </td>
                  </tr>
                
                </tbody>
              </table>
              <div>Add to your order?</div>
              <div className="extra-services-wr">
                {
                  _new_serviceVisas.service?.rows.map((item,index)=>(
                    <>
                     <input key={index} id={`express_service_${index}`} type="checkbox"/>
                          <label key={index} className="extra-service-card w-inline-block dark:bg-[#1D2144] express_service" htmlFor={`express_service_${index}`}>
                          <div key={index} className="relative h-[100%]" onClick={express_service}>
                            <div className="extra-service-card-header">
                                <div className="card-service-icon"></div>
                                <div>{currency == 'USD' ?(item?.price / exchange_rate).toFixed(2)  : formatCurrencyV2(item?.price.toString())} {currency == 'USD' ? 'USD':'VND'}</div>
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
                  USD 0
                </div>
              </div>
            </div>
            <div className="app-modal-footer">
              <button className="bp-btn btn-modal-next w-button">
                PAYMENT
              </button>
            </div>
          </div>
        </div>
      </div>
      </Form>
    </>
  );
}
export default Step5