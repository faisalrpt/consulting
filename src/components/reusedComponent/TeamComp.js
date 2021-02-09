import './team.css';
const TeamComp = (props) => {
    return (
        <>
        <div className="team-block col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="inner-box wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
						<div className="image">
							<a href="#"><img src={props.imgSrc} alt={props.imgSrc} /></a>
							<ul className="social-box">
								<li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
								<li><a href="http://facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
								<li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
								<li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
							</ul>
						</div>
						<div className="lower-box mt-0">
							<h4><a href="#">{props.title}</a></h4>
							<div className="designation">{props.disc}</div>
						</div>
					</div>
                    </div>
        </>
    )
}

export default TeamComp;