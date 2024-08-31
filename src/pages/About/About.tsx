import * as S from "./styles";
import logo from "../../assets/imgs/logo.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

export const About: React.FC = () => {
  return (
    <>
      <S.ContainerAbout>
        <S.ButtonBack>
          <IoArrowBackCircleOutline /> <Link to="/menu">Voltar</Link>
        </S.ButtonBack>
        <S.LogoAbout>
          <S.ImgBrand src={logo} alt="LogoGoldenDish" />
          <S.TitleBrand>
            Golden Dish - Espalhando Sabor e Qualidade
          </S.TitleBrand>
        </S.LogoAbout>
        <S.ParagraphsAbout>
          <S.TitleParagraph style={{ gridArea: "title1" }}>
            Quem Somos
          </S.TitleParagraph>
          <S.Paragraph style={{ gridArea: "paragraph1" }}>
            O Golden Dish é mais do que uma simples padaria. Somos uma equipe
            apaixonada que se dedica a espalhar o sabor e a qualidade dos
            alimentos para todos os nossos clientes. Desde a nossa fundação, há
            um ano, temos orgulho em oferecer uma ampla variedade de produtos
            deliciosos, desde pães tradicionais até bolos artesanais, sempre com
            um toque especial de qualidade e frescor.
          </S.Paragraph>
          <S.TitleParagraph style={{ gridArea: "title2" }}>
            Nossa Missão
          </S.TitleParagraph>
          <S.Paragraph style={{ gridArea: "paragraph2" }}>
            Nossa missão é simples: espalhar o sabor e a qualidade dos alimentos
            para todos que cruzam nosso caminho. Acreditamos que cada mordida
            deve ser uma experiência memorável, e nos esforçamos para garantir
            que nossos produtos excedam as expectativas de sabor, frescor e
            qualidade. Queremos que cada visita ao Golden Dish seja uma
            celebração dos melhores sabores da vida.
          </S.Paragraph>

          <S.TitleParagraph style={{ gridArea: "title3" }}>
            Nossos Produtos
          </S.TitleParagraph>
          <S.Paragraph style={{ gridArea: "paragraph3" }}>
            No Golden Dish, oferecemos uma variedade de produtos que são feitos
            com amor e cuidado. Desde pães tradicionais, salgados e pães de
            queijo, até sucos naturais, refrigerantes, cafés frescos, doces
            irresistíveis e bolos feitos sob medida para todas as ocasiões,
            temos algo para todos os gostos e ocasiões.
          </S.Paragraph>

          <S.TitleParagraph style={{ gridArea: "title4" }}>
            Nossa Diferença
          </S.TitleParagraph>
          <S.Paragraph style={{ gridArea: "paragraph4" }}>
            O que nos diferencia no Golden Dish é o nosso compromisso com o
            excelente atendimento. Nossa equipe é composta por profissionais
            dedicados que estão aqui para tornar sua experiência conosco ainda
            mais especial. Desde o momento em que você entra em nossa loja até a
            entrega dos seus produtos, garantimos um atendimento caloroso,
            amigável e eficiente.
          </S.Paragraph>
        </S.ParagraphsAbout>
        <Footer />
      </S.ContainerAbout>
    </>
  );
};
