import {NavLink} from "react-router-dom";
import "./projectComp.css";
const ProjectComp = (props) => {
    return (
        <>
            <div className="gallery-block">
                <div className="inner-box">
                    <div className="image">
                        <img src={props.imgsrc} alt=" project-img" />
                        <div className="overlay-box">
                            <div className="overlay-inner">
                                <h3><NavLink to="/project">{props.title}</NavLink></h3>
                                <div className="designation">{props.disc}</div>
                                <a href="project-details.html" className="arrow ti-angle-right"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProjectComp;