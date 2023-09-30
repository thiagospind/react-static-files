import { styled } from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  //Utilizando display: flex e justify-content: space-between e tendo
  // dois componetes, um vai ficar na extremidade direita e outro
  // na extremidade esquerda.
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`;

const Cabecalho = ({ setFiltro }) => {
  return (
    <HeaderEstilizado>
      <img src="/imagens/logo.png" alt="" />
      <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>
  );
};

export default Cabecalho;
