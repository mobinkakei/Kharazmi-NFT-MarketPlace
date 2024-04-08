import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "درباره مـا",
      link: "aboutus",
    },
    {
      name: "تماس با مـا",
      link: "contactus",
    },
    {
      name: "ثبت نام",
      link: "signUp",
    },
    {
      name: "ورود",
      link: "login",
    },
    {
      name: "عضویت",
      link: "subscription",
    },
  ];
  return (
    <div className={Style.box}>
      {helpCenter.map((el, i) => (
        <div className={Style.helpCenter} key={i + 1}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default HelpCenter;
