import { useState } from 'react'
import RandomCountUp from '@/demo/app'

export default function App() {
  return (
    <>
      <label htmlFor="#">입력하세요</label>
      <input type="text" />
      <ul>
        <li>
          <img
            src="./src/assets/joy.webp"
            alt="기쁨"
            width="200"
            height="400px"
          />
        </li>
      </ul>
    </>
  )
}
