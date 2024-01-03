import "./RightSide.css"
import About from "./AboutSec/About";
import Certificate from "./CertificatesSec/Certificate";
import More from "./More/More";
import Project from "./ProjectSec/Project";
import Contact from "./ContactSec/Contact";
import {useState} from 'react';
export default function RightSide(){
    let [pageId,setPage]=useState("about");
    function getId(val){
        setPage(val.target.getAttribute("id"));
    }
    return(
        <div className="rightSide">
            <nav className="Navbar">
                <div className="navContent">
                    <a href="#" id="about" onClick={getId}>About</a>
                    <a href="#" id="certificates" onClick={getId}>Certificates</a>
                    <a href="#" id="projects" onClick={getId}>Projects</a>
                    <a href="#" id="more" onClick={getId}>More</a>
                    <a href="#" id="contact" onClick={getId}>Contact</a>
                </div>
                
            </nav>
            {
                (pageId==="about")? <About /> : (pageId==="certificates")? <Certificate />:(pageId==="projects")? <Project />: (pageId==="more")? <More />: (pageId==="contact")?<Contact />: "No data"
            }
        </div>
    );
}