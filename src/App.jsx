// import { useState } from 'react'
import Input from './components/input/input'
import Button from './components/button/Button'
import './App.css'

function App() {
  return (
    <>
      <form action="#" className="inputForm">
        <Input
          label="이름"
          type="text"
          name="name"
          id="name"
          placeholder="2글자 이상 입력"
        />
        <Input
          label="이메일"
          type="email"
          name="email"
          id="email"
          placeholder="user@company.io"
        />
        <Input
          label="패스워드"
          type="password"
          name="password"
          id="password"
          placeholder="숫자, 영문 조합 6자리 이상 입력"
        />
        <Input
          label="패스워드 확인"
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="입력한 패스워드 다시 입력"
        />
      </form>
      <Button message="회원가입" />
    </>
  )
}

export default App
