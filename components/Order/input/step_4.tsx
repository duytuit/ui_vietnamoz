"use client"
import { useRef, useState } from "react";
import Select,{ components } from "react-select";
const Step4=({ formStep, setNewCustomer,nextFormStep ,product,customer,register})=> {
  const formRef = useRef();
  async function handleSubmit(data) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    nextFormStep();
  }
  const createNewCustomer=()=>{
    document.getElementsByClassName("rs_passport")[0].innerHTML = '';
    document.getElementsByClassName("rs_photograph")[0].innerHTML = '';
    document.getElementsByClassName("rs_national_crad")[0].innerHTML = '';
    setNewCustomer(1);
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
    <>
      <div>
        <div className={`${formStep === 3 ? "block" : "hidden"}`}>
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
                <div className="card justify-content-center flex">
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
                <button
                  className="app-card app-add-applicant w-inline-block dark:bg-[#1D2144] lg:!w-[170px]"
                  onClick={createNewCustomer}
                >
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
            <button
              className="bp-btn btn-modal-next w-button"
              onClick={handleSubmit}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Step4