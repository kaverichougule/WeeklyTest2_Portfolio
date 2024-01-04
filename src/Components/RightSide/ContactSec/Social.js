import React from 'react';
import "./Social.css";
function Social(props) {
    return (
        <div>
            <a href={props.Src}>
                <img src={props.Img} alt="" />
            </a>
        </div>
    );
}

export default Social;