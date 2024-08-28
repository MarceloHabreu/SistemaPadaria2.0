import React from "react";
import * as S from "../stylesModalGeral/styles";
import logo from "../../assets/imgs/logo.png";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const Login: React.FC<LoginProps> = ({ isOpen, onClose, title }) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalBackdrop isOpen={isOpen} onClick={handleBackdropClick}>
      <S.ModalContent isOpen={isOpen}>
        <S.ModalHeader>
          {title && (
            <S.ModalTitle>
              <S.ImgLogo src={logo} alt="LogoGoldenDish" />
              {title}
            </S.ModalTitle>
          )}
          <S.ModalCloseButton onClick={onClose}>X</S.ModalCloseButton>
        </S.ModalHeader>
        <S.ModalBody></S.ModalBody>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};
