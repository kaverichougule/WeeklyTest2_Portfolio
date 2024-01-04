import React from 'react';
import "./Support.css";
function Support(props) {
    return (
        <div className='Supportcss'>
            <a href={props.Src}>
                <div className="SuppimgSec">
                    <img src={props.Img} alt="" className='supportImg' width="5rem" />
                </div>
            </a>
        </div>
    );
}

export default Support;