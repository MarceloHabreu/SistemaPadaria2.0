import React from "react";
import * as S from "../stylesModalGeral/styles"; // Supondo que você tenha um arquivo de estilos

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export const Login: React.FC<LoginProps> = ({ isOpen, onClose, title }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <S.ModalBackdrop onClick={handleBackdropClick}>
      <S.ModalContent>
        {title && <S.ModalTitle>{title}</S.ModalTitle>}
        <S.ModalBody></S.ModalBody>
        <S.ModalCloseButton onClick={onClose}>Fechar</S.ModalCloseButton>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};
