import React from 'react'
import {connect} from 'react-redux'
import { showNotification } from '../reducers/notificationReducer';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {props.notification}
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
      notification:state.notification,
      showNotification:state.showNotification
    }
}

const mapDispatchToProps = {
  showNotification
}

const ConnectedNotification = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification)

export default ConnectedNotification
