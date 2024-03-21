import React from "react";

const EmailTemplate = ({ name, email, message }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Exemplo de E-mail Estilizado</title>
        <style>
          {`
            /* Estilos gerais */
            body {
              font-family: Arial, sans-serif;
              background-color: #f5f5f5;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #fff;
              padding: 20px;
              border-radius: 10px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h1 {
              color: #333;
            }
            p {
              color: #666;
            }
            /* Estilos específicos para o e-mail */
            .email-info {
              background-color: #f0f0f0;
              padding: 10px;
              border-radius: 5px;
              margin-bottom: 20px;
            }
            .email-info p {
              margin: 5px 0;
            }
          `}
        </style>
      </head>
      <body>
        <div className="container">
          <h1>Olá!</h1>
          <div className="email-info">
            <p>
              <strong>Nome:</strong> {name}
            </p>
            <p>
              <strong>De:</strong> {email}
            </p>
          </div>
          <h4> Mensagem:</h4>
          <p>
            {message}
          </p>
        </div>
      </body>
    </html>
  );
};

export default EmailTemplate;
