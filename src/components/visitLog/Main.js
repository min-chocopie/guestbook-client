import { useMutation, useQuery } from '@apollo/client';

import { CREATE_LOG, READ_ALL_LOG } from '../../share/gql';
import { AddButton, onAddButton } from './Button';
import { CommentInput, Input, useInput } from './Input';
import { Viewer } from './style/StMain';
import { FormViewer, FormItemContainer } from './style/StInput';
import { Item } from './Item';
import { ItemViewer } from './style/StItem';


const Main = () => {
  const [createLogMutation] = useMutation(CREATE_LOG);
  const { loading, data } = useQuery(READ_ALL_LOG);

  const inputProps = {
    nameUseInput: useInput('이름'),
    passwordUseInput: useInput('비밀번호'),
    commentUseInput: useInput('방명록을 적어주세요'),
  }

  const onAddButtonClick = () => {
    onAddButton(inputProps, createLogMutation);
  }

  if (loading) return <></>;
  return (
    <Viewer>
      <FormViewer>
        <FormItemContainer>
          <Input type='text' {...inputProps.nameUseInput} />
          <Input type='password' {...inputProps.passwordUseInput} />
          <AddButton onClick={onAddButtonClick} />
        </FormItemContainer>
        <FormItemContainer>
          <CommentInput {...inputProps.commentUseInput} />
        </FormItemContainer>
      </FormViewer>
      <ItemViewer>
        { data && data.readAllLog.map((log, idx) => 
          <Item key={idx} data={log} />
        )}
      </ItemViewer>
    </Viewer>
  )
}

export default Main;