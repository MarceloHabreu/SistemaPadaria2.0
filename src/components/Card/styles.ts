import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
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
  height: 60%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  padding: 16px;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

export const CardDescription = styled.p`
  font-size: 0.9rem;
  color: gray;
`;

export const CardButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background: #be6919;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
`;
