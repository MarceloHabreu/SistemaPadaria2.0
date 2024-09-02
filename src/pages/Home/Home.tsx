import * as S from "./styles";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <S.Body>
      <S.Container>
        <S.ImgBrand src={logo} alt="LogoGoldenDish" />
        <S.TitleContainer>
          <S.TitleGoldenDish>Padaria GoldenDish</S.TitleGoldenDish>
        </S.TitleContainer>
        <S.Description>
          Delicie-se com nossos pães frescos e saborosos.
        </S.Description>
        <S.WrapperButtons>
          <Link to="/menu">
            <S.BtnMenu>Menu</S.BtnMenu>
          </Link>
        </S.WrapperButtons>
      </S.Container>
    </S.Body>
  );
};
