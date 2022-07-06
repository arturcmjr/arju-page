import axios from "axios";

export function sendEmail(email: string, name: string, message: string) {
  const htmlContent = `
    <p style="white-space: pre-line">${message}</p>
    <span>${name}</span>
    `;
  const config = {
    headers: {
      "api-key":
        "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",
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
    subject: `arju.dev: ${name}`,
    htmlContent,
  };

  return axios.post("https://api.sendinblue.com/v3/smtp/email", data, config);
}

export default sendEmail;
