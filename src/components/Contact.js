import { useState } from "react";

const Contact = () => {
	const [data, setData] = useState({
		name:'',
		email: '',
		subject: '',
		msg: ''
	})

const formData = (e) =>{
	const {name, value} = e.target;
	setData((preVal)=>{
		return{
			...preVal,
			[name]: value,
		}
	})

}
const formSubmit = (e)=>{
	e.preventDefault();
	alert(`Your request is successfully submitted`)

}

	return (
		<>
			<section className="contact my-5">
				<div className="container">
					<div className="sec-title">
						<div className="title">CONTACT US</div>
						<h2 className="heading"><span>We Always Here</span> To Help You</h2>
					</div>
					<div className="row">
						<div className="col-sm-6">
							<div className="companyContact">
								<h3>Delhi, <b>India</b></h3>
								<address>849 Diamond Str, 07th Floor, NY 10012, South Delhi,
                                India</address>
								<h4>CALL DIRECTLY:</h4>
								<h2><b>+91 987-654-3210</b></h2>
								<h4>Email: info@financialcoulting.com</h4>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="contact-form">
								<form onSubmit={formSubmit}>
									<div className="row">
										<div className="col-sm-12 form-group">
											<input type="text" className="form-control" value={data.name} name="name" onChange={formData} placeholder="Name" required="" />
										</div>

										<div className="col-sm-12 form-group">
											<input type="email" name="email" value={data.email} className="form-control" onChange={formData} placeholder="Emaill Address" required="" />
										</div>

										<div className="col-sm-12 form-group">
											<input type="text" className="form-control" value={data.subject} name="subject" onChange={formData} placeholder="Subject" required="" />
										</div>

										<div className="col-lg-12 col-md-12 col-sm-12 form-group">
											<textarea name="msg" rows="4" value={data.msg} className="form-control" onChange={formData} placeholder="Message"></textarea>
										</div>

										<div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
											<button class="primaryBtn" type="submit" name="submit-form"><span className="txt">Send Message</span></button>
										</div>

									</div>
								</form>
								<p className="form-messege"></p>

							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default Contact;