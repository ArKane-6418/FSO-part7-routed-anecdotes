import React from "react"
const Notification = ({ message }) => {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
  
    console.log(message)
    return message ? <div style={style}>{message}</div> : null  
}

export default Notification