import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../../elements/Image";
import logo from "./../../../assets/images/npg-logo.jpg";

const Logo = ({ className, ...props }) => {
  const classes = classNames("brand", className);

  return (
    <div {...props} className={classes}>
      <h1 className="m-0">
        <Link to="/#">
          <Image
            style={{ borderRadius: "50%" }}
            src={logo}
            alt="Logo da NPG"
            width={42}
            height={42}
          />
        </Link>
      </h1>
    </div>
  );
};

export default Logo;
