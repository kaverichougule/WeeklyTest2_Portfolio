import { useState } from "react";
import "./aboutme.css";

const Aboutme = () => {
    const [showText, setShowText] = useState("↓ Show more ↓");
  const [aboutHeight, setAboutHeight] = useState("5rem");

  const showHideText = () => {
    if (showText === "↑ Hide text ↑") {
      setShowText("↓ Show more ↓");
      setAboutHeight("5rem");
    } else {
      setShowText("↑ Hide text ↑");
      setAboutHeight("auto");
    }
  };
  return (
    <div className="aboutMe">
          <h1 className="aboutHeading">
            About Me
            <span className="headingBorder"></span>
          </h1>
          <div className="aboutDetailsContainer">
            <p className="aboutContent" style={{ height: aboutHeight }}>
              Hello there! 👋 My name is Kaveri Chougule and I'm from Dhule, India. As
              a Full-Stack software developer, I specialize in creating visually
              appealing websites, apps and mobile games. My passion for graphic
              design isn't just a hobby, it's a key ingredient in every project
              I work on. <br />
              <br />
              Growing up bilingual, I developed a love for languages and I
              currently speak four of them fluently. I believe that this skill
              has given me a unique perspective and allows me to communicate
              effectively with clients from all over the world. One of my
              strengths is adding a personal touch to my projects by adding the
              client's identity and message into the design, creating meaningful
              and beautiful end products that are both eye-catching and
              user-friendly. <br />
              <br />
              In my free time, I enjoy exploring my other passions, such as
              photography and music production, which provide me with creative
              outlets. I am also very passionate about Web3 and everything
              related to crypto, NFTs and blockchain technology as I believe
              they have the potential to revolutionize business and online
              interactions. <br />
              <br />
              If you have an innovative idea for a project that needs to be
              developed, I would love to hear from you. Your vision can be
              turned into a real product. Don't hesitate to reach out and let's
              start a conversation about your concept. I'm excited to
              collaborate and help bring your ideas to life.
            </p>
            <p className="show-hide" onClick={showHideText}>
              {showText}
            </p>
          </div>
        </div>
  )
}

export default Aboutme;
