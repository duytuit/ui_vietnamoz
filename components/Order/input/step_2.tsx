"use client"
import { useRef } from "react";
import FormInput from "@/components/Common/FormInput";
import { useOder } from "../context/orderContext";
import { Form } from "@unform/web";

const Step2=({ formStep, nextFormStep }) =>{
    const { setFormOrderValues } = useOder();
  const formRef = useRef();

  async function handleSubmit(data) {
   setFormOrderValues(data);
    nextFormStep();
  }

  return (
    <div >
      <h2>Billing Info</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <FormInput name="address" label="Address" type="address" required />
        </div>
        <button type="submit">Next</button>
      </Form>
    </div>
  );
}
export default Step2