import React from 'react'

type InputProps = {
  label: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({ label, ...props }: InputProps) {
  return (
    <>
      <label className="block font-medium mb-1">{label}</label>
      <input {...props} required className="w-full border rounded px-3 py-2" />
    </>
  )
}
