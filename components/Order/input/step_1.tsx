"use client"
import { ContextType, useContext, useRef } from "react";
import FormInput from "@/components/Common/FormInput";
import { useOder } from "../context/orderContext";
import { Form } from "@unform/web";


const Step1=({ formStep, nextFormStep }) =>{
 const { setFormOrderValues } = useOder();
  const formRef = useRef();

  async function handleSubmit(data) {
     setFormOrderValues(data);
    nextFormStep();
  }

  return (
    // <div >
    //   <h2>Personal Info</h2>
    //   <Form ref={formRef} onSubmit={handleSubmit}>
    //     <div>
    //       <FormInput name="email" label="Email" type="email" />
    //     </div>
    //     <button type="submit">Next</button>
    //   </Form>
    // </div>
    <>
      <div className={`start-modal-wr ${formStep === 0 ? 'block' : 'hidden'}`}>
        <div className="ng-scrollbar">
          <div className="ng-scrollbar-wrapper">
            <div className="ng-scroll-viewport-wrapper">
              <div className="ng-scroll-offset ng-scroll-viewport">
                <div className="ng-scroll-content">
                  <div className="modal-wr-mobile">
                    <h1 className="bp-h1 text-black dark:text-white">Let's get your Visa(s)</h1>
                    <h1 className="bp-h1 bp-h1-grey">
                      What's required to make this application?
                    </h1>
                    <div className="modal-app-list lg:!flex-row">
                      <div className="modal-card dark:bg-[#1D2144] xss:w-auto lg:w-[24%]">
                        <div className="card-icon-modal"></div>
                        <h1 className="card-header card-sm-h">
                          Valid <br /> Passport
                        </h1>
                        <div className="card-line modal-line"></div>
                        <p className="card-para card-sm-para">
                          Clear passport scan or picture with minimum of 6
                          months validity.
                        </p>
                      </div>
                      <div className="modal-card dark:bg-[#1D2144] xss:w-auto lg:w-[24%]">
                        <div className="card-icon-modal person"></div>
                        <h1 className="card-header card-sm-h">
                          Picture /<br /> Headshot
                        </h1>
                        <div className="card-line modal-line"></div>
                        <p className="card-para card-sm-para">
                          Clear passport style color photo or a selfie with
                          white background.
                        </p>
                      </div>
                      <div className="modal-card dark:bg-[#1D2144] xss:w-auto lg:w-[24%]">
                        <div className="card-icon-modal details"></div>
                        <h1 className="card-header card-sm-h">
                          Personal <br /> Details
                        </h1>
                        <div className="card-line modal-line"></div>
                        <p className="card-para card-sm-para">
                          Name and contact details so we can facilitate your
                          application.
                        </p>
                      </div>
                      <div className="modal-card dark:bg-[#1D2144] xss:w-auto lg:w-[24%]">
                        <div className="card-icon-modal national-id"></div>
                        <h1 className="card-header card-sm-h">
                          Additional <br /> Documents
                        </h1>
                        <div className="card-line modal-line"></div>
                        <p className="card-para card-sm-para">
                          In some cases additional documents may be required.
                        </p>
                      </div>
                    </div>
                    <div className="modal-disclamer">
                      <h1 className="header-left header-left-margin">
                        Please confirm that you have read and agreed to the
                        following:
                      </h1>
                      <div className="checkbox-container">
                        <input id="disclamer-1" type="checkbox" />
                        <label className="label_disclamer_1 pl-9" htmlFor="disclamer-1">
                          The decision to grant or refuse the visa(s) is the
                          sole prerogative and at the sole discretion of
                          Government of UAE.
                        </label>
                      </div>
                      <div className="checkbox-container">
                        <input id="disclamer-2" type="checkbox" />
                        <label className="label_disclamer_2 pl-9" htmlFor="disclamer-2">
                          I hereby confirm that no active visa application is
                          currently under processing by another agent. This
                          could lead to a none refundable rejection of my visa
                          application.
                        </label>
                      </div>
                    </div>
                    <div className="start-modal-footer">
                      {/* <div className="start-modal-column info-column">
                        <div>
                          You may order up to 9 Visas in <br /> the same
                          application.
                        </div>
                      </div> */}
                        <button className="bp-btn btn-modal-next w-button" onClick={handleSubmit}>
                          Continue
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Step1