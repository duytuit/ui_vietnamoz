"use client"
import { useRef } from "react";
import { useOder } from "../context/orderContext";
import { Checkbox } from 'primereact/checkbox';  
import { Form } from "@unform/web";
import FormInput from "@/components/Common/FormInput";
const Step3=({ formStep, nextFormStep })=> {
    const { setFormOrderValues } = useOder();
  const formRef = useRef();

  async function handleSubmit(data) {
   setFormOrderValues(data);
    nextFormStep();
  }

  return (
    // <div>
    //   <h2>Billing Info</h2>

    //   <Form ref={formRef} onSubmit={handleSubmit}>
    //     <div>
    //       <Checkbox name="kiểm tra" checked={false} />
    //       <div className="checkbox-container">
    //         <input id="disclamer-1" type="checkbox" className="hidden" />
    //         <label htmlFor="disclamer-1">
    //           The decision to grant or refuse the visa(s) is the sole
    //           prerogative and at the sole discretion of Government of UAE.
    //         </label>
    //       </div>
    //     </div>

    //     <button type="submit">Confirm purchase</button>
    //   </Form>
    // </div>
    <>
          <div className={`${formStep === 2 ? 'block' : 'hidden'}`}>
            <div className="app-modal-body-header">
              <h1 className="modal-applicant-header">Main Applicant</h1>
              <h1 className="header-left">
                Order Total: <span className="order-total"> 140 USD </span>
              </h1>
            </div>
            <div className="app-modal-body">
              <h1 className="bp-h1">Please Provide The Following Details</h1>
              <div className="app-modal-form-wr">
                <div className="w-form">
                  <form className="ng-untouched ng-pristine ng-invalid">
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-contact  ng-untouched ng-pristine ng-invalid"
                          placeholder="Contact Number including country code"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-email  ng-untouched ng-pristine ng-invalid"
                          pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$"
                          placeholder="Email Address"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-person  ng-untouched ng-pristine ng-invalid"
                          placeholder="First Name or any middle names"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-person  ng-untouched ng-pristine ng-invalid"
                          placeholder="Last Name"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-nationality  ng-untouched ng-pristine"
                          placeholder="Nationality"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-country  ng-untouched ng-pristine ng-valid"
                          placeholder="Country of Residence"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-passport  ng-untouched ng-pristine ng-invalid"
                          placeholder="Passport No"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-work  ng-untouched ng-pristine ng-invalid"
                          placeholder="Profession"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                    </div>
                    <div className="input-group">
                      <div className="input-container">
                        <FormInput
                          className="input-field input-calendar  ng-untouched ng-pristine ng-invalid"
                          pattern="^(0?[1-9]|[12][0-9]|3[01])[\/](0?[1-9]|1[012])[\/]\d{2}$"
                          placeholder="Travel Date: dd/mm/yy"
                          type="text"
                        />
                        <div className="error-text-wr"></div>
                      </div>
                      <div className="input-container-right">
                        <FormInput
                          className="input-field input-bag  ng-untouched ng-pristine ng-invalid"
                          placeholder="Purpose of Travel"
                          type="text"
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
                        />
                        <label htmlFor="visited-uae">
                          
                          Visited the UAE before
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="app-modal-footer">
            <button className="bp-btn btn-modal-next w-button" onClick={handleSubmit}>
                          Continue
                        </button>
            </div>
          </div>
    </>
  );
}
export default Step3