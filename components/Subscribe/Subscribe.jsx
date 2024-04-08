import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Subscribe.module.css";
import images from "../../img";

const Subscribe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscribe_box_left}>
          <h2>این فرصت را از دست ندهید.</h2>
          <p>
            با ثبت نام در این صرافی غیر مترمرکز، امنیت دارایی های دیجیتال خود را تامین کنید و از فرصت های معاملاتی سودآور بهره مند شوید.
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>1</span>
            <small>به کیف پول خود وصل شوید و ثبت نام کنید.</small>
          </div>

          <div className={Style.subscribe_box_left_box}>
            <span>2</span>
            <small>با خیال راحت خرید و فروش کنید و کسب درآمد کنید.</small>
          </div>

          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="ایمیل خود را وارد کنید..." />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
