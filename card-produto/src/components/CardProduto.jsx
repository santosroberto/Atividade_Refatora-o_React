// CardProduto.jsx

import { Card, NomeProduto, Preco, Botao } from "./CardProduto.styles";

export default function CardProduto() {
  // Simulação de estado do produto
  const produtoAdicionado = true;

  return (
    <Card>
      <NomeProduto>Notebook Gamer</NomeProduto>
      <Preco>R$ 4.999,00</Preco>

      <Botao adicionada={produtoAdicionado}>
        {produtoAdicionado ? "Adicionado" : "Adicionar ao carrinho"}
      </Botao>
    </Card>
  );
}