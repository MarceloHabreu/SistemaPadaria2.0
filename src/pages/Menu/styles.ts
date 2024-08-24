import styled from "styled-components";

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
    filter: brightness(1);
    transition: filter 0.3s;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  font-weight: 500;
  font-size: 1.1rem;
  display: flex;
  gap: 1rem;
`;

export const NavItem = styled.li`
  cursor: pointer;
  padding: 0.6rem;
  /* color: #ccc; */
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
`;
