import './Output.css'

export default function Output({ message, isVisible }) {
  if (!isVisible) return

  return (
    <div className="outputContainer">
      <output className="formOutput">{message}</output>
    </div>
  )
}
