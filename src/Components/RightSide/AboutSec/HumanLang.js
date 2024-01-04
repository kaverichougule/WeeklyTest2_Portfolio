import React from "react";
import "./HumanLang.css";
const HumanLang=(props)=>{
    const Parentdiv = {
        height: "8px",
        width: "100%",
        backgroundColor: "#383838",
        borderRadius: 40,
    };
    
    const Childdiv = {
        height: "100%",
        width: props.progress + "%",
        backgroundColor: props.bgcolor,
        borderRadius: 40,
        textAlign: "right",
    };
    
    return (
        <div className="MainLangSec">
            <div className="lang">
                <h5>{props.name}</h5>
                <p>{props.proficiency}</p>
            </div>
            <div style={Parentdiv} key={props.id} className="LangSecComp">
                <div style={Childdiv}></div>
            </div>
        </div>
    );
}
export default HumanLang;