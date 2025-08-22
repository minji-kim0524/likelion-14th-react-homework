import './Button.css'

export default function Button({ message }) {
  return (
    <button className="signButton" type="submit">
      {message}
    </button>
  )
}
