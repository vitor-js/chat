const initialMessage = [
  {
    id: 1,
    msg: "Olá, seja bem-vindo!",
    type: "machine",
    status: "loanRequestContact",
    createdAt: new Date(),
  },
  {
    id: 2,
    msg: "Iremos te guiar para responder cada etapa!",
    type: "machine",
    status: "loanRequestContact",
    createdAt: new Date(),
  },
  {
    id: 3,
    msg: "Qual o seu nome completo?",
    type: "machine",
    status: "loanRequestContact",
    createdAt: new Date(),
  },
];

const birthDateValue = [
  {
    id: 4,
    msg: "Qual a sua data de nascimento?",
    type: "machine",
    status: "LoanRequestBirthDate",
    createdAt: new Date(),
  },
];

const cepValue = [
  {
    id: 5,
    msg: "Agora, por favor, informe seu CEP.",
    type: "machine",
    status: "loanRequestCep",
    createdAt: new Date(),
  },
];

const numberValue = [
  {
    id: 6,
    msg: "Qual o número deste endereço?",
    type: "machine",
    status: "loanRequestNumber",
    createdAt: new Date(),
  },
];

const requestValue = [
  {
    id: 7,
    msg: "Qual o valor do empréstimo que gostaria de contratar?",
    type: "machine",
    status: "loanRequestValue",
    createdAt: new Date(),
  },
];

const installmentMessage = [
  {
    id: 8,
    msg: "Em quantas parcelas gostaria de pagar?",
    type: "machine",
    status: "loanRequestInstallment",
    createdAt: new Date(),
  },
];

const requestRegistrationCode = [
  {
    id: 9,
    msg: "Por favor, agora me informe o CNPJ da empresa que receberá o empréstimo.",
    type: "machine",
    status: "LoanRequestRegistrationCode",
    createdAt: new Date(),
  },
];

const requestRevenue = [
  {
    id: 10,
    msg: "Qual o faturamento mensal da empresa?",
    type: "machine",
    status: "LoanRequestrequestRevenue",
    createdAt: new Date(),
  },
];

const requestTaxId = [
  {
    id: 11,
    msg: "Digite agora o seu CPF",
    type: "machine",
    status: "LoanRequestTaxId",
    createdAt: new Date(),
  },
];

const requestPhone = [
  {
    id: 12,
    msg: "Informe o seu melhor número de telefone para entrarmos em contato no futuro.",
    type: "machine",
    status: "LoanRequestPhone",
    createdAt: new Date(),
  },
];

const requestLoginEmail = [
  {
    id: 13,
    msg: "Agora iremos criar seu login para acessar suas informações no app.",
    type: "machine",
    status: "requestLoginEmail",
    createdAt: new Date(),
  },

  {
    id: 14,
    msg: "Informe seu melhor e-mail. Ele será sua identificação para entrar no aplicativo.",
    type: "machine",
    status: "requestLoginEmail",
    createdAt: new Date(),
  },
];

const requestPasswordLogin = [
  {
    id: 15,
    msg: "Crie uma senha com 6 números",
    type: "machine",
    status: "requestPasswordLogin",
    createdAt: new Date(),
  },
];

const requestConfirmTerms = [
  {
    id: 16,
    msg: "Para concluir você precisa aceitar os Termos e Condições do link abaixo:",
    type: "machine",
    status: "requestConfirmTerms",
    createdAt: new Date(),
  },
  {
    id: 17,
    msg: "Ler Termos e Condições",
    type: "machine",
    status: "termLink",
    createdAt: new Date(),
  },
];

const handleMessages = {
  initialMessage: initialMessage,
  requestValue: requestValue,
  birthDateValue: birthDateValue,
  cepValue: cepValue,
  numberValue: numberValue,
  installmentMessage: installmentMessage,
  requestRegistrationCode: requestRegistrationCode,
  requestRevenue: requestRevenue,
  requestTaxId: requestTaxId,
  requestPhone: requestPhone,
  requestLoginEmail: requestLoginEmail,
  requestPasswordLogin: requestPasswordLogin,
  requestConfirmTerms: requestConfirmTerms,
};

export { handleMessages };
