import { isValidElement, useState } from 'react'
import Input from './components/input/input'
import Button from './components/button/Button'
import Output from './components/output/Output'
import './App.css'

function App() {
  const [signUpForm, setSignUpForm] = useState({
    signUpName: '',
    signUpEmail: '',
    signUpPassword: '',
    confirmPassword: '',
  })

  const [signInForm, setSignInForm] = useState({
    signInEmail: '',
    signInPassword: '',
  })

  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  function handleChange(e) {
    const { name, value } = e.target

    setSignUpForm((prev) => ({ ...prev, [name]: value }))
    setSignInForm((prev) => ({ ...prev, [name]: value }))

    if (name === 'signUpName') {
      setErrorMessage((prev) => ({
        ...prev,
        signUpName: value.length < 2 ? '2글자 이상 입력해주세요' : '',
      }))
    }
    if (name === 'signUpEmail') {
      setErrorMessage((prev) => ({
        ...prev,
        signUpEmail: !value.includes('@')
          ? '이메일 형식이 올바르지 않습니다.'
          : '',
      }))
    }
    if (name === 'signInEmail') {
      setErrorMessage((prev) => ({
        ...prev,
        signInEmail: !value.includes('@')
          ? '이메일 형식이 올바르지 않습니다.'
          : '',
      }))
    }
    if (name === 'signUpPassword') {
      setErrorMessage((prev) => ({
        ...prev,
        signUpPassword:
          value.length < 6 || !/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)
            ? '숫자, 영문을 포함하여 6자리 이상이 되게 입력해주세요'
            : '',
      }))
    }
    if (name === 'signInPassword') {
      setErrorMessage((prev) => ({
        ...prev,
        signInPassword:
          value.length < 6 || !/[a-zA-Z]/.test(value) || !/[0-9]/.test(value)
            ? '숫자, 영문을 포함하여 6자리 이상이 되게 입력해주세요'
            : '',
      }))
    }
    if (name === 'confirmPassword') {
      setErrorMessage((prev) => ({
        ...prev,
        confirmPassword:
          value !== signUpForm.signUpPassword
            ? '비밀번호가 일치하지 않습니다.'
            : '',
      }))
    }
  }

  return (
    <>
      <form action="#" className="inputForm">
        <Input
          label="이름"
          type="text"
          name="signUpName"
          id="signUpName"
          placeholder="2글자 이상 입력"
          value={signUpForm.signUpName}
          onChange={handleChange}
        />
        <Output
          message={errorMessage.signUpName}
          isVisible={!!errorMessage.signUpName}
        />
        <Input
          label="이메일"
          type="email"
          name="signUpEmail"
          id="signUpEmail"
          placeholder="user@company.io"
          value={signUpForm.signUpEmail}
          onChange={handleChange}
        />
        <Output
          message={errorMessage.signUpEmail}
          isVisible={!!errorMessage.signUpEmail}
        />
        <Input
          label="패스워드"
          type="password"
          name="signUpPassword"
          id="signUpPassword"
          placeholder="숫자, 영문 조합 6자리 이상 입력"
          value={signUpForm.signUpPassword}
          onChange={handleChange}
        />
        <Output
          message={errorMessage.signUpPassword}
          isVisible={!!errorMessage.signUpPassword}
        />
        <Input
          label="패스워드 확인"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="입력한 패스워드 다시 입력"
          value={signUpForm.confirmPassword}
          onChange={handleChange}
        />
        <Output
          message={errorMessage.confirmPassword}
          isVisible={!!errorMessage.confirmPassword}
        />
      </form>
      <Button sign="회원가입" onClick={isValidElement} />

      <form action="#" className="inputForm">
        <Input
          label="이메일"
          type="email"
          name="signInEmail"
          id="signInEmail"
          placeholder="user@company.io"
          value={signInForm.signInEmail}
          onChange={handleChange}
        />
        <Output
          message={errorMessage.signInEmail}
          isVisible={!!errorMessage.signInEmail}
        />
        <Input
          label="패스워드"
          type="password"
          name="signInPassword"
          id="signInPassword"
          placeholder="숫자, 영문 조합 6자리 이상 입력"
          value={signInForm.signInPassword}
          onChange={handleChange}
        />
        <Output
          message={errorMessage.signInPassword}
          isVisible={!!errorMessage.signInPassword}
        />
      </form>
      <Button sign="로그인" onClick={isValidElement} />
    </>
  )
}

export default App
