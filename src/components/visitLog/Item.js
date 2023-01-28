import { ItemComment, ItemContainer, ItemDiv, ItemName, ItemTime } from './style/StItem';

export const Item = ({ data }) => {
  const { name, comment, createdAt } = data;
  const date = Date(createdAt).split(' ').slice(0, 4).join(' ')

  return (
    <ItemContainer>
      <ItemDiv>
        <ItemName>{name}</ItemName>
        <ItemTime>{date}</ItemTime>
      </ItemDiv>
      <ItemDiv>
        <ItemComment>{comment}</ItemComment>
      </ItemDiv>
    </ItemContainer>
  )
}