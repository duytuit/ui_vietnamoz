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
                    48 hours transit visa - Single Entry Visa
                    </td>
                    <td className="hover:bg-gray-100 truncate border-s-fuchsia-500 dark:bg-[#1D2144] p-3">
                      1
                    </td>
                    <td className="hover:bg-gray-100 text-red-400 hover:text-red-600 cursor-pointer border-s-fuchsia-500 dark:bg-[#1D2144] p-3 hover:font-medium">
                      100
                    </td>
                  </tr>
                
                </tbody>
              </table>
              <div>Add to your order?</div>
              <div className="extra-services-wr">
                <input id="express_service" type="checkbox" disabled/>
                <label className="extra-service-card w-inline-block dark:bg-[#1D2144]" htmlFor="express_service">
                  <div className="extra-service-card-header">
                    <div className="card-service-icon express-off"></div>
                    <div>0 USD</div>
                  </div>
                  <h1 className="card-header card-header-service">
                    Express Service
                  </h1>
                  <p className="card-para car-para-sm card-para-service">
                    Get your order in 12 Hours
                  </p>
                </label>
                <input id="chauffeur_service" type="checkbox" disabled/>
                <label className="extra-service-card w-inline-block dark:bg-[#1D2144]" htmlFor="chauffeur_service">
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
                </label>
                <input id="travel_insurance_service" type="checkbox" disabled/>
                <label className="extra-service-card w-inline-block dark:bg-[#1D2144]" htmlFor="travel_insurance_service">
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
                </label>
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