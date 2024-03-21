import React, { useCallback, useState } from "react";
import classNames from "classnames";
import SectionHeader from "./partials/SectionHeader";
import Input from "../elements/Input";
import Button from "../elements/Button";
import emailjs from "@emailjs/browser";

const Notification = ({ message, isVisible }) => {
  return (
    <div className={`notification ${isVisible ? "show" : ""}`}>
      <span>{message}</span>
    </div>
  );
};

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
  const [isLoading, setIsLoading] = useState(false);
  const [messageObject, setMessageObject] = useState({
    name: "",
    email: "",
    text: "",
  });
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

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

  const handleNotification = (message) => {
    setNotificationMessage(message);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);
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

      setIsLoading(true);

      emailjs
        .send(
          "service_c9tzffl",
          "template_0w17zhv",
          {
            from_name: messageObject.name,
            to_email: messageObject.email,
            message: messageObject.text,
            email: messageObject.email,
          },
          "8OVw1IPt848QbGx2p"
        )
        .then(
          (response) => {
            handleNotification("Mensagem Enviada! Entraremos em contato logo.");
            console.log("E-mail enviado com sucesso!", response);
          },
          (error) => {
            console.error("Erro ao enviar e-mail:", error);
          }
        );

      setMessageObject({
        email: "",
        name: "",
        text: "",
      });

      setIsLoading(false);
    },
    [messageObject, setIsLoading]
  );

  console.log(isLoading);

  return (
    <section id="contact" {...props} className={outerClasses}>
      <Notification
        message={notificationMessage}
        isVisible={showNotification}
      />
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className="container-xs">
            {isLoading && (
              <div className="spinner-container">
                <div className="spinner"></div>
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
                      value={messageObject.name}
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
                      value={messageObject.email}
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
                      value={messageObject.text}
                      labelHidden
                      required
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="mt-24 mb-32">
                    <Button color="primary" wide onSubmit={sendEmail}>
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
