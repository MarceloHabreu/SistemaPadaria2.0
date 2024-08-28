// styles.ts

import styled from "styled-components";
import fundoImg from "../../assets/imgs/fundo.jpeg";

export const BodyContent = styled.div`
  background-image: url(${fundoImg});
  min-height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-bottom: 50px;
`;

export const Header = styled.header`
  background-color: #be6919;
`;

export const Nav = styled.nav`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavIcon = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media (max-width: 768px) {
    color: #e0ca3c;
    text-shadow: 1px 1px 15px;
    display: block;
    position: absolute;
    top: 1.2rem;
    right: 2rem;
  }
`;

export const NavTitleContainer = styled.div`
  text-shadow: 1px 4px 5px rgba(0, 0, 0, 0.1);
`;

export const NavTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  background-image: linear-gradient(to right, #e0ca3c 40%, #e36414);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  filter: brightness(1.2);

  &:hover {
    filter: brightness(1.5);
    transition: filter 0.3s;
  }
`;

export const NavList = styled.ul<{ isVisible: boolean }>`
  list-style: none;
  font-weight: 500;
  font-size: 1.1rem;
  display: flex;
  gap: 1rem;
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 4rem;
    right: 0;
    background-color: #be6919;
    width: 100%;
    padding: 1rem;
    transform: ${(props) =>
      props.isVisible ? "translateY(0)" : "translateY(-20%)"};
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    pointer-events: ${(props) => (props.isVisible ? "auto" : "none")};
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  padding: 0.6rem;
  color: #fff;
  text-shadow: 1px 5px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
`;

export const Checkout = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 6px;

  @media (max-width: 768px) {
    margin-right: 2.5rem;
  }
`;

export const Body = styled.body`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WrapperMenu = styled.div`
  margin-top: 2rem;
`;

export const TitleMenu = styled.h2`
  font-size: 2rem;
  color: #fff;
  text-align: center;
`;

export const DescriptionMenu = styled.p`
  font-size: 1.1rem;
  color: #fff;
  text-align: center;
  margin: 1rem auto;
  max-width: 800px;
`;

// Modal styles
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 600px;
  padding: 2rem;
  z-index: 1000;
`;

export const ModalTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

export const ModalDescription = styled.p`
  font-size: 1rem;
`;

export const ModalButton = styled.button`
  background: #be6919;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  align-self: flex-end;

  &:hover {
    background: #a55b16;
    transition: background 0.3s;
  }
`;

// Card styles
export const CardContainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  width: 100%;

  @media (max-width: 1098px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  display: flex;
  flex-direction: column;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 60%;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 1rem;
  text-align: center;
`;

export const CardTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const InspectButton = styled.button`
  background: #be6919;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #a55b16;
    transition: background 0.3s;
  }
`;
