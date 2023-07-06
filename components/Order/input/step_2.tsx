"use client"
import { useRef } from "react";
import FormInput from "@/components/Common/FormInput";
import { useOder } from "../context/orderContext";
import { Form } from "@unform/web";

const Step2=({ formStep, nextFormStep }) =>{
    const { order,setFormOrderValues } = useOder();
  const formRef = useRef();

  async function handleSubmit(data) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
   setFormOrderValues(data);
    nextFormStep();
  }

  return (
    // <div >
    //   <h2>Billing Info</h2>

    //   <Form ref={formRef} onSubmit={handleSubmit}>
    //     <div>
    //       <FormInput name="address" label="Address" type="address" required />
    //     </div>
    //     <button type="submit">Next</button>
    //   </Form>
    // </div>
    <>
     {/* <Form ref={formRef} onSubmit={handleSubmit}> */}
      <div>{order.title}</div>
      <div className={`wizard-steps horizontal ${formStep === 1 ? 'block' : 'hidden'}`}>
        <div>
          <div>
            <div className="app-modal-body-wr app-modal-upload-wr">
              <div className="app-modal-body-header">
                <h1 className="modal-applicant-header xss:py-3 lg:py-0">Main Applicant</h1>
                <h1 className="header-left">
                  Order Total: <span className="order-total"> 140 USD </span>
                </h1>
              </div>
              <div className="app-modal-body">
                <h1 className="bp-h1">Please Upload the Following Documents</h1>
                <div className="app-modal-info">
                  <div>
                    Accepted Formats:
                    <span className="pink-text">PDF, JPG or PNG</span>
                  </div>
                  <div>
                    Maximum File Size:
                    <span className="pink-text">4 MB per upload</span>
                  </div>
                </div>
                <div className="app-modal-card-wr">
                  <input accept=".jpg,.png,.jpeg,.pdf" type="file" />
                  <a className="app-card w-inline-block dark:bg-[#1D2144]">
                    <div className="card-icon-modal ng-star-inserted"></div>
                    <h1 className="card-header">Passport</h1>
                    <div className="app-card-footer ng-star-inserted">
                      <div></div>
                      <div className="file-control-icon"></div>
                    </div>
                  </a>
                  <input accept=".jpg,.png,.jpeg" type="file" />
                  <a className="app-card w-inline-block dark:bg-[#1D2144]">
                    <div className="card-icon-modal person"></div>
                    <h1 className="card-header">Photograph</h1>
                    <div className="app-card-footer">
                      <div></div>
                      <div className="file-control-icon ng-star-inserted"></div>
                    </div>
                  </a>
                  <input accept=".jpg,.png,.jpeg,.pdf" type="file" />
                  <a className="app-card w-inline-block dark:bg-[#1D2144]">
                    <div className="card-icon-modal national-id ng-star-inserted"></div>
                    <h1 className="card-header">National ID</h1>
                    <div className="app-card-footer ng-star-inserted">
                      <div></div>
                      <div className="file-control-icon"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="app-modal-footer">
              <button className="bp-btn btn-modal-next w-button" onClick={handleSubmit}>
                          Continue
                        </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </Form> */}
    </>
  );
}
export default Step2