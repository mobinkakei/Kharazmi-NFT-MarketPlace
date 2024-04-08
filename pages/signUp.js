import React from "react";

//INTERNAL IMPORT
import Style from "../styles/login.module.css";
import LoginAndSignUp from "../loginAndSignUp/loginAndSignUp";

const signUp = () => {
  return (
    <div className={Style.login}>
      <div className={Style.login_box}>
        <h1>نام نویسی | اختیاری</h1>
        <LoginAndSignUp />
        <p className={Style.login_box_para}>
          کاربر جدید هستی؟ <a href="#">ساخت حساب کاربری</a>
        </p>
      </div>
    </div>
  );
};

export default signUp;
