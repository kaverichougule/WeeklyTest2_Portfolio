import "./PrimaryFocus.css";
export default function PrimaryFocus(props){
    return(
        <div className="SinglePrimaryCard">
            <div className="icon">
                <img src={props.svg} alt="" />
            </div>
            <div className="cardInfo">
                <h4>{props.name}</h4>
                <p>{props.details}</p>
            </div>
        </div>
    );
}