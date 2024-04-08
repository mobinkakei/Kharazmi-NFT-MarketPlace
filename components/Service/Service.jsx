import React from "react";
import Image from "next/image";
import Style from "./Service.module.css";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>ابزار های پیشرفته</span>
          </p>
          <h3>فیلتر های جستجو و پیشنهاد قیمت</h3>
          <p>
            NFT مورد نظر را انتخاب کنید و به فروشنده قیمت پیشنهادی خود را اعلام کنید.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>امن و غیرمتمرکز</span>
          </p>
          <h3>استفاده از تکنولوژی امن و بروز</h3>
          <p>
          این وبسایت با استفاده از قرارداد های هوشمند داده های شما را بصورت Dappمحافظت می کند 
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>پروفایل پیشرفته</span>
          </p>
          <h3>کیف پول Web3</h3>
          <p>
            پروفایل کاربری پیشرفته با ظاهر جذاب و امکان اتصال با کیف پول های مختلف Web3
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>NFT های جذاب</span>
          </p>
          <h3>مجموعه مختلف NFT</h3>
          <p>
            در این وبسایت انواع NFT از جمله ویدیو، عکس و موسیقی پشتیبالنی می شود.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;