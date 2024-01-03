import "./Aside.css";
import ProfileInfo from "./ProfileInfo";
export default function Aside() {
  
  return (
    <div className="aside">
      <img src="https://oktayshakirov.com/assets/images/avatar.jpg" alt="" />
      <h1>Oktay Shakirov</h1>
      <div className="binaryload">
        <p>Hello, World !</p>
      </div>
      <div className="portfolio_Section"> 
        <ProfileInfo />
      </div>
    </div>
  );
}
