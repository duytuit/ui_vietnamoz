"use client"
import { useRef } from "react";
import { useOder } from "../context/orderContext";
import { Checkbox } from 'primereact/checkbox';  
import { Form } from "@unform/web";
const Step3=({ formStep, nextFormStep })=> {
    const { setFormOrderValues } = useOder();
  const formRef = useRef();

  async function handleSubmit(data) {
   setFormOrderValues(data);
    nextFormStep();
  }

  return (
    <div>
      <h2>Billing Info</h2>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <Checkbox name="kiểm tra" checked={false} />
          <div className="checkbox-container">
            <input id="disclamer-1" type="checkbox" className="hidden" />
            <label htmlFor="disclamer-1">
              The decision to grant or refuse the visa(s) is the sole
              prerogative and at the sole discretion of Government of UAE.
            </label>
          </div>
        </div>

        <button type="submit">Confirm purchase</button>
      </Form>
    </div>
  );
}
export default Step3