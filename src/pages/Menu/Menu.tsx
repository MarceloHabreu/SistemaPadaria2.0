import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { Modal } from "../../components/Modal/Modal";
import { Card } from "../../components/Card/Card";
import { menuItems } from "../../data/MenuData";
import * as S from "./styles";
import { useState } from "react";
import { Category, MenuItem } from "../../data/MenuData";

export const Menu: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentItems, setCurrentItems] = useState<MenuItem[]>([]);

  const openModal = (category: Category) => {
    setCurrentCategory(category.name);
    setCurrentItems(category.items);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
            <FaCartShopping /> Finalizar Pedido
          </S.Checkout>
        </S.Nav>
      </S.Header>

      <S.Body>
        <S.WrapperMenu>
          <S.TitleMenu>Bem-Vindo ao menu da Golden Dish</S.TitleMenu>
          <S.DescriptionMenu>
            Entre no delicioso mundo dos sabores tradicionais com a nossa
            padaria, onde cada aroma é uma história e cada sabor uma memória.
          </S.DescriptionMenu>
          <S.CardContainer>
            {menuItems.map((category) => (
              <Card
                key={category.id}
                image={category.items[0].image} // Ajuste conforme necessário
                title={category.name}
                description="Descrição breve da categoria."
                onInspect={() => openModal(category)}
              />
            ))}
          </S.CardContainer>
        </S.WrapperMenu>
      </S.Body>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        category={currentCategory}
        items={currentItems}
      />
    </>
  );
};
