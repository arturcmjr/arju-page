import * as functions from "firebase-functions";
import axios, { AxiosRequestConfig } from "axios";
import cors = require("cors");

var corsOption: cors.CorsOptions = {
  origin: "https://arju.dev",
  methods: "GET,POST",
  allowedHeaders: ["Content-Type", "Accept"],
};

export const sendEmail = functions.https.onRequest((request, response) => {
  const corsHandler = cors(corsOption);
  corsHandler(request, response, async () => {
    for (let fieldName of ["name", "email", "message", "jobTitle"]) {
      if (!request.body[fieldName]) {
        functions.logger.error(`field ${fieldName} is required`);
        response.status(400).send(`field ${fieldName} is required`);
        break;
      }
    }

    const { name, email, message, jobTitle } = request.body;

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email)) {
      functions.logger.error(`email ${email} is invalid`);
      response.status(400).send(`email ${email} is invalid`);
      return;
    }

    const htmlContent = `
    <p style="white-space: pre-line">${message}</p>
    <b>${jobTitle}</span>
    `;
    const config: AxiosRequestConfig = {
      headers: {
        "api-key": process.env.SENDINGBLUE_API_KEY || "",
      },
    };
    const data = {
      sender: {
        name,
        email,
      },
      to: [
        {
          name: "Artur Junior",
          email: "arturcmjr@gmail.com",
        },
      ],
      subject: `Website Contact: ${name}`,
      htmlContent,
    };

    axios
      .post("https://api.sendinblue.com/v3/smtp/email", data, config)
      .then((res) => {
        functions.logger.info("email-sent", res.data);
        response.send(res.data);
        return;
      })
      .catch((error) => {
        functions.logger.error("sendinblue-error", error);
        response.status(500).send(error);
        return;
      });
  });
});
