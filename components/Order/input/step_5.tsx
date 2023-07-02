"use client"
import { useRef } from "react";
import { useOder } from "../context/orderContext";
import { Checkbox } from 'primereact/checkbox';  
import { Form } from "@unform/web";
import FormInput from "@/components/Common/FormInput";
const Step5=({ formStep, nextFormStep })=> {
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
          <div className={`${formStep === 4 ? 'block' : 'hidden'}`}>
            <div className="app-modal-column-group app-modal-column-group-checkout">
              <div className="app-modal-column app-modal-column-checkout alternative-column">
                <div className="app-column-header no-margin">ORDER SUMMARY</div>
                <div className="table-container">
                  <div className="flex-row">
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
                  </div>
                  <div>Add to your order?</div>
                  <div className="extra-services-wr">
                    <a className="extra-service-card w-inline-block dark:bg-[#1D2144]">
                      <div className="extra-service-card-header">
                        <div className="card-service-icon express-off"></div>
                        <div>0 USD</div>
                      </div>
                      <h1 className="card-header card-header-service">
                        Express Service
                      </h1>
                      <p className="card-para car-para-sm card-para-service">
                        Get your order
                        in 12 Hours
                      </p>
                    </a>
                    <a className="extra-service-card w-inline-block dark:bg-[#1D2144]">
                      <div className="extra-service-card-header">
                        <div className="card-service-icon chauffeur-off"></div>
                        <div>0 USD</div>
                      </div>
                      <h1 className="card-header card-header-service">
                        Airport Pickup
                      </h1>
                      <p className="card-para car-para-sm card-para-service">
                        Pre-book one way airport transfer from DXB airport to
                        anywhere in Dubai
                      </p>
                    </a>
                    <a className="extra-service-card w-inline-block dark:bg-[#1D2144]">
                      <div className="extra-service-card-header">
                        <div className="card-service-icon travel-insurance-off"></div>
                        <div>0 USD</div>
                      </div>
                      <h1 className="card-header card-header-service">
                        Travel Insurance
                      </h1>
                      <p className="card-para car-para-sm card-para-service">
                        Get travel insurance with your visa
                      </p>
                    </a>
                  </div>
                  <div>
                    <div className="w-form">
                      <form className="ng-untouched ng-pristine ng-invalid">
                        <div
                          className="input-group-coupon"
                        >
                          <div
                            className="input-container-coupon"
                          >
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
            confirm
                        </button>
            </div>
              </div>
            </div>
          </div>
    </>
  );
}
export default Step5