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
    <div>
      <h2>Personal Info</h2>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <FormInput name="email" label="Email" type="email" />
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}
export default Step1