import './Input.css'

export default function Input({ label, type, name, id, placeholder }) {
  return (
    <div className="inputInfo">
      <label htmlFor="name">{label}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} />
    </div>
  )
}
