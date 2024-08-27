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
  max-width: 600px;
  padding: 20px;
  position: relative;
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
  flex-direction: column;
`;

export const ModalItemName = styled.h3`
  margin: 0;
  color: #ffa500;
  text-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
`;

export const ModalItemPrice = styled.p`
  margin: 0;
  color: #696969;
  text-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
`;
