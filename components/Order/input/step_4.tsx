"use client"
import { useRef, useState } from "react";
import { useOder } from "../context/orderContext";
import { Checkbox } from 'primereact/checkbox';  
import { Form } from "@unform/web";
import { Button } from "primereact/button";
import { countries } from "@/components/Common/Utils/countries";
import Select,{ components } from "react-select";
const Step4=({ formStep, nextFormStep })=> {
  const { setFormOrderValues } = useOder();
  const formRef = useRef();

  async function handleSubmit(data) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
   setFormOrderValues(data);
    nextFormStep();
  }
 const countries = [
    {
      value: "AL",
      label: "Albania",
    },
    {
      value: "DZ",
      label: "Algeria",
    },
    {
      value: "AS",
      label: "American Samoa",
    },
    {
      value: "AD",
      label: "Andorra",
    },
    {
      value: "AO",
      label: "Angola",
    },
  ];
  const customStyles = {
    indicatorSeparator: () => ({ display: "none" }),
  };
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
       <Form ref={formRef} onSubmit={handleSubmit}>
          <div className={`${formStep === 3 ? 'block' : 'hidden'}`}>
            <div className="app-modal-body-header xss:flex-col lg:flex-row">
              <h1 className="modal-applicant-header xss:py-3 lg:py-0">
                confirm or edit your order
              </h1>
              <h1 className="header-left">
                Order Total: <span className="order-total"> 0 USD </span>
              </h1>
            </div>
            <div className="app-modal-body">
              <div className="app-modal-column-group">
                <div className="app-modal-column">
                  <div className="app-column-header justified-left xss:m-0">
                    Change Visa Type?
                  </div>
                  <div className="card flex justify-content-center">
                  <Select
                    options={countries}
                    styles={customStyles}
                    placeholder={"Enter your nationality to begin"}
                    className="w-[270px]"
                  />
             </div>
       
                  <div className="card-header card-header-big ng-star-inserted py-[10px]">
                    You may add <span className="pink-text-large"> 9 </span>
                    <br />
                    more applicants
                  </div>
                  <button className="app-card app-add-applicant w-inline-block dark:bg-[#1D2144] lg:!w-[170px]">
                    <div className="card-icon-modal add-applicant ng-star-inserted"></div>
                    <span className="ng-star-inserted">
                      <h1 className="card-header">
                        Add Another <br />
                        Applicant?
                      </h1>
                    </span>
                  </button>
                </div>
                <div className="app-modal-column">
                  <div className="app-column-header">
                    Review or edit the applicants details?
                  </div>
                  <div className="applicants-avatars"></div>
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
export default Step4