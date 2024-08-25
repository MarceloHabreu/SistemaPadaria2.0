import styled from "styled-components";

export const Card = styled.div`
  max-width: 350px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 0.6rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  color: #504f4f;
  text-shadow: 2px 3px 8px rgba(0, 0, 0, 0.2);
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: gray;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0, 2);
  margin-bottom: 1rem;
`;

export const CardButton = styled.button`
  margin-bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background: #be6919;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    filter: brightness(0.9);
    transition: filter 0.3s;
  }
`;
