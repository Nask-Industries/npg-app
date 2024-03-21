import React, { useCallback, useState } from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Input from "../elements/Input";
import Button from "../elements/Button";
import useEmail from "../../hooks/useEmail";

const Contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const { postRequest, isLoading } = useEmail();
  const [messageObject, setMessageObject] = useState({
    name: "",
    email: "",
    text: "",
  });

  const outerClasses = classNames(
    "contact section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "contact-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const sectionHeader = {
    title: "Simples e Sem Complicações",
    paragraph:
      "Preencha o formulário abaixo que nossa equipe de especialistas entrará em contato.",
  };

  const changeHandler = useCallback(
    (e) => {
      setMessageObject({
        ...messageObject,
        [e.target.name]: e.target.value,
      });
    },
    [messageObject, setMessageObject]
  );

  const sendEmail = useCallback(
    (e) => {
      e.preventDefault();
      postRequest("/email", {
        from: {
          email: "info@trial-zr6ke4nex2v4on12.mlsender.net",
        },
        to: [
          {
            email: messageObject.email,
          },
        ],
        subject: `Contato de Cliente: ${messageObject.name}`,
        text: messageObject.text,
        html: messageObject.text,
      });
    },
    [postRequest, messageObject]
  );

  return (
    <section id="contact" {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="container-xs">
            {isLoading && (
              <div class="spinner-container">
                <div class="spinner"></div>
              </div>
            )}

            {!isLoading && (
              <form onSubmit={sendEmail}>
                <fieldset>
                  <div className="mb-12">
                    <Input
                      name="name"
                      label="Nome Completo"
                      placeholder="Informe seu Nome"
                      labelHidden
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mb-12">
                    <Input
                      name="email"
                      type="email"
                      label="E-mail"
                      placeholder="Informe seu Endereço de E-mail"
                      labelHidden
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mb-12">
                    <Input
                      name="text"
                      type="textarea"
                      label="Mensagem"
                      placeholder="Digite sua Mensagem"
                      rows={5}
                      labelHidden
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mt-24 mb-32">
                    <Button color="primary" wide onClick={sendEmail}>
                      Enviar Mensagem
                    </Button>
                  </div>
                </fieldset>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
