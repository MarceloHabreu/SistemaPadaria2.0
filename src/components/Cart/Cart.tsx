import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/Cart/store";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../../redux/Cart/cartSlice";
import * as S from "./styles";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { CheckoutButton } from "../CheckoutButton/CheckoutButton";

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
            <S.ContainerCartItems key={item.id}>
              <S.WrapperImg_Name>
                <S.WrapperImg_Trash>
                  <S.ImageItems src={item.image} alt={item.name} />
                  <S.ButtonTrash onClick={() => dispatch(removeItem(item.id))}>
                    <FaTrashAlt />
                  </S.ButtonTrash>
                </S.WrapperImg_Trash>
                <S.SpanNameItem>{item.name}</S.SpanNameItem>
              </S.WrapperImg_Name>
              <S.WrapperPrice_Buttons>
                <S.SpanPriceItem>R$ {item.price.toFixed(2)}</S.SpanPriceItem>
                <S.WrapperButtons>
                  <S.Buttons
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <FaMinus />
                  </S.Buttons>
                  <S.SpanQuantity>{item.quantity}</S.SpanQuantity>
                  <S.Buttons
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    <FaPlus />
                  </S.Buttons>
                </S.WrapperButtons>
              </S.WrapperPrice_Buttons>
            </S.ContainerCartItems>
          ))}
        </S.BodyCart>
        <S.CartTotal>
          Total: R${" "}
          {cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
          <CheckoutButton />
        </S.CartTotal>
      </S.Content>
    </S.Backdrop>
  );
};
