import React from "react";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
} from "react-icons/ti";
import { HiOutlineMail } from "react-icons/hi";

//INTERNAL IMPORT
import Style from "../styles/contactus.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import { Button } from "../components/componentsindex";

const contactus = () => {
  return (
    <div className={Style.contactus}>
      <div className={Style.contactus_box}>
        <h1>تـمـاس بـامـا</h1>
        <div className={Style.contactus_box_box}>
          <div className={Style.contactus_box_box_left}>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🗺 آدرس </h3>
              <p>
                کردستان، سقز
              </p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>💌 ایمیل</h3>
              <p>rezakakei8692@gmail.com</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>☎ شماره تماس</h3>
              <p>0918  465  1106</p>
            </div>
            <div className={Style.contactus_box_box_left_item}>
              <h3>🌏 فضای مجازی</h3>
              <a href="#">
                <TiSocialFacebook />
              </a>
              <a href="#">
                <TiSocialLinkedin />
              </a>
              <a href="#">
                <TiSocialInstagram />
              </a>
              <a href="#">
                <TiSocialYoutube />
              </a>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </div>
          </div>
          <div className={Style.contactus_box_box_right}>
            <form>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="name">نام و نام خانوادگی</label>
                <input
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className={formStyle.Form_box_input_userName}
                />
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="email">ایمیل</label>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <HiOutlineMail />
                  </div>
                  <input type="text" placeholder="ایمیل*" />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <label htmlFor="description">پیغام شما</label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="نظر شما برای بسیار ارزشمند و مهم است پس خوشحال میشویم پیام شما را بخوانیم"
                ></textarea>
              </div>
              <Button
                btnName="ارسال"
                handleClick={() => {}}
                classStyle={Style.button}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactus;
