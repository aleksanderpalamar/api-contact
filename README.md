# API de envio de e-mails

### Descrição

This application is a simple API that collects data from a form contact and sends an email to the user.

### Tecnologias

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nodemailer](https://nodemailer.com/about/)
- [TypeScript](https://www.typescriptlang.org/)
- [cors](https://www.npmjs.com/package/cors)

### Instalação

```bash
npm install
```

### Execução

Create a `.env` file in the root of the project and add the following variables:

```bash
EMAIL_HOST=
USER_EMAIL=
USER_PASSWORD=
EMAIL_FROM=
EMAIL_TO=
PORT=
```

```bash
npm run dev
```