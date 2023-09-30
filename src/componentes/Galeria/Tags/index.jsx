import { styled } from "styled-components";
import tags from "./tags.json";

const TextoTags = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  font-weight: 400;
`;
const TagEstilizada = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Div = styled.div`
  display: flex;
  // Adiciona espaçamento horizontal de 24px entre os elementos (botões), nesse caso.
  gap: 24px;
  margin: 0;
`;

const TagsContainer = styled.section`
  display: flex;
  //Alinhamento vertical
  align-items: center;
  // Adiciona espaçamento entre os elementos de um container flexivel (flex) ou grade (grid)
  gap: 64px;
  margin-top: 56px;
  // Permite que o container cresça quando tiver espaço
  flex-grow: 1;
`;

const Tags = ({ setTag }) => {
  return (
    <TagsContainer>
      <TextoTags>Busque por tags: </TextoTags>
      <Div>
        {tags.map((tag) => (
          <TagEstilizada key={tag.id} onClick={() => setTag(tag.tag)}>
            {tag.titulo}
          </TagEstilizada>
        ))}
      </Div>
    </TagsContainer>
  );
};

export default Tags;
