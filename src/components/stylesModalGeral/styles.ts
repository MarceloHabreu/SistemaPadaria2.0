import styled from "styled-components";

interface ModalGeralProps {
  isOpen: boolean;
}

export const ModalBackdrop = styled.div<ModalGeralProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};
  visibility: ${(props) => (props.isOpen ? "visible" : "hidden")};
  transition: opacity 0.5s, visibility 0.5s;
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

export const ModalContent = styled.div<ModalGeralProps>`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  transform: ${(props) =>
    props.isOpen ? "translateY(0)" : "translateY(-100vh)"};
  transition: transform 0.5s ease-in-out;
`;
export const ModalTitle = styled.h2`
  display: flex;
  align-items: center;

  color: #504f4f;
  text-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
  gap: 5px;
  margin-top: 0;
  font-size: 1.5rem;
  text-align: center;
`;

export const ModalBody = styled.div``;

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
export const DivForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const FormLabel = styled.label``;
export const FormInput = styled.input`
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding-left: 5px;
  box-shadow: none;
  outline: none;
  transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out;

  &:focus {
    border-color: #be6919;
    box-shadow: 0 0 5px rgba(190, 105, 25, 0.5);
    outline: none;
  }
`;

export const ButtonLoginSinup = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #be6919;
  width: 100%;
  color: #fff;

  &:hover {
    filter: brightness(0.8);
    transition: filter 0.3s;
  }
`;
