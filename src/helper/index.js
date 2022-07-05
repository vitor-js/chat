import { handleValidators } from "../validator";
import { handleMessages } from "../contants";

const idRandom = (value) => {
  return Math.floor(Math.random() * value);
};

const handleselectContactName = async (
  objectMessage,
  setMessage,
  setDataDraft,
  displayMessage,
  setStatusLoanRequest
) => {
  const validate = await handleValidators.handleNameValidade(objectMessage.msg);
  if (validate === true) {
    setMessage("");
    const newMessagesMachine = handleMessages.requestValue;
    setStatusLoanRequest("loanRequestValue");
    setDataDraft(objectMessage);
    displayMessage(newMessagesMachine);
    return true;
  }
  return false;
};

const handleHelper = {
  idRandom: idRandom,
  handleselectContactName: handleselectContactName,
};

export { handleHelper };
