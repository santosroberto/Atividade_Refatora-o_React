// CardProduto.styles.js
import styled from "styled-components";

/**
 * Container principal do card do produto
 */
export const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  padding: 16px;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
`;

/**
 * Nome do produto
 */
export const NomeProduto = styled.h2`
  font-size: 1.2rem;
  color: #212529;
  margin-bottom: 8px;
`;

/**
 * Preço do produto
 */
export const Preco = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #198754;
  margin-bottom: 16px;
`;

/**
 * Botão "Adicionar ao carrinho"
 * Estilo dinâmico baseado na prop "adicionada"
 */
export const Botao = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;

  background-color: ${({ adicionada }) =>
    adicionada ? "#198754" : "#6c757d"};

  color: #ffffff;
  font-weight: 600;

  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;
