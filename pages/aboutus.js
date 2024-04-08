import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "مـبـیـن کـاکـه ای",
      position: "سازنده و توسعه دهنده",
      images: images.founder1,
    },
    {
      name: "آقای هاشمی نسب",
      position: "استاد راهنما",
      images: images.founder3,
    },
    {
      name: "آقای سماواتی",
      position: "استاد راهنما",
      images: images.founder3,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>درباره مــا 🙌</h1>
            <p>
              این وبسایت اولین صرافی غیر متمرکز معاملاتی ایـران است که با اهداف بلندی توسط مبین کاکه ای توسعه داده شده است و همچنین به عنوان یک کار خلاقانه با استفاده از نوآوری های روز در جشنواره خوارزمی ارائه داده شده است.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ سازندگان و استادان من</h2>
          <p>
            با تشکر از تمام استادان عـزیز و گرامی که مرا همراهی کردند.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={638}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
