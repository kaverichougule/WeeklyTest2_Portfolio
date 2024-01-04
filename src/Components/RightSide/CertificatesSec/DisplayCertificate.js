import React from 'react';
import "./DisplayCertificate.css";
function DisplayCertificate(props) {
    return (
        <div className='CertificateInfo'>
            <div className="disc">
                
            </div>
            <div className="info">
                <h4>{props.title}</h4>
                <div className="imgSec">
                    <p>{props.platform}</p>
                    <div className="certificate">
                        <img src={props.img} alt=""  />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DisplayCertificate;