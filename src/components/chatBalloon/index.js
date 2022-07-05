import React from "react";

import {
  Container,
  MachineBubble,
  ChatbotUserBubble,
  ChatbotUserHolder,
} from "./styles";

const TYPE_MACHINE = "machine";

function Index({ data = [] }) {
  return (
    <Container>
      {data.map((value, index) => {
        return (
          <>
            {value.type === TYPE_MACHINE && (
              <MachineBubble> {value.msg}</MachineBubble>
            )}

            {value.type !== TYPE_MACHINE && (
              <ChatbotUserHolder>
                <ChatbotUserBubble>{value.msg}</ChatbotUserBubble>
              </ChatbotUserHolder>
            )}
          </>
        );
      })}
    </Container>
  );
}

export default Index;
