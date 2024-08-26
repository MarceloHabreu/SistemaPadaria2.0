import React from "react";
import * as S from "../stylesModalGeral/styles";
import logo from "../../assets/imgs/logo.png";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const Signup: React.FC<LoginProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalBackdrop onClick={handleBackdropClick}>
      <S.ModalContent>
        <S.ModalHeader>
          {title && (
            <S.ModalTitle>
              <S.ImgLogo src={logo} alt="LogoGoldenDish" />
              {title}
            </S.ModalTitle>
          )}
          <S.ModalCloseButton onClick={onClose}>X</S.ModalCloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <S.ModalForm>
            <S.FormLabel>Nome: </S.FormLabel>
            <S.FormInput type="text" id="name" />
            <S.FormLabel>E-mail: </S.FormLabel>
            <S.FormInput type="email" id="email" />
            <S.FormLabel>Senha: </S.FormLabel>
            <S.FormInput type="password" id="senha" />
          </S.ModalForm>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};
