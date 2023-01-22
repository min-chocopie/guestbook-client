import { useMutation, useQuery } from '@apollo/client';

import { useInput } from './Input';
import { AddUserViewer, Viewer } from './style/StMain';
import { Input } from './Input';
import { AddButton, onAdd } from './Button';
import { CREATE_USER, READ_ALL_USER } from '../../share/gql';


const Main = () => {
  const [createUserMutation] = useMutation(CREATE_USER);
  const { loading, data } = useQuery(READ_ALL_USER);

  const inputProps = {
    nameUseInput: useInput('이름'),
    emailUseInput: useInput('이메일'),
  }

  const onAddClick = () => {
    onAdd(inputProps, createUserMutation);
  }

  if (loading) return <></>; 
  return (
    <Viewer>
      <AddUserViewer>
        <Input type='name' {...inputProps.nameUseInput} />
        <Input type='email' {...inputProps.emailUseInput} />
        <AddButton onClick={onAddClick} />
      </AddUserViewer>
      {data.readAllUser.map((user) => (
        <div key={user.id}>이름: {user.name} 이메일: {user.email}</div>
      ))}
    </Viewer>
  )
}

export default Main;