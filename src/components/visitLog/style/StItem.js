import styled from 'styled-components';


export const ItemViewer = styled.div`
  width: 800px;
  height: 80%;
  margin-top: 30px;
  padding 10px;

  background: #EEEEEE;

  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: auto;
  scrollbar-width: none;
`

export const ItemContainer = styled.div`
  width: 100%;

  padding: 10px;
  border-bottom: 1px solid #ffffff;
`

export const ItemDiv = styled.div`
  display: fiex;
  display: row;

  align-items: center;

  &:nth-child(odd) {
    margin-bottom: 5px;
  }
`

export const ItemName = styled.div`

`

export const ItemTime = styled.div`
  padding-left: 5px;

  color: #666666; 
  font-size: 12px;
`

export const ItemComment = styled.div`

`