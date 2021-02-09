import aboutImg from '../../assets/images/home-about.png';
import './aboutComp.css'
const AboutComp = () =>{
    return(
        <>
        <div className="about-section">
		<div className="container">
				<div className="row">
					{/* Image Column  */}
					<div className="image-column col-lg-6">
						<div className="about-image">
							<div className="about-inner-image">
								<img src={aboutImg} className="img-fluid" alt="about" />
							</div>
						</div>
					</div>

					{/* Content Column */}
					<div className="content-column col-lg-6 col-md-12 col-sm-12 mb-0">
						<div className="about-column">
							<div className="sec-title">
								<div className="title">about consulte</div>
								<h2 className="heading">Leading <span>Financial</span> <br /> <span>Consulting</span> Company</h2>
							</div>
							<div className="text">
								<p className="text-justify">Consulte is located in the former rectory of St. Peter’s Episcopal Church. Over our 14 year history, we have treated patients from over 114 different countries in the world. In 2010, we imposed geographical restrictions for the first time. Existing patients were not affected by this change, but new patients are now</p>
								<p>We have compiled an extensive list of other area clinics and health resources, so that when someone calls from outside of our geographical area.</p>
							</div>
						</div>
					</div>
					
				</div>
		</div>
	</div>
        </>
    )
}
export default AboutComp;