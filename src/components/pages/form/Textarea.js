import styles from './Textarea.module.css'

function Textarea ({label, type, name, placeholder,onChange,value}) {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{label}</label>
      <textarea type={type}  
      name={name} 
      placeholder={placeholder}
      onChange={onChange} 
      value={value}
      />
    </div>
  )
}
export default Textarea