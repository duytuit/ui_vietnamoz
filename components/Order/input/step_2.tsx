"use client"
import { useRef, useState } from "react";
import FormInput from "@/components/Common/FormInput";
import { useOder } from "../context/orderContext";
import { Form } from "@unform/web";
import { uploadFile } from "@/components/Hero/api";
import { toast } from "react-toastify";
import { CustomerType } from "../index";

const Step2=({ formStep, setNewCustomer,nextFormStep ,product,customer,register}) =>{
  const [imagePassport, setimagePassport] = useState(false);
  const [imagePhotograph, setimagePhotograph] = useState(false);
  const [imageNationalCrad, setimageNationalCrad] = useState(false);
   
  const formRef = useRef();
  async function handleSubmit(data) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    nextFormStep();
  }
  const currency = localStorage.getItem('currency');
  const exchange_rate = parseInt( localStorage.getItem('exchange_rate'));

  const uploadPassport = async (event)=>{
    const files = {
      files: event.target.files[0]
    }
    const rs_upload = await uploadFile({files})
    if(rs_upload.data != null){
      setimagePassport(true)
        toast('upload complete.', { hideProgressBar: true, autoClose: 3000, type: 'success' })
        const fileName = rs_upload.data[0].fileName;
        customer.passport_image = rs_upload.data[0].externalLink.replace("public", "")
        document.getElementsByClassName("rs_passport")[0].innerHTML = fileName;
        // document.getElementsByName("passport")[0].setAttribute('value',rs_upload.data[0].fileName);
    }
  }
  const uploadPhotograph=async(event)=>{
    const files = {
      files: event.target.files[0]
    }
    const rs_upload = await uploadFile({files})
    if(rs_upload.data != null){
      setimagePhotograph(true)
        toast('upload complete.', { hideProgressBar: true, autoClose: 3000, type: 'success' })
        const fileName = rs_upload.data[0].fileName;
        customer.avatar = rs_upload.data[0].externalLink.replace("public", "")
        document.getElementsByClassName("rs_photograph")[0].innerHTML = fileName;
     
        // document.getElementsByName("passport")[0].setAttribute('value',rs_upload.data[0].fileName);
    }
  }
  const uploadNationalCrad=async(event)=>{
    const files = {
      files: event.target.files[0]
    }
    const rs_upload = await uploadFile({files})
    if(rs_upload.data != null){
      setimageNationalCrad(true)
        toast('upload complete.', { hideProgressBar: true, autoClose: 3000, type: 'success' })
        const fileName = rs_upload.data[0].fileName;
        customer.identity_card_image = rs_upload.data[0].externalLink.replace("public", "")
        document.getElementsByClassName("rs_national_crad")[0].innerHTML = fileName;
        // document.getElementsByName("passport")[0].setAttribute('value',rs_upload.data[0].fileName);
    }
  }
  return (
    <>
     <Form ref={formRef} onSubmit={handleSubmit}>
      <div className={`wizard-steps horizontal ${formStep === 1 ? 'block' : 'hidden'}`}>
        <div>
          <div>
            <div className="app-modal-body-wr app-modal-upload-wr">
              <div className="app-modal-body-header">
                <h1 className="modal-applicant-header xss:py-3 lg:py-0">Main Applicant</h1>
                <h1 className="header-left">
                  Order Total: <span className="order-total">  {currency == 'USD' ?Math.round(product.price / exchange_rate)  : product.price} {currency == 'USD' ? 'USD':'VND'} </span>
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
                  <input id="passport" accept=".jpg,.png,.jpeg,.pdf" onChange={uploadPassport} type="file" />
                  <input name="passport" type="hidden" />
                  <label htmlFor="passport"  className="app-card w-inline-block dark:bg-[#1D2144]">
                    <div className="card-icon-modal ng-star-inserted"></div>
                    <h1 className="card-header">Passport</h1>
                    <div className="app-card-footer ng-star-inserted">
                    <div className="rs_passport"></div>
                      <div className="file-control-icon"></div>
                    </div>
                  </label>
                  <input id="photograph" accept=".jpg,.png,.jpeg" type="file" onChange={uploadPhotograph} />
                  <input name="photograph" type="hidden" />
                  <label htmlFor="photograph" className="app-card w-inline-block dark:bg-[#1D2144]">
                    <div className="card-icon-modal person"></div>
                    <h1 className="card-header">Photograph</h1>
                    <div className="app-card-footer">
                    <div className="rs_photograph"></div>
                      <div className="file-control-icon ng-star-inserted"></div>
                    </div>
                  </label>
                  <input id="national_crad" accept=".jpg,.png,.jpeg,.pdf" onChange={uploadNationalCrad} type="file" />
                  <input name="photograph" type="hidden" />
                  <label htmlFor="national_crad" className="app-card w-inline-block dark:bg-[#1D2144]">
                    <div className="card-icon-modal national-id ng-star-inserted"></div>
                    <h1 className="card-header">National ID</h1>
                    <div className="app-card-footer ng-star-inserted">
                    <div className="rs_national_crad"></div>
                      <div className="file-control-icon"></div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="app-modal-footer">
                {
                  imagePassport &&
                  imagePhotograph &&
                  imageNationalCrad ? (
                    <button className="bp-btn btn-modal-next w-button">
                    Continue
                  </button>
                  ) : ('')
                }
              </div>
            </div>
          </div>
        </div>
      </div>
      </Form>
    </>
  );
}
export default Step2