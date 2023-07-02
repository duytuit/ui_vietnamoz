import { useState, useContext, createContext, ContextType } from "react";

export interface Iorder {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

export type ContextOrderType = {
  orders: Iorder[];
  saveOrder: (order: Iorder) => void;
  updateOrder: (id: number) => void;
  setFormOrderValues: (values: Iorder) => void;
  order: Iorder;
};

const orderContextDefaultValues: ContextOrderType = {
  orders: [],
  saveOrder: () => {},
  updateOrder: () => {},
  setFormOrderValues: () => {},
  order: null,
};
export const orderContext = createContext<ContextOrderType>(orderContextDefaultValues);

const OrderProvider=({children}) =>{

  const [orders, setOrders] = useState<Iorder[]>([]);

  const [order, setOrder] = useState<Iorder| null>(null);

  const setFormOrderValues = (values:Iorder) => {
    setOrder((prevValues) => ({
      ...prevValues,
      ...values,
    }));
  };

  const saveOrder = (order: Iorder) => {
    const newOrder: Iorder = {
      id: Math.random(), // not really unique - but fine for this example
      title: order.title,
      description: order.description,
      status: false
    };
    setOrders([...orders, newOrder]);
  };

  const updateOrder = (id: number) => {
    orders.filter((order: Iorder) => {
      if (order.id === id) {
        order.status = true;
        setOrders([...orders]);
      }
    });
  };

  return (
    <orderContext.Provider value={{ order,orders, saveOrder, updateOrder,setFormOrderValues }}>
      {children}
    </orderContext.Provider>
  );
}
export default OrderProvider;
export const useOder = () => useContext(orderContext) as ContextOrderType;