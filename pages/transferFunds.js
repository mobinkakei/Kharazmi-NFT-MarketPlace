import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FaEthereum, FaUserAlt } from "react-icons/fa";

//INTERNAL IMPORT
import Style from "../styles/transferFunds.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from "../img";
import { Button, Loader } from "../components/componentsindex";

//IMPORT FROM CONTRACT DATA
import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";

const transferFunds = () => {
  const {
    currentAccount,
    transferEther,
    loading,
    accountBalance,
    transactions,
    getAllTransactions,
  } = useContext(NFTMarketplaceContext);
  const [transferAmount, setTransferAmount] = useState("");
  const [transferAccount, setTransferAccount] = useState("");
  const [message, setMessage] = useState("");
  const [readMessage, setReadMessage] = useState("");
  const [openBox, setOpenBox] = useState(false);

  // const transactions = [1, 2, 3, 4, 5, 67, 7];

  useEffect(() => {
    getAllTransactions();
  });
  return (
    <div className={Style.transfer}>
      <div className={Style.transfer_box}>
        <h1>انتقال دارایی</h1>
        <p>
         لطفا قبل از انتقال دارایی خود از آدرس کیف پول مطمئن شوید زیرا بعد از عملیات انتقال به هیچ وجه عملیات برگشت داده نخواهد شد. {" "}
        </p>
        <div className={Style.transfer_box_box}>
          <div className={Style.transfer_box_box_left}>
            <Image
              src={images.transfer}
              alt="images"
              width={400}
              height={400}
            />
          </div>
          <div className={Style.transfer_box_box_right}>
            <h2>شروع کنید</h2>
            <div className={Style.transfer_box_box_right_info}>
              <p className={Style.transfer_box_box_right_info_deskTop}>
                آدرس حساب: {currentAccount}
              </p>
              <p className={Style.transfer_box_box_right_info_mobile}>
                حساب {currentAccount.slice(1, 30)}..
              </p>
              <p>موجودی: {accountBalance} ETH</p>
            </div>

            {/* TRANSFER FIELDS */}
            <div className={Style.transfer_box_box_right_box}>
              <div className={formStyle.Form_box_input}>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <FaUserAlt />
                  </div>
                  <input
                    type="text"
                    placeholder="آدرس کیف پول*"
                    onChange={(e) => setTransferAccount(e.target.value)}
                  />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <div className={formStyle.Form_box_input_box}>
                  <div className={formStyle.Form_box_input_box_icon}>
                    <FaEthereum />
                  </div>
                  <input
                    type="number"
                    min={1}
                    placeholder="ETH"
                    onChange={(e) => setTransferAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className={formStyle.Form_box_input}>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="6"
                  placeholder="پیغام یادداشت های شما"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              {loading ? (
                <Loader />
              ) : (
                <Button
                  btnName="انتقال دارایی"
                  handleClick={() =>
                    transferEther(transferAccount, transferAmount, message)
                  }
                  classStyle={Style.button}
                />
              )}
            </div>
          </div>
        </div>

        {/* //TRANSACTION HISTORY */}
        <h1 className={Style.transfer_box_h1}>تاریخچه واریز و برداشت</h1>
        <p>
          در این قسمت شما می توانید از تاریخچه انتقال دارایی های خود آگاه باشید.
        </p>

        <div className={Style.transfer_box_history}>
          {transactions.map((el, i) => (
            <div className={Style.transfer_box_history_item} key={i + 1}>
              <Image
                src={images.transferEther}
                width={200}
                height={200}
                alt="image"
              />

              <div className={Style.transfer_box_history_item_info}>
                <p>
                  <span>شناسه انتقال:</span> #{i + 1} {el.timestamp}
                </p>
                <p>
                  <span>مقدار:</span> {el.amount}
                </p>
                <p>
                  <span>از:</span>
                  {el.addressFrom.slice(1, 15)}
                </p>
                <p>
                  <span>به حساب:</span> {el.addressTo.slice(1, 20)}
                </p>

                <Button
                  btnName="پیغام"
                  handleClick={() => (
                    setReadMessage(el.message), setOpenBox(true)
                  )}
                  classStyle={Style.readButton}
                />
              </div>
            </div>
          ))}
        </div>

        {openBox == false ? (
          ""
        ) : (
          <div className={Style.messageBox} onClick={() => setOpenBox(false)}>
            <div className={Style.messageBox_box}>
              <h1>پیغام تراکنش شما :</h1>
              <p className={Style.messageBox_box_para}>{readMessage}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default transferFunds;
