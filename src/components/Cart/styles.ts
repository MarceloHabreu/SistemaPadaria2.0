import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const HeaderCart = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const Backdrop = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: ${(props) => (props.showCart ? "1" : "0")};
  visibility: ${(props) => (props.showCart ? "visible" : "hidden")};
  transition: opacity 0.5s, visibility 0.5s;
  z-index: 999;
`;

export const Content = styled.aside<ContainerProps>`
  position: fixed;
  overflow: auto;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-300px")};
  width: 300px;
  background-color: #fff;
  height: 100vh;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);
  transition: right 0.8s;
  z-index: 1000;
`;

export const TitleCart = styled.h2``;

export const BodyCart = styled.div`
  margin-bottom: 1.5rem;
`;

export const CloseButtonCart = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: red;
  color: #fff;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const CartTotal = styled.strong``;
