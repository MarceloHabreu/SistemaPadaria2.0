import React from "react";
import * as S from "./styles";

interface CartProps {
  showCart: boolean;
  onCloseCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, onCloseCart }) => {
  if (!showCart) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCloseCart();
    }
  };

  return (
    <S.Backdrop onClick={handleBackdropClick}>
      <S.Content showCart={showCart}>
        <S.HeaderCart>
          <S.TitleCart>Carrinho</S.TitleCart>
          <S.CloseButtonCart onClick={onCloseCart}>Fechar</S.CloseButtonCart>
        </S.HeaderCart>
        <S.BodyCart>
          <S.CartTotal data-testid="total">Total ${}</S.CartTotal>
        </S.BodyCart>
      </S.Content>
    </S.Backdrop>
  );
};
