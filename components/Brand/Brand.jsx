import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../../components/componentsindex.js";

const Brand = () => {
  const router = useRouter();
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          {/* <Image src={images.logo} alt="brand logo" width={100} height={100} /> */}
          <a href="/">
            <DiJqueryLogo className={Style.Brand_box_left_logo} />
          </a>
          <h1>اولین صرافی غیرمتمرکز NFT ایران</h1>
          <p>یک وبسایت خلاقانه برای معاملات امن NFT در بستر وب 3 برای کاربران ایرانی. ساخته شده توسط محمد مبین کاکه ای در جشنواره خوارزمی سال 1402</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="ساخت اولــین NFT"
              handleClick={() => router.push("/uploadNFT")}
            />
            <Button
              btnName="خــرید اولـیـن NFT"
              handleClick={() => router.push("/searchPage")}
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
