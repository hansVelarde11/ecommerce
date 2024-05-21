import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { PAYPAL_ID } from "../../constants/env";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const PaypalPayment = ({value,order}) => {

    
    const { state , dispatch } = useContext(CartContext)
    const nav = useNavigate()

  return (
    <PayPalScriptProvider options={{ "client-id": PAYPAL_ID }}>
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value
                },
                custom_id: order.id
              },
            ],
          });
        }}
        onApprove={(data, actions)=>{
            return actions.order.capture().then((resp)=>{
                if(resp.status === "COMPLETED"){
                    nav("/pago-exitoso")
                    dispatch({ type: "CLEAR_CART"});
                }else{
                    alert("tu pago no se procesó, intentar nuevamente")
                }
            })
        }}
      ></PayPalButtons>
    </PayPalScriptProvider>
  );
};
