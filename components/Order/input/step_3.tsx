"use client"
import { useRef, useState } from "react";
import { Form } from "@unform/web";
import FormInput from "@/components/Common/FormInput";
import { Calendar } from "primereact/calendar";
import { formatCurrencyV2 } from "@/components/Common/Utils/Helper";
const Step3=({ formStep, setNewCustomer,nextFormStep ,product,customer,register})=> {
  const formRef = useRef();
  async function handleSubmit(data) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    let _register = localStorage.getItem('register')
    if(_register){
     const _new_register = JSON.parse(_register)
     _new_register.customers.push(customer)
     localStorage.setItem('register',JSON.stringify(_new_register))
    }else{
      register.customers.push(customer)
      localStorage.setItem('register',JSON.stringify(register))
    }
    nextFormStep();
  }
  const currency = localStorage.getItem('currency');
  const exchange_rate = parseInt( localStorage.getItem('exchange_rate'));
  return (
    <>
     <Form ref={formRef} onSubmit={handleSubmit}>
          <div className={`${formStep === 2 ? 'block' : 'hidden'}`}>
            <div className="app-modal-body-header">
              <h1 className="modal-applicant-header xss:py-3 lg:py-0">Main Applicant</h1>
              <h1 className="header-left">
                Order Total: <span className="order-total">  {currency == 'USD' ? (product.price / exchange_rate).toFixed(2)  : formatCurrencyV2(product.price.toString())} {currency == 'USD' ? 'USD':'VND'} </span>
              </h1>
            </div>
            <div className="app-modal-body">
              <h1 className="bp-h1">Please Provide The Following Details</h1>
              <div className="app-modal-form-wr">
                <div className="w-form">
                  <div className="ng-untouched ng-pristine ng-invalid">
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-contact  ng-untouched ng-pristine ng-invalid"
                          placeholder="Contact Number including country code" required label="Contact Number including country code"
                          type="text" onChange={(e) => { customer.phone = e.target.value }}   
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-email  ng-untouched ng-pristine ng-invalid"
                          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                          placeholder="Email Address" required label="Email Address"
                          type="email"  onChange={(e) => { customer.email= e.target.value} }  
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-person  ng-untouched ng-pristine ng-invalid"
                          placeholder="First Name or any middle names" required label="First Name"
                          type="text"  onChange={(e) => { customer.first_name= e.target.value} } 
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-person  ng-untouched ng-pristine ng-invalid"
                          placeholder="Last Name" required label="Last Name"
                          type="text" onChange={(e) => { customer.last_name= e.target.value} } 
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-nationality  ng-untouched ng-pristine"
                          placeholder="Nationality"
                          type="text" value={customer.national} onChange={(e) => { customer.national= e.target.value} } 
                          disabled
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-country  ng-untouched ng-pristine ng-valid"
                          placeholder="Country of Residence"
                          type="text" value={customer.country} onChange={(e) => { customer.country= e.target.value} } 
                          disabled
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-passport  ng-untouched ng-pristine ng-invalid"
                          placeholder="Passport No" required label="Passport No"
                          type="text"  onChange={(e) => { customer.passport_no= e.target.value} } 
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-work  ng-untouched ng-pristine ng-invalid"
                          placeholder="Profession" required label="Profession"
                          type="text"  onChange={(e) => { customer.profession= e.target.value} } 
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-calendar  ng-untouched ng-pristine ng-invalid"
                          pattern="^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{2}$"
                          placeholder="Travel Date: dd/mm/yy"  min="2017-04-01" max="2050-04-20"
                          type="date"  onChange={(e) => { customer.travel_date= e.target.value} } 
                        />
                        {/* <Calendar value="" onChange={(e) =>{ customer.travel_date= e.value} } dateFormat="dd/mm/yy" /> */}
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-bag  ng-untouched ng-pristine ng-invalid"
                          placeholder="Purpose of Travel" required label="Purpose of Travel"
                          type="text" onChange={(e) => { customer.purpose_of_travel= e.target.value} } 
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="checkbox-container">
                        <input
                          id="visited-uae"
                          type="checkbox"
                          className="ng-untouched ng-pristine ng-valid"
                          defaultChecked={customer.visited_vn} onChange={(e) => { customer.visited_vn= e.target.checked} } 
                        />
                        <label className="label_visited pl-9" htmlFor="visited-uae">
                          
                          Visited the VN before
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-modal-footer">
            <button className="bp-btn btn-modal-next w-button">
                          Continue
                        </button>
            </div>
          </div>
          </Form>
    </>
  );
}
export default Step3