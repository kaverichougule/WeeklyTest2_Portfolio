import React from 'react';
import "./EmailDisplay.css";
function EmailDisplay(props) {
    function copyEmail(){
        navigator.clipboard.writeText(props.email);
        alert("Password successfully copied!!");
    }
    return (
        <div className='displayBackground'>
            <p>{props.email}</p>
            <button onClick={copyEmail}>Copy</button>
        </div>
    );
}

export default EmailDisplay;