import React, { useEffect, useState } from "react";

// Styles
import {
  Container,
  ContainerChat,
  ContainerInput,
  ContentInput,
} from "./styles";
import "./styles.css";

// Components
import Chat from "./components/chatBalloon";

// Constants
import { handleMessages } from "./contants";

// Helper
import { handleHelper } from "./helper";

function App() {
  // useStates
  const [data, setData] = useState([]);
  const [dataDraft, setDataDraft] = useState([]);
  const [message, setMessage] = useState("");
  const [statusLoanRequest, setStatusLoanRequest] = useState("");
  const [loanRequestData, setLoanRequestData] = useState({});
  const [placeHolder, setPlaceHolder] = useState("");

  // useEffects
  useEffect(() => {
    if (data.length !== 0) return;
    const messages = handleMessages.initialMessage;
    setStatusLoanRequest("loanRequestContact");
    displayMessage(messages);
  }, []);

  useEffect(() => {
    if (
      dataDraft.length === 0 ||
      data.find((value) => value.id === dataDraft.id)
    )
      return;

    setData([...data, dataDraft]);
  }, [dataDraft]);

  useEffect(() => {
    handlePlaceHolder();
  }, [statusLoanRequest]);

  // Hndle Functions
  const displayMessage = async (messages) => {
    for (let i = 0; i < messages.length; i++) {
      await sleep(1 * 1000);
      setDataDraft(messages[i]);
    }
  };

  const sleep = (delay) => {
    return new Promise(function (resolve) {
      setTimeout(resolve, delay);
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      return handleSendMessage();
    }
    return;
  };

  const handleSendMessage = async () => {
    const newMessage = {
      id: handleHelper.idRandom,
      msg: message,
      type: "person",
      status: statusLoanRequest,
      createdAt: new Date(),
    };

    if (statusLoanRequest === "loanRequestContact") {
      const result = await handleHelper.handleselectContactName(
        newMessage,
        setMessage,
        setDataDraft,
        displayMessage,
        setStatusLoanRequest
      );
      if (result === true) {
        return setLoanRequestData({
          ...loanRequestData,
          contanct_name: message,
        });
      } else {
        alert("Mensagem inválida");
      }
    }
  };

  const handleFormated = (value) => {
    switch (statusLoanRequest) {
      case "loanRequestValue": {
        setMessage(value);
        break;
      }
      default:
        setMessage(value);
    }
  };

  const handlePlaceHolder = (value) => {
    switch (statusLoanRequest) {
      case "loanRequestValue": {
        setPlaceHolder("Digite o valor do emprestimo");
        break;
      }
      default:
        setPlaceHolder("Digite aqui");
    }
  };

  return (
    <Container>
      <ContainerChat>
        <Chat data={data} />

        <ContainerInput>
          <ContentInput>
            <input
              onChange={({ target }) => handleFormated(target.value)}
              onKeyPress={(e) => handleKeyPress(e)}
              placeholder={placeHolder}
              value={message}
            />
            <div
              onClick={() => {
                handleSendMessage();
              }}
              class="button"
            >
              {">"}
            </div>
          </ContentInput>
        </ContainerInput>
      </ContainerChat>
    </Container>
  );
}

export default App;
