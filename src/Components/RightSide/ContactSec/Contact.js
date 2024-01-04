import "./Contact.css";
import ContactData from "./Contact.json";
import EmailDisplay from "./EmailDisplay";
import ScheduleMeet from "./ScheduleMeet";
import Social from "./Social";
import Support from "./Support";
export default function Contact(){
    let filteredContactArr=ContactData.filter((ele)=>{
        if(ele.category==="Email:"){
            return ele;
        }
        else if(ele.category==="Schedule Video Call With Me:"){
            return ele;
        }
        else if(ele.category==="Socials:"){
            return ele;
        }
        else if("Support My Work:"){
            return ele;
        }
    })
    return(
        <div className="ContactSec">
            <h2>Contact</h2>

            <div className="EmailSec">
                <h3>{filteredContactArr[0].category}</h3>
                {
                    filteredContactArr[0].items.map((ele)=>{
                        return(
                            <EmailDisplay email={ele.email} />
                        );
                    })
                }
            </div>


            <div className="EmailSec">
                <h3>{filteredContactArr[1].category}</h3>
                {
                    filteredContactArr[1].items.map((ele)=>{
                        return(
                            <ScheduleMeet meet={ele.meet} />
                        );
                    })
                }
            </div>


            <div className="EmailSec">
                <h3>{filteredContactArr[2].category}</h3>
                <div className="displaySocialIcon">
                    {
                        filteredContactArr[2].items.map((ele)=>{
                            return(
                                <Social Src={ele.Src} Img={ele.Img} />
                            );
                        })
                    }
                </div>
            </div>


            <div className="EmailSec">
                <h3>{filteredContactArr[3].category}</h3>
                <p>{filteredContactArr[3].para}</p>
                    <div className="supportImages">
                    {
                        filteredContactArr[3].items.map((ele)=>{
                            return(
                                <Support Src={ele.Src} Img={ele.Img} />
                            );
                        })
                    }
                    </div>
                
            </div>
        </div>
    );
}