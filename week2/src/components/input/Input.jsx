import './Input.css'

export default function Input({ label, ...props }) {
  return (
    <div className="inputInfo">
      <label>{label}</label>
      <input {...props} required />
    </div>
  )
}
