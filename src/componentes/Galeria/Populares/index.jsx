import styled from "styled-components";
import Titulo from "../../Titulo";
import populares from "./fotos-populares.json";

const ImagensContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  & > img {
    max-width: 212px;
    border-radius: 20px;
  }
`;

const Botao = styled.button`
  color: #fff;
  font-size: 20px;
  background: transparent;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  width: 100%;
  margin-top: 16px;
  padding: 12px 20px;
  cursor: pointer;
`;

const Populares = () => {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ImagensContainer>
        {populares.map((foto) => (
          <img src={foto.path} key={foto.id} />
        ))}
      </ImagensContainer>
      <Botao>Ver mais</Botao>
    </section>
  );
};

export default Populares;
