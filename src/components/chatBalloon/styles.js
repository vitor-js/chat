import styled from "styled-components";

export const Container = styled.div`
  max-height: 80%;
  max-width: 100%;
  height: 80%;
  box-sizing: border-box;
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const MachineBubble = styled.div`
  border-radius: 0 6px 6px 6px;
  background-color: rgb(255, 228, 210, 0.2);
  border: 1px solid #fe761c;
  color: #ddd;
  display: inline-block;
  font-size: 14px;
  max-width: 50%;
  /* margin: 0 0 10px 0; */
  overflow: hidden;
  font-size: 12px;
  padding: 12px;
  font-family: "Helvetica";
  margin-bottom: 10px;
`;

export const ChatbotUserHolder = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  min-width: 100%;
  width: 100%;
`;

export const ChatbotUserBubble = styled.div`
  background-color: rgb(255, 228, 210, 0.2);
  border-radius: 6px 0 6px 6px;
  border: 1px solid rgb(255, 228, 210, 0.2);
  box-shadow: unset;
  color: #ddd;
  padding: 12px;
  max-width: 50%;
  font-size: 12px;
  font-family: "Helvetica";
`;
