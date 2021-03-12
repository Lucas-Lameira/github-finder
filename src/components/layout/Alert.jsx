import { useContext } from 'react'
import { FiAlertCircle} from 'react-icons/fi'
import AlertContext from '../../context/alert/alertContext';

export default function Alert () {
  const alertContext = useContext(AlertContext)
  const { alert} = alertContext;
  return (

    alert !== null && (
      <div /* className={`alert alert-${alert.classType}`} */>
        <FiAlertCircle /> {alert.message}
      </div>
    )
  )
}