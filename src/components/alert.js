import React, { useEffect } from "react"

export const Alert = ({message, showAlert, setShowAlert}) => {
    const alertClass = showAlert ? "show-alert-container" : "alert-container"

    useEffect(() => {
        setTimeout(() => {
            setShowAlert(false)
        },4000)
    }, [showAlert])

    return(
        <div className={alertClass} >
            <p>Message {message}</p>
        </div>
    )
}