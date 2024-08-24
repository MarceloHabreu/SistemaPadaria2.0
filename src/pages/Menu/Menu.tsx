import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import * as S from "./styles";

export const Menu = () => {
  return (
    <>
      <S.Header>
        <S.Nav>
          <S.NavTitleContainer>
            <S.NavTitle>Golden Dish</S.NavTitle>
          </S.NavTitleContainer>
          <S.NavList>
            <Link to="/">
              <S.NavItem>Início</S.NavItem>
            </Link>
            <S.NavItem>Sobre</S.NavItem>
            <S.NavItem>Cadastre-se</S.NavItem>
            <S.NavItem>Entrar</S.NavItem>
          </S.NavList>
          <S.Checkout>
            {" "}
            <FaCartShopping /> Finalizar Pedido
          </S.Checkout>
        </S.Nav>
      </S.Header>
    </>
  );
};
