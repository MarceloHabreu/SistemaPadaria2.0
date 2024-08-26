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
export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const ImgLogo = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px auto;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transition-delay: 0.5s;
`;

export const ModalTitle = styled.h2`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 0;
  font-size: 1.5rem;
  text-align: center;
`;

export const ModalBody = styled.div`
  margin-bottom: 1.5rem;
`;

export const ModalCloseButton = styled.button`
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

export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormLabel = styled.label``;
export const FormInput = styled.input`
  width: 50%;
`;
