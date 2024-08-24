import React from "react";
import * as S from "./styles";

interface CardProps {
  image: string;
  title: string;
  description: string;
  onInspect: () => void;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  onInspect,
}) => {
  return (
    <S.Card>
      <S.CardImage src={image} alt={title} />
      <S.CardContent>
        <S.CardTitle>{title}</S.CardTitle>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardButton onClick={onInspect}>Inspecionar</S.CardButton>
      </S.CardContent>
    </S.Card>
  );
};
