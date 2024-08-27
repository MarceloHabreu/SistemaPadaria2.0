import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/Cart/cartSlice";
import { RootState } from "../../redux/Cart/store";
import * as S from "./styles";
import { MenuItem } from "../../data/MenuData";
import { FaMinus, FaPlus } from "react-icons/fa6";

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
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddItem = (item: MenuItem) => {
    const cartItem = { ...item, quantity: 1 };
    dispatch(addItem(cartItem));
  };

  const handleRemoveItem = (item: MenuItem) => {
    dispatch(removeItem(item.id));
  };

  return (
    <S.ModalBackdrop onClick={handleBackdropClick}>
      <S.ModalContent>
        <S.ModalHeader>
          <S.ModalTitle>{category}</S.ModalTitle>
          <S.CloseButton onClick={onClose}>×</S.CloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          {items.map((item) => {
            // Verifica se o item já está no carrinho
            const cartItem = cartItems.find(
              (cartItem) => cartItem.id === item.id,
            );
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <S.ModalItem key={item.id}>
                <S.ModalItemImage src={item.image} alt={item.name} />
                <S.ModalItemContent>
                  <S.ModalItemName>{item.name}</S.ModalItemName>
                  <S.ModalItemPrice>R${item.price.toFixed(2)}</S.ModalItemPrice>
                  <div>
                    <button onClick={() => handleRemoveItem(item)}>
                      <FaMinus />
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => handleAddItem(item)}>
                      <FaPlus />
                    </button>
                  </div>
                </S.ModalItemContent>
              </S.ModalItem>
            );
          })}
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};
