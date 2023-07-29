"use client";
import { formatCurrencyV2 } from "@/components/Common/Utils/Helper";
import { useEffect, useMemo, useRef, useState } from "react";
import Select, { components } from "react-select";
const Step4 = ({
  formStep,
  setNewCustomer,
  nextFormStep,
  product,
  customer,
  register,
}) => {
  const [productDetail, setProductDetail] = useState<any>();
  const formRef = useRef();
  async function handleSubmit(data) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    nextFormStep();
  }

  const createNewCustomer = () => {
    document.getElementsByClassName("rs_passport")[0].innerHTML = "";
    document.getElementsByClassName("rs_photograph")[0].innerHTML = "";
    document.getElementsByClassName("rs_national_crad")[0].innerHTML = "";
    setNewCustomer(1);
  };
  const serviceVisas = localStorage.getItem("serviceVisas");
  let products = null;
  if (serviceVisas) {
    const _serviceVisas = JSON.parse(serviceVisas);
    products = _serviceVisas.product.rows;
  }
  const customStyles = {
    indicatorSeparator: () => ({ display: "none" }),
  };
  const currency = localStorage.getItem("currency");
  const exchange_rate = parseInt(localStorage.getItem("exchange_rate"));
  const getProduct = (event) => {
    setProductDetail(event);
    let _register = localStorage.getItem('register')
    if(_register){
     const _new_register = JSON.parse(_register)
     _new_register.product =event
     localStorage.setItem('register',JSON.stringify(_new_register))
    }else{
      register.product =event
      localStorage.setItem('register',JSON.stringify(register))
    }
  };
  const vsdfdsfs = localStorage.getItem("register");
  let list_custumers=null;
  if (vsdfdsfs) {
    const _register = JSON.parse(vsdfdsfs);
    if (_register.customers.length > 0) {
      list_custumers = _register.customers
    }
  }
  return (
    <>
      <div>
        <div className={`${formStep === 3 ? "block" : "hidden"}`}>
          <div className="app-modal-body-header xss:flex-col lg:flex-row">
            <h1 className="modal-applicant-header xss:py-3 lg:py-0">
              confirm or edit your order
            </h1>
            <h1 className="header-left">
              Order Total:{" "}
              <span className="order-total">
                {" "}
                {currency == "USD"
                  ?  (
                      productDetail
                        ? (productDetail.price / exchange_rate).toFixed(2)
                        : (product?.price / exchange_rate).toFixed(2)
                    )
                  : productDetail
                  ? formatCurrencyV2(productDetail.price.toString())
                  : formatCurrencyV2(product?.price.toString())}{" "}
                {currency == "USD" ? "USD" : "VND"}
              </span>
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
                    defaultValue={product}
                    options={products}
                    getOptionLabel={(option) => `${option.name}`}
                    getOptionValue={(option) => `${option.id}`}
                    styles={customStyles}
                    placeholder={"Enter your nationality to begin"}
                    className="w-[270px]"
                    onChange={getProduct}
                  />
                </div>
                <div className="card-header card-header-big ng-star-inserted py-[10px]"></div>
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
                <div className="app-column-header">The applicants details?</div>
                <div className="list_applicants">
                  {list_custumers
                    ? list_custumers.map((item, index) => (
                        <>
                          <div key={index} className="applicants-avatars">
                            <a className="edit-applicant-card w-inline-block ng-star-inserted">
                              <div
                                className="applicant-avatar ng-star-inserted"
                                style={{
                                  backgroundImage: `url(${ process.env.UPLOAD_CDN}${item.avatar})`,
                                }}
                              ></div>
                              <h1 className="applicant-avatar-name">
                                {item.first_name} <br /> {item.last_name}
                              </h1>
                            </a>
                          </div>
                        </>
                      ))
                    : ""}
                </div>
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
};
export default Step4;
