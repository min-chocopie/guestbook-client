import * as yup from 'yup';


export const visitLogSchema = yup.object().shape({
  name: yup.string()
    .min(2, '닉네임은 2글자 이상이어야 합니다.')
    .max(20, '닉네임은 20글자 이하여야 합니다.')
    .required('닉네임을 입력해주세요.'),

  password: yup.string()
    .min(4, '비밀번호는 4글자 이상이어야 합니다.')
    .required('비밀번호를 입력해주세요.'),

  comment: yup.string()
    .min(1, '방명록은 1글자 이상이어야 합니다.')
    .required('방명록을 입력해주세요.')
})

export const validateVisitLog = async (name, password, comment) => {
  return await visitLogSchema.validate({
    name: name,
    password: password,
    comment: comment
  }).catch((err) => {
    return err.errors;
  })
}