import { AddButtonViewer } from "./style/StButton"


export const onAdd = (inputProps, createUserMutation) => {
  const name = inputProps.nameUseInput.value;
  const email = inputProps.emailUseInput.value;

  createUserMutation({ variables: { name: name, email: email }});
}

export const AddButton = ({ onClick }) => {
  return (
    <AddButtonViewer onClick={onClick}>저장</AddButtonViewer>
  )
}
