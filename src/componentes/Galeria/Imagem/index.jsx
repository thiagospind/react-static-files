import styled from "styled-components";
import iconExpandir from "/icones/expandir.png";

const FigureStyled = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
    }
    h4 {
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Button = styled.button`
  background-color: transparent;
  border: 0px;
`;

const Rodape = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Imagem = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {
  const iconeFavorito = foto.favorita
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <FigureStyled $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt="" />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Rodape>
          <h4>{foto.fonte}</h4>
          <Button>
            <img src={iconeFavorito} onClick={() => aoAlternarFavorito(foto)} />
          </Button>
          {!expandida && (
            <Button>
              <img
                src={iconExpandir}
                aria-hidden={expandida}
                onClick={() => aoZoomSolicitado(foto)}
              />
            </Button>
          )}
        </Rodape>
      </figcaption>
    </FigureStyled>
  );
};

export default Imagem;
