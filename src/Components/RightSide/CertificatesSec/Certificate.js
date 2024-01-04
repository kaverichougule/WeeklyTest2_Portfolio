import certificateData from "./Certificate.json";
import "./Certificate.css";
import DisplayCertificate from "./DisplayCertificate";
export default function Certificate(){
    let FilteredCertificate=certificateData.filter((ele)=>{
        if(ele.category==="Technical Competence"){
            return ele;
        }
        else if(ele.category==="Professional Skills"){
            return ele;
        }
        else if(ele.category==="Language Proficiency"){
            return ele;
        }
    })
    console.log(FilteredCertificate);
    return(
        <div className="certificateSec">
            <h2>My Certificates</h2>

            <div className="CertificateSec1">
                <div className="CertSec1heading">
                    <div className="Hed1icons">
                        <i className={FilteredCertificate[0].icon}></i>
                    </div>
                    <h3>{FilteredCertificate[0].category}</h3>
                </div>
                <div>
                    {
                        FilteredCertificate[0].items.map((ele)=>{
                            return (
                                <DisplayCertificate title={ele.title} platform={ele.platform} img={ele.img} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="CertificateSec1">
                <div className="CertSec1heading">
                    <div className="Hed1icons">
                        <i className={FilteredCertificate[1].icon}></i>
                    </div>
                    <h3>{FilteredCertificate[1].category}</h3>
                </div>
                <div>
                    {
                        FilteredCertificate[1].items.map((ele)=>{
                            return (
                                <DisplayCertificate title={ele.title} platform={ele.platform} img={ele.img} />
                            )
                        })
                    }
                </div>
            </div>

            <div className="CertificateSec1">
                <div className="CertSec1heading">
                    <div className="Hed1icons">
                        <i className={FilteredCertificate[2].icon}></i>
                    </div>
                    <h3>{FilteredCertificate[2].category}</h3>
                </div>
                <div>
                    {
                        FilteredCertificate[2].items.map((ele)=>{
                            return (
                                <DisplayCertificate title={ele.title} platform={ele.platform} img={ele.img} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}