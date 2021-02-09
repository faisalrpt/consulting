import {NavLink} from 'react-router-dom';
import './serviceComp.css';
const ServiceComp = (props) => {
    return (
        <>
            <div className="inner-box">
                <div className="icon-box">
                {props.icon}
                </div>
                <h5><NavLink to="/service">{props.title}</NavLink></h5>
                <div className="text">{props.disc}</div>
                <NavLink className="read-more" to="/service">More <i class="fas fa-arrow-right"></i></NavLink>
            </div>
        </>
    )
}

export default ServiceComp;