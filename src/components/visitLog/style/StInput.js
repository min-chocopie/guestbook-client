import styled from 'styled-components';


export const FormViewer = styled.div`
  width: 800px;
  padding: 15px;

  background: #EEEEEE;
`

export const FormItemContainer = styled.div`
  display: row;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputViewer = styled.input`
  padding: 5px;

  &:nth-child(1) {
    margin-right: 10px;
  }

  outline: none;
  border: none;

  color: #666666; 
`

export const CommentInputViewer = styled.textarea` 
  padding: 5px;
  margin: 10px 0 0 0;

  width: 100%;
  height: 100px;

  outline: none;
  border: none;
  resize: none;

  color: #666666; 

  font-size: 14px;
`
