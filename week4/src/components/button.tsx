import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sign: string
}

export default function Button({ sign, ...props }: ButtonProps) {
  return (
    <button {...props} className="border rounded px-3 py-2 cursor-pointer">
      {sign}
    </button>
  )
}
