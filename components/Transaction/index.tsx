"use client";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { formatCurrencyV2 } from "../Common/Utils/Helper";

const TransactionResult = (props) => {
  const param = useSearchParams();
  console.log("ket_qua", param.toString());
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  let _register: any = localStorage.getItem("register");
  let _new_register = JSON.parse(_register);
  let _serviceVisas: any = localStorage.getItem("serviceVisas");
  let _new_serviceVisas = JSON.parse(_serviceVisas);

  const currency = localStorage.getItem("currency");
  const exchange_rate = parseInt(localStorage.getItem("exchange_rate"));
  let sumery =
    (currency == "USD"
      ? _new_register.product.price / exchange_rate
      : _new_register.product.price) * _new_register.customers.length;

  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "Sunflower",
            amount: {
              currency_code: "USD",
              value: 20,
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
          location.reload();
      }
  },[success]);
  return (
    <>
      <section className="relative mb-[120px] pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="mb-8 mt-2 w-full md:mb-8 lg:mb-8">
            <h1 className="bp-h1 black dark:text-white">Info Payment</h1>
          </div>
          <div className="container mx-auto flex flex-wrap px-2 py-4">
            <div className="h-full p-4 xss:w-full lg:flex lg:w-2/3 lg:items-center lg:justify-center">
              <table className="flex-no-wrap flex w-full flex-row !justify-center rounded-lg sm:bg-white sm:shadow-lg">
                <thead className="text-white">
                  <tr className="bg-teal-400 flex-no wrap mb-2 flex flex-col rounded-l-lg sm:mb-0 sm:table-row sm:rounded-none">
                    <th className="border-s-fuchsia-500 p-3 text-left text-black dark:bg-[#1D2144] dark:text-white">
                      Visa Type
                    </th>
                    <th className="border-s-fuchsia-500 p-3 text-left text-black dark:bg-[#1D2144] dark:text-white">
                      QTY
                    </th>
                    <th className="border-s-fuchsia-500 p-3 text-left text-black dark:bg-[#1D2144] dark:text-white">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="sm:flex-none">
                  <tr className="flex-no wrap mb-2 flex flex-col sm:mb-0 sm:table-row">
                    <td className="border-s-fuchsia-500 p-3 dark:bg-[#1D2144]">
                      {_new_register.product?.name}
                    </td>
                    <td className="border-s-fuchsia-500 truncate p-3 dark:bg-[#1D2144]">
                      {_new_register.customers.length}
                    </td>
                    <td className="text-red-400 border-s-fuchsia-500 p-3 dark:bg-[#1D2144]">
                      {currency == "USD"
                        ? sumery.toFixed(2)
                        : formatCurrencyV2(sumery.toString())}{" "}
                      {currency == "USD" ? "USD" : "VND"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="h-full p-4 xss:w-full lg:flex lg:w-1/3 lg:items-center lg:justify-center">
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AUt3DenD-IXkgW4T7uzdolPIhZVKSTgLE1Ws0nv0UN0pWgb5syjUivgzB8MMHYagu5Tm5a5eJ48cCszG",
                }}
              >
                <div className="wrapper">
                  <PayPalButtons
                      style={{ layout: "vertical" }}
                      createOrder={createOrder}
                      onApprove={onApprove}
                    />
                </div>
              </PayPalScriptProvider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransactionResult;
