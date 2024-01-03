import { useState } from "react";
import "./About.css";
import data from "./about.json";
import PrimaryFocus from "./PrimaryFocus";
import LangSec from "./LangSec";
export default function About() {
  let [showInfo, setInfo] = useState(false);
  let [btn, setBtnText] = useState("↓ Show more ↓");

  function displayHiddenData() {
    if (showInfo === false) {
      setBtnText("↑ Hide text ↑");
      setInfo(true);
    } else {
      setBtnText("↓ Show more ↓");
      setInfo(false);
    }
  }
  let arr2 = data.filter((ele) => {
    if (ele.category === "Primary Focus") {
      return ele;
    }
    else if(ele.category==="Exploring Creativity"){
        return ele;
    }
    else if(ele.category==="Programming Languages"){
        return ele;
    }
  });

  return (
    <div className="aboutSec">
      <h2>About Me</h2>
      <div className="personalInfo">
        <p>
          Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a
          Full-Stack software developer, I specialize in creating visually
          appealing websites, apps and mobile games. My passion for graphic
          design isn't just a hobby, it's a key ingredient in every project I
          work on.
        </p>
        {showInfo === false ? (
          ""
        ) : (
          <div>
            <p>
              Growing up bilingual, I developed a love for languages and I
              currently speak four of them fluently. I believe that this skill
              has given me a unique perspective and allows me to communicate
              effectively with clients from all over the world. One of my
              strengths is adding a personal touch to my projects by adding the
              client's identity and message into the design, creating meaningful
              and beautiful end products that are both eye-catching and
              user-friendly.
            </p>
            <br />
            <p>
              In my free time, I enjoy exploring my other passions, such as
              photography and music production, which provide me with creative
              outlets. I am also very passionate about Web3 and everything
              related to crypto, NFTs and blockchain technology as I believe
              they have the potential to revolutionize business and online
              interactions.
            </p>
            <br />
            <p>
              If you have an innovative idea for a project that needs to be
              developed, I would love to hear from you. Your vision can be
              turned into a real product. Don't hesitate to reach out and let's
              start a conversation about your concept. I'm excited to
              collaborate and help bring your ideas to life.
            </p>
          </div>
        )}

        <div className="showMore" onClick={displayHiddenData}>
          {btn}
        </div>
      </div>

      <div className="PrimaryFocusSec">
        <h4>Primary Focus</h4>
        <div className="PrimaryFocusCards">
          {
            arr2[0].items.map((ele) => {
            return (
              <PrimaryFocus
                name={ele.name}
                details={ele.details}
                svg={ele.svg}
                id={ele.svg}
              />
            );
          })}
        </div>
      </div>

      <div className="ExploringCreativitySec">
          <h4>Exploring Creativity</h4>
          <div className="PrimaryFocusCards">
            {
                arr2[1].items.map((ele)=>{
                    return <PrimaryFocus name={ele.name} details={ele.details} svg={ele.svg} />
                })
            }
          </div>
      </div>

      <div className="LangSec">
            <h4>Programming Languages</h4>
            <div className="AllLangSec">
                {
                    arr2[2].items.map((ele)=>{
                        return <LangSec name={ele.name} progress={ele.progress} id={ele.id} bgcolor={ele.bgcolor} />
                    })
                }
            </div>
      </div>
    </div>
  );
}
