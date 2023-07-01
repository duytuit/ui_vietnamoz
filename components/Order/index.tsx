"use client"
import { useState } from "react";
import FormOrder from "./form/formOrder";
import Step1 from "./input/step_1";
import Step2 from "./input/step_2";
import Step3 from "./input/step_3";

const Order = () => {
  const [formStep, setFormStep] = useState(0);

  const nextFormStep = () => setFormStep((currentStep) => currentStep + 1);

  const prevFormStep = () => setFormStep((currentStep) => currentStep - 1);
  return (
    <section id="pricing" className="relative pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="mb-8 mt-20 w-full md:mb-12 lg:mb-16">
          <h1 className="bp-h1 black dark:text-white">
            Let's get your Visa(s)
          </h1>
          <h1 className="bp-h1 bp-h1-grey flex justify-center dark:text-white">
            What's required to make this application?
          </h1>
        </div>
        <div className="mb-20 grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"></div>
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

        {formStep > 2}
      </FormOrder>
      </div>
    </section>
  );
};

export default Order;
