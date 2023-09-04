import './index.css'

const Notification = props => {
  const {children} = props
  return <div className="notification-container">{children}</div>
}
export default Notification
