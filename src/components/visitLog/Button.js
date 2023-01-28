import { AddButtonViewer } from './style/StButton';
import { validateVisitLog } from './Validation';


export const onAddButton = async (inputProps, createLogMutation) => {
  const name = inputProps.nameUseInput.value;
  const password = inputProps.passwordUseInput.value;
  const comment = inputProps.commentUseInput.value;

  const valid = await validateVisitLog(name, password, comment);
  if (Array.isArray(valid)) alert(valid);
  else {
    await createLogMutation({
      variables: {
        name: name,
        password: password,
        comment: comment
      }
    })

    window.location.reload();
  }
}

export const AddButton = ({ onClick }) => {
  return (
    <AddButtonViewer onClick={onClick}>등록</AddButtonViewer>
  )
}