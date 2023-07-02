"use client"
import { useRef } from "react";
import { useOder } from "../context/orderContext";
import { Checkbox } from 'primereact/checkbox';  
import { Form } from "@unform/web";
const Step4=({ formStep, nextFormStep })=> {
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
          <div className={`${formStep === 3 ? 'block' : 'hidden'}`}>
            <div className="app-modal-body-header">
              <h1 className="modal-applicant-header">
                confirm or edit your order
              </h1>
              <h1 className="header-left">
                Order Total: <span className="order-total"> 0 USD </span>
              </h1>
            </div>
            <div className="app-modal-body">
              <div className="app-modal-column-group">
                <div className="app-modal-column">
                  <div className="app-column-header justified-left">
                    Change Visa Type?
                  </div>
                  <div className="select-visa-dropdown w-dropdown">
                    <div className="select-visa-toggle w-dropdown-toggle">
                      <div className="w-icon-dropdown-toggle"></div>
                      <div>
                        
                        96 hours transit visa - Single Visa Entry - USD 140
                      </div>
                    </div>
                    <nav className="select-visa-list w-dropdown-list">
                      <a className="select-visa-link w-dropdown-link ng-star-inserted">
                        
                        48 hours transit visa - Single Visa Entry - USD 100
                      </a>
                      <a className="select-visa-link w-dropdown-link ng-star-inserted">
                        
                        96 hours transit visa - Single Visa Entry - USD 140
                      </a>
                      <a className="select-visa-link w-dropdown-link ng-star-inserted">
                        
                        10 days - Single Visa Entry - USD 155
                      </a>
                      <a className="select-visa-link w-dropdown-link ng-star-inserted">
                        
                        30 days - Single Visa Entry - USD 180
                      </a>
                      <a className="select-visa-link w-dropdown-link ng-star-inserted">
                        
                        60 days - Single Visa Entry - USD 325
                      </a>
                      <a className="select-visa-link w-dropdown-link ng-star-inserted">
                        
                        30 days - Multiple Visa Entry - USD 390
                      </a>
                      <a className="select-visa-link w-dropdown-link ng-star-inserted">
                        
                        60 days - Multiple Visa Entry - USD 490
                      </a>
                    </nav>
                  </div>
                  <div className="card-header card-header-big ng-star-inserted">
                    You may add <span className="pink-text-large"> 9 </span>
                    <br />
                    more applicants
                  </div>
                  <button className="app-card app-add-applicant w-inline-block dark:bg-[#1D2144]">
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
            <button className="bp-btn btn-modal-next w-button" onClick={handleSubmit}>
                          Continue
                        </button>
            </div>
          </div>
    </>
  );
}
export default Step4