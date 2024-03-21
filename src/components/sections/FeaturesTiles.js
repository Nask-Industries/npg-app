import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "",
    paragraph: "",
  };

  return (
    <section id="features" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            {[
              {
                icon: require("./../../assets/images/feature-tile-icon-06.svg"),
                title: "Estamos Aqui por Você",
                content:
                  "Nossa equipe especializada irá analisar o seu caso e encontrar os melhores financiamentos com as melhores condições de pagamento.",
              },
              {
                icon: require("./../../assets/images/feature-tile-icon-04.svg"),
                title: "Eficiência e Eficácia",
                content:
                  "Levamos a sério os prazos estipulados. Sabemos a importância de realizar um trabalho de qualidade dentro do tempo combinado.",
              },
              {
                icon: require("./../../assets/images/feature-tile-icon-03.svg"),
                title: "Foco no Que Interessa",
                content:
                  "Com diversos clientes satisfeitos, atuamos sempre com o objetivo em atender suas expectativas e tornar os seus sonhos realidade.",
              },
              {
                icon: require("./../../assets/images/feature-tile-icon-02.svg"),
                title: "Taxas Reduzidas",
                content:
                  "Não cobramos taxas de corretagem. Isso significa que você terá um excelente serviço por um preço reduzido. Venha conhecer!",
              },
              {
                icon: require("./../../assets/images/feature-tile-icon-01.svg"),
                title: "Busca Avançada",
                content:
                  "Localizamos os melhores financiamentos em diversos bancos parceiros e selecionamos somente as melhores opções para você.",
              },
              {
                icon: require("./../../assets/images/feature-tile-icon-05.svg"),
                title: "Processo Transparente",
                content:
                  "Somos 100% transparentes em nossos processos. Os valores informados não contém letras miúdas nem surpresas indesejadas.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="tiles-item reveal-from-bottom"
                data-reveal-container=".tiles-wrap"
                data-reveal-delay={100 * index}
              >
                <div className="tiles-item-inner">
                  <div className="features-tiles-item-header">
                    <div className="features-tiles-item-image mb-16">
                      <Image
                        src={item.icon}
                        alt={`Features tile icon ${index + 1}`}
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>
                  <div className="features-tiles-item-content">
                    <h4 className="mt-0 mb-8">{item.title}</h4>
                    <p className="m-0 text-sm">{item.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
