import React, { useEffect, useState, useContext } from "react";

//INTERNAL IMPORT
import Style from "../styles/upload-nft.module.css";
import { UploadNFT } from "../UploadNFT/uploadNFTIndex";

//SMART CONTRACT IMPORT
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const uploadNFT = () => {
  const { uploadToIPFS, createNFT } = useContext(NFTMarketplaceContext);
  return (
    <div className={Style.uploadNFT}>
      <div className={Style.uploadNFT_box}>
        <div className={Style.uploadNFT_box_heading}>
          <h1>ساخت NFT | مینت NFT طبق استاندارد ERC-721</h1>
          <p>
            شما می توانید که NFT خود را در هر قالبی که می خواهید آپلود کنید و بعد از آن از فروش اثر خود کسب درآمد کنید.😊
          </p>
        </div>

        <div className={Style.uploadNFT_box_title}>
          <h2>تصویر، ویدیو، موزیک یا فایل های 3 بعدی</h2>
          <p>
            فرمت های پشتیبانی شده: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
            GLB, GLTF. حداکثر حجم: 100 MB
          </p>
        </div>

        <div className={Style.uploadNFT_box_form}>
          <UploadNFT uploadToIPFS={uploadToIPFS} createNFT={createNFT} />
        </div>
      </div>
    </div>
  );
};

export default uploadNFT;
