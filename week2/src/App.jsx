import { isValidElement, useState } from 'react'
import Input from './components/input/input'
import Button from './components/button/Button'
import Output from './components/output/Output'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [errorMessage, setErrorMessage] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  function handleChange(e) {
    const { name, value } = e.target

    setForm((prev) => ({ ...prev, [name]: value }))

    if (name === 'name') {
      setErrorMessage((prev) => ({
        ...prev,
        name: value.length < 2 ? '2글자 이상 입력해주세요' : '',
      }))
    }
    if (name === 'email') {
      setErrorMessage((prev) => ({
        ...prev,
        email: !value.includes('@') ? '이메일 형식이 올바르지 않습니다.' : '',
      }))
    }
    if (name === 'password') {
      setErrorMessage((prev) => ({
        ...prev,
        password: value.length < 6 ? '6자리 이상이 되게 입력해주세요' : '',
      }))
    }
    if (name === 'confirmPassword') {
      setErrorMessage((prev) => ({
        ...prev,
        confirmPassword:
          value !== form.password ? '비밀번호가 일치하지 않습니다.' : '',
      }))
    }
  }

  return (
    <>
      <form action="#" className="inputForm">
        <Input
          label="이름"
          type="text"
          name="name"
          id="name"
          placeholder="2글자 이상 입력"
          value={form.name}
          onChange={handleChange}
        />
        <Output message={errorMessage.name} isVisible={!!errorMessage.name} />
        <Input
          label="이메일"
          type="email"
          name="email"
          id="email"
          placeholder="user@company.io"
          value={form.email}
          onChange={handleChange}
        />
        <Output message={errorMessage.email} isVisible={!!errorMessage.email} />
        <Input
          label="패스워드"
          type="password"
          name="password"
          id="password"
          placeholder="숫자, 영문 조합 6자리 이상 입력"
          value={form.password}
          onChange={handleChange}
        />
        <Output
          message={errorMessage.password}
          isVisible={!!errorMessage.password}
        />
        <Input
          label="패스워드 확인"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="입력한 패스워드 다시 입력"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <Output
          message={errorMessage.confirmPassword}
          isVisible={!!errorMessage.confirmPassword}
        />
      </form>
      <Button sign="회원가입" onClick={isValidElement} />
    </>
  )
}

export default App
