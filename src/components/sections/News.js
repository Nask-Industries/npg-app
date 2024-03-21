import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const News = ({
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
    "news section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "news-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames("tiles-wrap", pushLeft && "push-left");

  const sectionHeader = {
    title: "Notícias e Atualizações",
    paragraph:
      "Veja as ultimas novidades e atualizações. Aqui você irá se manter informado sobre as ultimas tendências de mercados.",
  };

  return (
    <section id="news" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader
            data={sectionHeader}
            className="center-content reveal-from-bottom"
          />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner has-shadow">
                <figure className="news-item-image m-0">
                  <Image
                    src={require("./../../assets/images/juros.jpg")}
                    alt="News 01"
                    width={344}
                    height={194}
                  />
                </figure>
                <div className="news-item-content">
                  <div className="news-item-body">
                    <h3 className="news-item-title h4 mt-0 mb-8">
                      <a href="#">
                        Entendendo os Juros Imobiliários no Brasil
                      </a>
                    </h3>
                    <p className="mb-16 text-sm">
                      Os juros imobiliários têm um papel crucial no mercado de
                      habitação de qualquer país, e o Brasil não é exceção.
                      Compreender os mecanismos por trás dos juros imobiliários
                      é essencial para quem busca adquirir propriedades,
                      investir no mercado imobiliário ou entender as tendências
                      econômicas do país.
                    </p>
                  </div>
                  <div className="news-item-more text-xs mb-8">
                    <a href="#"> Leia Mais</a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="200"
            >
              <div className="tiles-item-inner has-shadow">
                <figure className="news-item-image m-0">
                  <Image
                    src={require("./../../assets/images/news-image-02.jpg")}
                    alt="News 02"
                    width={344}
                    height={194}
                  />
                </figure>
                <div className="news-item-content">
                  <div className="news-item-body">
                    <h3 className="news-item-title h4 mt-0 mb-8">
                      <a href="#">Entendendo a Taxa SELIC</a>
                    </h3>
                    <p className="mb-16 text-sm">
                      A Taxa SELIC é um dos indicadores econômicos mais
                      importantes do Brasil, com um impacto significativo em
                      diversos aspectos da economia do país. Neste artigo,
                      exploraremos em detalhes o que é a Taxa SELIC, como ela é
                      determinada, seu papel na economia brasileira e suas
                      implicações para os consumidores, investidores e políticas
                      governamentais.
                    </p>
                  </div>
                  <div className="news-item-more text-xs mb-8">
                    <a href="#">Leia Mais</a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner has-shadow">
                <figure className="news-item-image m-0">
                  <Image
                    src={require("./../../assets/images/imobiliario.jpg")}
                    alt="News 03"
                    width={344}
                    height={194}
                  />
                </figure>
                <div className="news-item-content">
                  <div className="news-item-body">
                    <h3 className="news-item-title h4 mt-0 mb-8">
                      <a href="#">
                        Financiamentos Imobiliários
                      </a>
                    </h3>
                    <p className="mb-16 text-sm">
                      O sonho da casa própria é uma aspiração comum para muitas
                      pessoas. No entanto, para a maioria, comprar uma casa
                      requer uma quantia significativa de dinheiro. É aí que
                      entram os financiamentos imobiliários, uma ferramenta
                      fundamental que permite às pessoas adquirir propriedades
                      através de empréstimos bancários.
                    </p>
                  </div>
                  <div className="news-item-more text-xs mb-8">
                    <a href="#"> Leia Mais</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

News.propTypes = {
  ...SectionTilesProps.types,
};

News.defaultProps = {
  ...SectionTilesProps.defaults,
};

export default News;
