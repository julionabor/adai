import styles from './Input.module.css'

function Input ({label, type, name, placeholder}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>
      <input type={type}  
      name={name} 
      placeholder={placeholder} />
    </div>
  )
}
export default Input