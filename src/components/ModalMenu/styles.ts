import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  width: 80%;
  max-width: 350px;
  padding: 20px;
  position: relative;
  transition: 0.6s;
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #504f4f;
  text-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ModalItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
`;

export const ModalItemContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const ModalItemName = styled.h3`
  margin: 0;
  color: #ffa500;
  text-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalItemPrice = styled.p`
  margin: 0;
  font-weight: 400;
  text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
`;

export const WrapperButtons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
  border-radius: 15px;
  border: 1px solid;
  width: 50%;
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
