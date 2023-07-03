"use client"
import { useState } from "react";
import FormOrder from "./form/formOrder";
import Step1 from "./input/step_1";
import Step2 from "./input/step_2";
import Step3 from "./input/step_3";
import Step4 from "./input/step_4";
import Step5 from "./input/step_5";

const Order = () => {
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);
  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  console.log(formStep);
  
  return (
    <section className="relative pt-6 md:pt-6 lg:pt-6">
      <div className="container">
        <div className="mb-8 mt-20 w-full md:mb-12 lg:mb-16">
          <section className="step-indicator xss:p-0 lg:py-0 lg:px-10">
            <div className={`step step1 ${formStep>=0 ? 'active_bar':''}`}>
              <div className="step-icon ">1</div>
              <p>Delivery</p>
            </div>
            <div className={`indicator-line ${formStep>=0 ? 'active_bar':''}`}></div>
            <div className={`step step2 ${formStep>=1 ? 'active_bar':''}`}>
              <div className="step-icon ">2</div>
              <p>Payment</p>
            </div>
            <div className={`indicator-line ${formStep>=1 ? 'active_bar':''}`}></div>
            <div className={`step step3 ${formStep>=2 ? 'active_bar':''}`}>
              <div className="step-icon ">3</div>
              <p>Confirmation</p>
            </div>
            <div className={`indicator-line ${formStep>=2 ? 'active_bar':''}`}></div>
            <div className={`step step4 ${formStep>=3 ? 'active_bar':''}`}>
              <div className="step-icon ">4</div>
              <p>Delivery</p>
            </div>
            <div className={`indicator-line ${formStep>=3 ? 'active_bar':''}`}></div>
            <div className={`step step5 ${formStep>=4 ? 'active_bar':''}`}>
              <div className="step-icon ">5</div>
              <p>Payment</p>
            </div>
          </section>
        </div>
        <div className="mb-20 mx-8">
          <FormOrder currentStep={formStep} prevFormStep={prevFormStep}>
            {formStep >= 0 && (
              <Step1 formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 1 && (
              <Step2 formStep={formStep} nextFormStep={nextFormStep} />
            )}
            {formStep >= 2 && (
              <Step3 formStep={formStep} nextFormStep={nextFormStep} />
            )}
             {formStep >= 3 && (
              <Step4 formStep={formStep} nextFormStep={nextFormStep} />
            )}
             {formStep >= 4 && (
              <Step5 formStep={formStep} nextFormStep={nextFormStep} />
            )}

            {formStep > 4}
          </FormOrder>
        </div>
      </div>
    </section>
  );
};

export default Order;
