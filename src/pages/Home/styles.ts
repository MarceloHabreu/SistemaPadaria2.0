import styled from "styled-components";
import fundoImg from "../../assets/imgs/fundo.jpeg";

export const Body = styled.body`
  background-image: url(${fundoImg});
  height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ImgBrand = styled.img`
  width: 240px;
  height: 200px;
  margin: 10px auto;
`;

export const TitleContainer = styled.div`
  text-shadow: 1px 5px 5px rgba(0, 0, 0, 0.1);
`;
export const TitleGoldenDish = styled.h1`
  display: flex;
  text-align: center;
  font-weight: 800;
  background-image: linear-gradient(to bottom, #e0ca3c 40%, #e36414);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  filter: brightness(1.2);
`;
export const Description = styled.p`
  display: flex;
  text-align: center;
  color: #f1f1f1;
  text-shadow: 2px 2px 2px #000;
`;

export const WrapperButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
`;
export const BtnMenu = styled.button`
  font-size: 1rem;
  color: #f1f1f1;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  width: 5rem;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #be6919;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.3s;
  }
`;
export const BtnContact = styled.button`
  font-size: 1rem;
  color: #f1f1f1;
  text-shadow: 0 0 5px rgba(0, 0, 0, 0.7);
  width: 6rem;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background-color: #be6919;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.3s;
  }
`;
