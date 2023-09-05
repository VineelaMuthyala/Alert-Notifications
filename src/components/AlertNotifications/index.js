import {Component} from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

class AlertNotifications extends Component {
  render() {
    return (
      <div className="bg-container">
        <h1 className="main-heading">Alert Notifications</h1>
        <Notification>
          <div className="each-notification-container">
            <AiFillCheckCircle
              className="react-icon success-image"
              alt="Success"
            />
            <div className="notification-text">
              <h1 className="notification-heading success">Success</h1>
              <p className="notification-para">
                You can access all the files in the folder
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="each-notification-container">
            <RiErrorWarningFill
              className="react-icon error-image"
              alt="Error"
            />
            <div className="notification-text">
              <h1 className="notification-heading error">Error</h1>
              <p className="notification-para">
                Sorry, you are not authorized to have access to delete the file
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="each-notification-container">
            <MdWarning className="react-icon warning-image" alt="Warning" />
            <div className="notification-text">
              <h1 className="notification-heading warning">Warning</h1>
              <p className="notification-para">
                Viewers of this file can see comments and suggestions
              </p>
            </div>
          </div>
        </Notification>
        <Notification>
          <div className="each-notification-container">
            <MdInfo className="react-icon info-image" alt="Info" />
            <div className="notification-text">
              <h1 className="notification-heading info">Info</h1>
              <p className="notification-para">
                Anyone on the internet can view these files
              </p>
            </div>
          </div>
        </Notification>
      </div>
    )
  }
}

export default AlertNotifications
