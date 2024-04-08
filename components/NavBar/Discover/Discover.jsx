import React from "react";
import Link from "next/link";

//INTERNAL IMPORT
import Style from "./Discover.module.css";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "مجموعه ها",
      link: "collection",
    },
    {
      name: "جستجو",
      link: "searchPage",
    },
    {
      name: "کاربران",
      link: "author",
    },
    {
      name: "NFT اطلاعات",
      link: "NFT-details",
    },
    {
      name: "حساب کاربری",
      link: "account",
    },
    {
      name: "ساخت NFT",
      link: "uploadNFT",
    },
    {
      name: "اتصال کیف پول",
      link: "connectWallet",
    },
    {
      name: "بلاگ",
      link: "blog",
    },
  ];
  return (
    <div>
      {discover.map((el, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
