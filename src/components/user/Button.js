import { AddButtonViewer } from "./style/StButton"


export const onAdd = async (inputProps, createUserMutation) => {
  const name = inputProps.nameUseInput.value;
  const email = inputProps.emailUseInput.value;

  await createUserMutation({ variables: { name: name, email: email }});

  window.location.reload();
}

export const AddButton = ({ onClick }) => {
  return (
    <AddButtonViewer onClick={onClick}>저장</AddButtonViewer>
  )
}
