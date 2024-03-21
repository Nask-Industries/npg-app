import React from "react";
import Image from "../elements/Image";

const BankIcons = () => {
  return (
    <div className="bank-icons-container">
      <div className="bank-icon">
        <div className="bank-icon-inner">
          <div className="bank-icon-image">
            <Image
              src={require("./../../assets/images/itau.png")}
              alt={`Itaú`}
              width={40}
              height={40}
            />
          </div>
          <p>Itaú</p>
        </div>
      </div>
      <div className="bank-icon">
        <div className="bank-icon-inner">
          <div className="bank-icon-image">
            <Image
              src={require("./../../assets/images/bradesco.png")}
              alt={`Bradesco`}
              width={40}
              height={40}
            />
          </div>
          <p>Bradesco</p>
        </div>
      </div>
      <div className="bank-icon">
        <div className="bank-icon-inner">
          <div className="bank-icon-image">
            <Image
              src={require("./../../assets/images/caixa.png")}
              alt={`Caixa`}
              width={40}
              height={40}
            />
          </div>
          <p>Caixa</p>
        </div>
      </div>
      <div className="bank-icon">
        <div className="bank-icon-inner">
          <div className="bank-icon-image">
            <Image
              src={require("./../../assets/images/santander.png")}
              alt={`Santander`}
              width={40}
              height={40}
            />
          </div>
          <p>Santander</p>
        </div>
      </div>
      <div className="bank-icon">
        <div className="bank-icon-inner">
          <div className="bank-icon-image">
            <Image
              src={require("./../../assets/images/inter.png")}
              alt={`Inter`}
              width={40}
              height={40}
            />
          </div>
          <p>Inter</p>
        </div>
      </div>
    </div>
  );
};

export default BankIcons;
