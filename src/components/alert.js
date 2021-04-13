import React from "react"

export const Alert = ({message, showAlert}) => {
    console.log(message, showAlert);
    return(
        <div className={showAlert ? "show-alert-container" : "alert-container"}>
            <p>Message {message}</p>
        </div>
    )
}