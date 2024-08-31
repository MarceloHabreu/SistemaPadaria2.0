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

export const TitleCart = styled.h2`
  color: #333;
  text-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
`;

export const BodyCart = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
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

export const ContainerCartItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 30px;
  padding: 0.5rem;
  background-color: #ccc;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
`;
export const WrapperImg_Name = styled.div`
  display: flex;
  flex-direction: column;
`;
export const WrapperPrice_Buttons = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 35%;
`;

export const WrapperImg_Trash = styled.div`
  display: flex;
  gap: 5px;
`;

export const ImageItems = styled.img`
  margin: 0 auto;
  width: 100%;
  height: auto;
  max-width: 90px;
  max-height: 90px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ButtonTrash = styled.span`
  color: red;
  cursor: pointer;
  height: 100%;

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.3s;
  }
`;

export const SpanNameItem = styled.span`
  text-align: center;
  margin-right: 5px;
  max-width: 80px;
  font-weight: 500;
  color: #ffa500;
  text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.4);
`;

export const SpanPriceItem = styled.span`
  text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid;
`;

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 12px;
`;

export const SpanQuantity = styled.span`
  margin: 0 0.4rem;
  font-weight: bold;
`;

export const CartTotal = styled.strong``;
