import "./Project.css";
import ProjectData from "./ProjectData.json";
import SingleProjectCard from "./SingleProjectCard";
export default function Project(){
    
    return(
        <div className="ProjectSec">
            <h2>My Projects</h2>
            <nav className="ProjectNav">
                <p className="active">All</p>
                <p>Website</p>
                <p>Applications</p>
                <p>Games</p>
            </nav>

            <div className="myAllProjects">
                {
                    ProjectData.map((ele)=>{
                        return <SingleProjectCard img={ele.img} title={ele.title} desc={ele.desc} technology={ele.technology} preview={ele.preview} github={ele.github} projectLink={ele.projectLink} />
                    })
                }
            </div>
        </div>
    );
}