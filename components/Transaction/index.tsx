"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { convertObjToParam, formatCurrencyV2 } from "../Common/Utils/Helper";
import { render } from "@react-email/render";
import TemaplateEmail from "./templateEmail";
import { useRouter } from 'next/navigation'
import { fetchCreateReceipt } from "../Hero/api";

const TransactionResult = (props) => {
    const router = useRouter()
  const [show, setShow] = useState(false);
  const [showHtml, setshowHtml] = useState('');
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  let _register: any = localStorage.getItem("register");
  let _new_register = JSON.parse(_register);
  let _serviceVisas: any = localStorage.getItem("serviceVisas");
  let _new_serviceVisas = JSON.parse(_serviceVisas);
  useEffect(()=>{
    if(_new_register){
        const html = render(<TemaplateEmail bill={_new_register} />, {
            pretty: true,
          });
          setshowHtml(html);
    }
  },[])
  
  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: _new_register.data.bill.billCode,
            amount: {
              currency_code: "USD",
              value: 1// (_new_register.data.bill.cost / parseInt(_new_register.data.exchange_rate) ).toFixed(2) ,
            },
          },
        ],
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };

  // check Approval
  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };

  useEffect(() => {
      if (success) {
          alert("Payment successful!!");
          console.log('Order successful . Your order id is--', orderID);
          const param={
            projectId:_new_register.product.projectId
          }
          _new_register.templateEmail = showHtml
          const data={
            register:_new_register
          }
          fetchCreateReceipt(convertObjToParam(param),data)

          setTimeout(() => {
           // location.reload();
           router.push('/')
          }, 2000)
      }
  },[success]);
  return (
    <>
      <section className="relative mb-[120px] pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="mb-8 mt-12 w-full md:mb-12 lg:mb-16">
            <h1 className="bp-h1 black dark:text-white">Info Payment</h1>
          </div>
          <div className="container mx-auto flex flex-wrap px-2 py-4">
            <div className="h-full p-4 xss:w-full lg:block lg:w-2/3 lg:items-center lg:justify-center">
              <div dangerouslySetInnerHTML={{ __html: showHtml }}></div>
            </div>
            <div className="h-full p-4 xss:w-full lg:flex lg:w-1/3 lg:items-center lg:justify-center">
              {_new_register ? (
                <>
                  <PayPalScriptProvider
                    options={{
                      "client-id":
                        "AUt3DenD-IXkgW4T7uzdolPIhZVKSTgLE1Ws0nv0UN0pWgb5syjUivgzB8MMHYagu5Tm5a5eJ48cCszG",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={createOrder}
                        onApprove={onApprove}
                      />
                    </div>
                  </PayPalScriptProvider>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionResult;
