import React from "react";
import classNames from "classnames";
import { SectionProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Timeline from "../elements/Timeline";
import TimelineItem from "../elements/TimelineItem";
import BankIcons from "../component/BankIcons";

const Roadmap = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const outerClasses = classNames(
    "roadmap section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "roadmap-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Priorizamos Você!",
    paragraph:
      "Com nossos bancos parceiros, garantimos que você encontrará as melhores condições para realizar seu financiamento.",
  };

  return (
    <section id="roadmap" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />

          <BankIcons />

          <Timeline>
            {[
              {
                title: "Primeira Etapa",
                description:
                  "Primeiro você deve entrar em contato conosco e explicar sua situação.",
              },
              {
                title: "Segunda Etapa",
                description:
                  "Nossa equipe irá analisar o seu caso e localizará os melhores financiamentos para o seu perfil.",
              },
              {
                title: "Terceira Etapa",
                description:
                  "Você escolherá dentre as opções, qual financiamento lhe agrada mais.",
              },
              {
                title: "Quarta Etapa",
                description:
                  "Com tudo pronto, o sonho da sua casa própria está realizado!",
              },
            ].map((item, index) => (
              <TimelineItem key={index} title={item.title}>
                {item.description}
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  );
};

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

Roadmap.propTypes = propTypes;
Roadmap.defaultProps = defaultProps;

export default Roadmap;
