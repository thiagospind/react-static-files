import styled from "styled-components";
const RodapeEstilizado = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #04244f;
  width: 100hv;
  height: 80px;
  padding: 0 34px;
  margin-top: 70px;
  h1 {
    color: #fff;
    font-size: 16px;
  }
`;

const DivRedes = styled.div`
  img {
    margin-right: 34px;
  }
`;
const Rodape = () => {
  return (
    <RodapeEstilizado>
      <DivRedes>
        <img src="/imagens/sociais/facebook.svg" />
        <img src="/imagens/sociais/instagram.svg" />
        <img src="/imagens/sociais/twitter.svg" />
      </DivRedes>
      <h1>Desenvolvido por Alura.</h1>
    </RodapeEstilizado>
  );
};

export default Rodape;
