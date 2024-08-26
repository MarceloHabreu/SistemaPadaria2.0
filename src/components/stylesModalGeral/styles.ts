import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const ModalTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
`;

export const ModalBody = styled.div`
  margin-bottom: 1.5rem;
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;
