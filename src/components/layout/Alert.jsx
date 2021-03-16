import { useContext } from 'react'
import { FiAlertCircle} from 'react-icons/fi'
import AlertContext from '../../context/alert/alertContext';
import styles from '../../styles/components/Alert.module.css';

export default function Alert () {
  const alertContext = useContext(AlertContext)
  const { alert} = alertContext;
  return (

    alert !== null && (
      <div className={styles.alert}>
        <FiAlertCircle color="red"/>{'-'}{alert.message}        
      </div>
    )
  )
}