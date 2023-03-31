import { useState, useEffect } from 'react'
import styles from './Message.module.css'

function Message ({type, msg}) {
  const [visible, setVisible] = useState(false)
  const [mensagem, setMensagem] = useState(msg)
  
  useEffect(() => {
    if(!mensagem) {
      setVisible(false)

      return
    }
    setVisible(true)
    const timer = setTimeout(() => {
      setVisible(false)
      setMensagem('')
      
    },5000)
    return () => clearTimeout(timer)
  }, [mensagem])
    
  return (
    <>
    {visible && (
     
      <div className={`${styles.message} ${styles[type]}`}> {msg} </div>
      )}
    </>
  )
}
export default Message