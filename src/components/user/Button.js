import { AddButtonViewer } from "./style/StButton"


export const onAdd = async (inputProps, createUserMutation) => {
  const name = inputProps.nameUseInput.value;
  const email = inputProps.emailUseInput.value;

  await createUserMutation({ variables: { name: name, email: email }});

  // 이 부분 고쳐야함
  // useQuery랑 useEffect랑 같이 쓰는 방법 찾으면 고칠 것
  window.location.reload();
}

export const AddButton = ({ onClick }) => {
  return (
    <AddButtonViewer onClick={onClick}>저장</AddButtonViewer>
  )
}
