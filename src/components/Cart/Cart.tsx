import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Cart/store";
import { increaseQuantity, decreaseQuantity } from "../../redux/Cart/cartSlice";
import * as S from "./styles";
import { FaMinus, FaPlus } from "react-icons/fa";

interface CartProps {
  showCart: boolean;
  onCloseCart: () => void;
}

export const Cart: React.FC<CartProps> = ({ showCart, onCloseCart }) => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onCloseCart();
    }
  };

  return (
    <S.Backdrop showCart={showCart} onClick={handleBackdropClick}>
      <S.Content showCart={showCart}>
        <S.HeaderCart>
          <S.TitleCart>Carrinho</S.TitleCart>
          <S.CloseButtonCart onClick={onCloseCart}>Fechar</S.CloseButtonCart>
        </S.HeaderCart>
        <S.BodyCart>
          {cartItems.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <span>R$ {item.price.toFixed(2)}</span>
              <div>
                <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                  <FaMinus />
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(increaseQuantity(item.id))}>
                  <FaPlus />
                </button>
              </div>
            </div>
          ))}
        </S.BodyCart>
        <S.CartTotal>
          Total: R${" "}
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </S.CartTotal>
      </S.Content>
    </S.Backdrop>
  );
};
