import React, { useEffect, useState } from 'react';
import "./SingleProjectCard.css";
function SingleProjectCard(props) {
    let [showProj,setProj]=useState(true);
    let [gitAcc,setGit]=useState(true);
    let [bgColor,setBgColor]=useState("#226076");

    useEffect(()=>{
        if(props.preview==""){
            setProj(false);
            setBgColor("#226C84");
        }
        else{
            setProj(true);
            setBgColor("#226076");
        }
    
        if(props.github==""){
            setGit(false);
            setBgColor("#226C84");
        }
        else{
            setGit(true);
            setBgColor("#226076");
        }
    },[])
    return (
        <div className='singleCardSec'>
            <div className="imgContainer">
                <img src={props.img} alt="" className='' />
            </div>
            <div className="imgInfo">
                <h3>{props.title}</h3>
                <div className="pTag">
                <p className='Carddesc'>{props.desc}</p>
                <p className='Carddesc'>{props.technology}</p>
                </div>
                <div className="Preview">
                    <a href={props.preview} className='previewBtn'>
                        <button style={{backgroundColor:bgColor}} disabled={showProj}>
                            <i class="fa-regular fa-eye iconGap"></i>
                            Preview
                        </button>
                    </a>
                    <a href={props.github} className='previewBtn'>
                        <button style={{backgroundColor:bgColor}} disabled={gitAcc}>Github</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default SingleProjectCard;