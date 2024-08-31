import styled from "styled-components";
import fundoImg from "../../assets/imgs/fundo.jpeg";

export const ContainerAbout = styled.div`
  background-image: url(${fundoImg});
  min-height: 100vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const LogoAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgBrand = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 5rem;
`;

export const TitleBrand = styled.h1`
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
  background-image: linear-gradient(to bottom, #e0ca3c 60%, #e36414);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
  filter: brightness(1.2);
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.3);

  &:hover {
    filter: brightness(1);
    transition: filter 0.3s;
  }
`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #be6919;
  border: none;
  border-radius: 8px;
  position: absolute;
  padding: 0.5rem 0.9rem;
  margin: 0.4rem;
  color: #fff;
  font-size: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);

  svg {
    font-size: 20px;
  }

  &:hover {
    filter: brightness(1.2);
    transition: filter 0.3s;
  }
`;

export const ParagraphsAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    "title1 title2"
    "paragraph1 paragraph2"
    "title3 title4"
    "paragraph3 paragraph4";
  gap: 20px;
  align-items: center;
  text-align: center;
  padding: 20px;
  border: 1px solid #fff;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "title1"
      "paragraph1"
      "title2"
      "paragraph2"
      "title3"
      "paragraph3"
      "title4"
      "paragraph4";
  }
`;
export const TitleParagraph = styled.h3`
  color: #e0ca3c;
  font-size: 24px;
  margin-bottom: 10px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
`;
export const Paragraph = styled.p`
  color: #fff;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 20px;
`;
