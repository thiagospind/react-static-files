import { styled } from "styled-components";

const FiguraEstilizada = styled.figure`
  background-image: ${(props) => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  border-radius: 20px;
  min-height: 328px;
  margin: 0;
  display: flex;
  align-items: center;
  max-width: 100%;
  background-size: cover;
`;
const TituloEstilizado = styled.h1`
  color: #fff;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  max-width: 300px;
  padding: 0 64px;
`;

const Banner = ({ texto, backgroundImage }) => {
  return (
    <FiguraEstilizada $backgroundImage={backgroundImage}>
      <TituloEstilizado>{texto}</TituloEstilizado>
    </FiguraEstilizada>
  );
};

export default Banner;
