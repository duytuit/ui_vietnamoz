"use client";
import { useEffect, useMemo, useState } from "react";
import FormOrder from "./form/formOrder";
import Step1 from "./input/step_1";
import Step2 from "./input/step_2";
import Step3 from "./input/step_3";
import Step4 from "./input/step_4";
import Step5 from "./input/step_5";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchProduct } from "../Hero/api";
import { Router } from "next/router";
import { toast } from "react-toastify";
//check for Navigation Timing API support
// if (window.performance) {
//   console.info("window.performance works fine on this browser");
// }
if (performance?.navigation?.type == performance?.navigation?.TYPE_RELOAD) {
  console.info( "This page is reloaded" );
  if (typeof window !== 'undefined') {
    localStorage.removeItem('register')
  }
 
} else {
  console.info( "This page is not reloaded");
}
if (typeof document !== 'undefined') {
  document.addEventListener("beforeunload", function (e) {      
    if (typeof window !== 'undefined') {
      localStorage.removeItem('register')
    }  
  });
}

export interface RegisterType {
  customers: CustomerType[];
  services: any;
  product: any;
}
export interface CustomerType {
  country_id? :number,
  country? :string,
  desc_detail?:string,
  email?:string,
  first_name?:string,
  full_name?:string,
  identity_card?:string,
  last_name?:string,
  national_id?:number,
  national?:string,
  passport_no?:string,
  phone?:string,
  profession?:string,
  type?:number,
  visited_vn:false,
  travel_date:string,
  purpose_of_travel:string,
  passport_image?:string,
  identity_card_image:string,
  avatar?:string,
}
const Order = () => {
  let national=null
  if (typeof window !== 'undefined') {
     national = JSON.parse(localStorage.getItem('national')) 
  } 
  const [formStep, setFormStep] = useState(0);
  const [product, setProduct] = useState({});
  const [customer, setCustomer] = useState({
    country_id:782,
    country:'Vietnam',
    national_id:national.categoryId,
    national:national.name, 
  });
  const [register, setRegister] = useState<RegisterType>({
    customers: [],
    services: null,
    product: null,
  });
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  const setNewCustomer = (value) => setFormStep(value);
  const param = useSearchParams();
  const router = useRouter();
  useMemo(async () => {
    const productId = param.get("productId");
    const product = await fetchProduct(productId);
    if (product.data == null) {
      toast("Data not found.", {
        hideProgressBar: true,
        autoClose: 3000,
        type: "warning",
      });
      router.push("/");
    }
    setProduct(product);
   
  }, []);
  console.log(register);
  console.log(customer);
  
  return (
    <section className="relative pt-6 md:pt-6 lg:pt-6">
      <div className="container">
        <div className="mb-8 mt-20 w-full md:mb-12 lg:mb-16">
          <section className="step-indicator xss:p-0 lg:py-0 lg:px-10">
            <div className={`step step1 ${formStep>=0 ? 'active_bar':''}`}>
              <div className="step-icon ">1</div>
              <p>Delivery</p>
            </div>
            <div className={`indicator-line ${formStep>=0 ? 'active_bar':''}`}></div>
            <div className={`step step2 ${formStep>=1 ? 'active_bar':''}`}>
              <div className="step-icon ">2</div>
              <p>Documents</p>
            </div>
            <div className={`indicator-line ${formStep>=1 ? 'active_bar':''}`}></div>
            <div className={`step step3 ${formStep>=2 ? 'active_bar':''}`}>
              <div className="step-icon ">3</div>
              <p>Details</p>
            </div>
            <div className={`indicator-line ${formStep>=2 ? 'active_bar':''}`}></div>
            <div className={`step step4 ${formStep>=3 ? 'active_bar':''}`}>
              <div className="step-icon ">4</div>
              <p>Confirm</p>
            </div>
            <div className={`indicator-line ${formStep>=3 ? 'active_bar':''}`}></div>
            <div className={`step step5 ${formStep>=4 ? 'active_bar':''}`}>
              <div className="step-icon ">5</div>
              <p>Checkout</p>
            </div>
          </section>
        </div>
        <div className="mb-20 mx-8">
          <FormOrder currentStep={formStep} prevFormStep={prevFormStep}>
            {formStep >= 0 && (
              <Step1 formStep={formStep} nextFormStep={nextFormStep} setNewCustomer={setNewCustomer} product={product} customer={customer} register={register}/>
            )}
            {formStep >= 1 && (
              <Step2 formStep={formStep} nextFormStep={nextFormStep} setNewCustomer={setNewCustomer} product={product} customer={customer} register={register}/>
            )}
            {formStep >= 2 && (
              <Step3 formStep={formStep} nextFormStep={nextFormStep} setNewCustomer={setNewCustomer} product={product} customer={customer} register={register}/>
            )}
             {formStep >= 3 && (
              <Step4 formStep={formStep} nextFormStep={nextFormStep} setNewCustomer={setNewCustomer} product={product} customer={customer} register={register}/>
            )}
             {formStep >= 4 && (
              <Step5 formStep={formStep} nextFormStep={nextFormStep} setNewCustomer={setNewCustomer} product={product} customer={customer} register={register}/>
            )}

            {formStep > 4}
          </FormOrder>
        </div>
      </div>
    </section>
  );
};

export default Order;
