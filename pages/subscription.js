import React from "react";

//INTERNAL IMPORT
import Style from "../styles/subscription.module.css";
import Subscription from "../Subscription/Subscription";
const subscription = () => {
  const subscriptionArray = [
    {
      plan: "پـایـه",
      price: "$5",
      service: ["تخفیف کارمزد معاملاتی تا 50 درصد"],
      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "حرفه ای",
      price: "$15",
      service: [
        "ویژگی های پلن پایه",
        "ساخت 100 NFT رایگان",
            ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
    {
      plan: "ویژه",
      price: "$25",
      service: [
        "بدون کارمزد معاملاتی | تخفیف 100 درصدی",
        "ساخت 300 NFT رایگان",
      ],

      info: "Literally you probably haven't heard of them jean shorts.",
    },
  ];
  return (
    <div className={Style.Subscription}>
      <div className={Style.Subscription_box}>
        <div className={Style.Subscription_box_info}>
          <h1>💎 عضویت ویژه</h1>
          <p>با عضویت ویژه در سایت علاوه بر تخفیف کارمزد معاملاتی روزانه نامحدود  NFT بسازید.</p>
        </div>

        <div className={Style.Subscription_box_box}>
          {subscriptionArray.map((el, i) => (
            <Subscription key={i + 1} i={1} el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default subscription;
