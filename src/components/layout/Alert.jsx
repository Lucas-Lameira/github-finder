import { FiAlertCircle} from 'react-icons/fi'

export default function Alert ({alert}) {
  return (

    alert !== null && (
      <div className={`alert alert-${alert.classType}`}>
        <FiAlertCircle /> {alert.message}
      </div>
    )
  )
}