import './Button.css'

export default function Button({ sign }) {
  return (
    <button className="signButton" type="submit">
      {sign}
    </button>
  )
}
