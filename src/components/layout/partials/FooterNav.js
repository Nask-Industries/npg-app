import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <a
            href="#features"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            {" "}
            Diferenciais{" "}
          </a>
        </li>
        <li>
          <a
            href="#roadmap"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            Serviços
          </a>
        </li>
        <li>
          <a
            href="#news"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            Notícias
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="nav-link"
            style={{ textDecoration: "none" }}
          >
            Fale Conosco
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
