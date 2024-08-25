import React from "react";
import * as S from "./styles";
import { MenuItem } from "../../data/MenuData";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: string;
  items: MenuItem[];
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  category,
  items,
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
        <S.ModalHeader>
          <S.ModalTitle>{category}</S.ModalTitle>
          <S.CloseButton onClick={onClose}>×</S.CloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          {items.map((item) => (
            <S.ModalItem key={item.id}>
              <S.ModalItemImage src={item.image} alt={item.name} />
              <S.ModalItemContent>
                <S.ModalItemName>{item.name}</S.ModalItemName>
                <S.ModalItemPrice>{item.price.toFixed(2)}</S.ModalItemPrice>
              </S.ModalItemContent>
            </S.ModalItem>
          ))}
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};
