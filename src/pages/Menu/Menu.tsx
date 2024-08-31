import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
import { Modal } from "../../components/ModalMenu/Modal";
import { Card } from "../../components/Card/Card";
import { menuItems } from "../../data/MenuData";
import * as S from "./styles";
import { useState } from "react";
import { Category, MenuItem } from "../../data/MenuData";
import { Login } from "../../components/Login/Login";
import { Cart } from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";

export const Menu: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentItems, setCurrentItems] = useState<MenuItem[]>([]);

  const [user, setUser] = useState<{ name: string } | null>(null);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const handleCloseCart = () => setShowCart(false);

  const openModalGeral = (modalType: string) => {
    if (modalType === "login") {
      setIsLoginOpen(true);
    }
  };

  const closeModalGeral = () => {
    setIsLoginOpen(false);
  };

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
      <S.BodyContent>
        <S.Header>
          <S.Nav>
            <S.NavTitleContainer>
              <S.NavTitle>Golden Dish</S.NavTitle>
            </S.NavTitleContainer>
            <S.NavIcon onClick={() => setIsNavVisible(!isNavVisible)}>
              {" "}
              <FaBars />{" "}
            </S.NavIcon>
            <S.NavList isVisible={isNavVisible}>
              <Link to="/">
                <S.NavItem>Início</S.NavItem>
              </Link>
              <S.NavItem>Sobre</S.NavItem>
              {user ? (
                <>
                  <S.NavItem>Bem-vindo, {user.name}!</S.NavItem>
                  <S.NavItem onClick={() => setUser(null)}>Sair</S.NavItem>
                </>
              ) : (
                <>
                  <S.NavItem onClick={() => openModalGeral("login")}>
                    Entrar
                  </S.NavItem>
                </>
              )}
            </S.NavList>
            <S.Checkout onClick={() => setShowCart(!showCart)}>
              <FaCartShopping /> Finalizar Pedido
            </S.Checkout>
          </S.Nav>
        </S.Header>

        <S.Body>
          <S.WrapperMenu>
            <S.TitleMenu>
              Bem-Vindo {user?.name} ao menu da Golden Dish
            </S.TitleMenu>
            <S.DescriptionMenu>
              Entre no delicioso mundo dos sabores tradicionais com a nossa
              padaria, onde cada aroma é uma história e cada sabor uma memória.
            </S.DescriptionMenu>
            <S.CardContainer>
              {menuItems.map((category) => (
                <Card
                  key={category.id}
                  image={category.capa}
                  title={category.name}
                  description={category.description}
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

        <Login
          isOpen={isLoginOpen}
          onClose={closeModalGeral}
          title="Entrar"
          setUser={setUser}
        />
        <Cart showCart={showCart} onCloseCart={handleCloseCart} />
      </S.BodyContent>
      <Footer />
    </>
  );
};
