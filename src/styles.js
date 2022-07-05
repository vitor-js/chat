import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: #353535;

  align-items: center;
  justify-content: center;
  display: flex;
`;

export const ContainerChat = styled.div`
  width: 25vw;
  height: 80vh;
  border-radius: 10px;
  background-color: #444444;
  padding: 5px;
`;

export const ContainerInput = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: flex-end;
`;

export const ContentInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px;

  input {
    width: 83%;
    height: 40px;

    background-color: #606060;

    border-radius: 5px;
    border: none;

    color: #fff;

    padding-left: 10px;
    padding-right: 10px;

    &:focus {
      border: none;
      outline: none;
    }
  }

  .button {
    cursor: pointer;
    width: 10%;
    height: 40px;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 25px;
    font-weight: bold;

    color: #fff;
    background-color: #fe761c;
  }
`;
