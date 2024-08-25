import React from "react";
import * as S from "./styles"; // Supondo que você vai criar estilos separados

interface ModalGeralProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string; // Título opcional
  children: React.ReactNode; // Conteúdo genérico
}

export const ModalGeral: React.FC<ModalGeralProps> = ({
  isOpen,
  onClose,
  title,
  children,
}) => {
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
        <S.ModalBody>{children}</S.ModalBody>
        <S.ModalCloseButton onClick={onClose}>Fechar</S.ModalCloseButton>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};
