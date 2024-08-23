import * as S from "./styles";
import logo from "../../assets/imgs/logo.png";

export const Home = () => {
  return (
    <S.Body>
      <S.Container>
        <S.ImgBrand src={logo} alt="LogoGoldenDish" />
        <S.Title>Padaria GoldenDish</S.Title>
        <S.Description>
          Delicie-se com nossos pães frescos e saborosos.
        </S.Description>
        <S.WrapperButtons>
          <S.BtnMenu>Menu</S.BtnMenu>
          <S.BtnContact>Contato</S.BtnContact>
        </S.WrapperButtons>
      </S.Container>
    </S.Body>
  );
};
