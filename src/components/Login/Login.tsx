import React, { useEffect, useState } from "react";
import * as S from "./styles";
import logo from "../../assets/imgs/logo.png";

interface LoginProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  setUser: (user: { name: string }) => void;
}

export const Login: React.FC<LoginProps> = ({
  isOpen,
  onClose,
  title,
  setUser,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = { name, email };
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    onClose();
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  });

  return (
    <S.ModalBackdrop isOpen={isOpen} onClick={handleBackdropClick}>
      <S.ModalContent isOpen={isOpen}>
        <S.ModalHeader>
          {title && (
            <S.ModalTitle>
              <S.ImgLogo src={logo} alt="LogoGoldenDish" />
              {title}
            </S.ModalTitle>
          )}
          <S.ModalCloseButton onClick={onClose}>X</S.ModalCloseButton>
        </S.ModalHeader>
        <S.ModalBody>
          <S.ModalForm onSubmit={handleLogin}>
            <S.DivForm>
              <S.FormLabel>Nome: </S.FormLabel>
              <S.FormInput
                type="text"
                id="name"
                placeholder="Seu nome..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </S.DivForm>
            <S.DivForm>
              <S.FormLabel>E-mail: </S.FormLabel>
              <S.FormInput
                type="email"
                id="email"
                placeholder="Seu e-mail..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.DivForm>
            <S.DivForm>
              <S.FormLabel>Senha: </S.FormLabel>
              <S.FormInput
                type="password"
                id="senha"
                placeholder="Sua senha..."
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </S.DivForm>
            <S.ButtonLoginSinup type="submit">Cadastrar</S.ButtonLoginSinup>
          </S.ModalForm>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalBackdrop>
  );
};
