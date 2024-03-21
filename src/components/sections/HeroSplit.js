import React, { useState } from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";
import Image from "../elements/Image";
import Modal from "../elements/Modal";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

const HeroSplit = (props) => {
  const [videoModalActive, setVideoModalActive] = useState(false);

  const openVideoModal = (e) => {
    e.preventDefault();
    setVideoModalActive(true);
  };

  const closeVideoModal = (e) => {
    e.preventDefault();
    setVideoModalActive(false);
  };

  const {
    className,
    topOuterDivider,
    bottomOuterDivider,
    topDivider,
    bottomDivider,
    hasBgColor,
    invertColor,
    invertMobile,
    invertDesktop,
    alignTop,
    imageFill,
  } = props;

  const outerClasses = classNames(
    "hero section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const splitClasses = classNames(
    "split-wrap",
    invertMobile && "invert-mobile",
    invertDesktop && "invert-desktop",
    alignTop && "align-top"
  );

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <div className={splitClasses}>
            <div className="split-item">
              <div className="hero-content split-item-content center-content-mobile reveal-from-top">
                <h6 className="mt-0 mb-16">Uma nova maneira de financiar</h6>
                <h3 className="mt-0 mb-16" style={{ color: "#DCA85E" }}>
                  Encontre o financiamento ideal para a sua situação financeira
                </h3>
                <p className="mt-0 mb-32">
                  Com os nossos especialistas, garantimos as melhores condições
                  para você adquirir sua casa, apartamentos e mais!
                </p>
                <ButtonGroup>
                  <Button
                    tag="a"
                    color="primary"
                    href="/#features"
                    wideMobile
                  >
                    Conheça Nossos Serviços
                  </Button>
                </ButtonGroup>
              </div>
              <div className="hero-figure split-item-image split-item-image-fill illustration-element-01 reveal-from-bottom">
                <Image
                  src={require("./../../assets/images/hero-image.avif")}
                  alt="Hero"
                  width={528}
                  height={396}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
