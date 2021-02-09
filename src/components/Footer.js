import { NavLink } from 'react-router-dom';
import '../assets/css/footer.css';
const Footer = () =>{
    return(
        <>
        <footer className="main-footer">
		<div className="container">
            <div className="widgets-section">
            	<div className="row clearfix">
                    <div className="big-column col-lg-6 col-md-12 col-sm-6 col-12">
						<div className="row clearfix">
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget logo-widget">
									<div className="logo">
                                        <h4><NavLink to="/">Consulting</NavLink></h4>
									</div>
									<div className="call">
										Call us directly
										<a className="phone" href="#">+91 987-654-3210</a>
										<a className="email" href="#">info@financialcoulting.com</a>
									</div>
								</div>
							</div>
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
									<h5>Company</h5>
									<ul className="list-link">
                                        <li><NavLink className="link" to="/">Home</NavLink></li>
										<li><NavLink className="link" to="/about">About Us</NavLink></li>
										<li><NavLink className="link" to="/service">Service</NavLink></li>
										<li><NavLink className="link" to="/project">Project</NavLink></li>
										<li><NavLink className="link" to="/blog">Blog</NavLink></li>
										<li><NavLink className="link" to="/contact">Contact Us</NavLink></li>
									</ul>
								</div>
							</div>
							
						</div>
					</div>
                    <div className="big-column col-lg-6 col-md-12 col-sm-6 col-12">
						<div className="row clearfix">
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget links-widget">
									<h5>Quick Links</h5>
									<ul className="list-link">
										<li><a className="link" href="javaScrit:void(0);">FAQS</a></li>
										<li><a className="link" href="javaScrit:void(0);">Support</a></li>
										<li><a className="link" href="javaScrit:void(0);">Sitemap</a></li>
										<li><a className="link" href="javaScrit:void(0);">Community</a></li>
									</ul>
								</div>
							</div>
                            <div className="footer-column col-lg-6 col-md-6 col-sm-12">
                                <div className="footer-widget newsletter-widget">
									<h5>Our Newsletter</h5>
									<div className="text">Subscribe to our newsletter and we will inform you about latest updates and offers</div>
									<div className="newsletter-form">
										<form>
											<div className="form-group">
												<input type="email" name="email" value="" placeholder="Email Address..." required="" />
												<button type="submit" className="theme-btn icofont-arrow-right"><i class="fas fa-arrow-right"></i></button>
											</div>
										</form>
									</div>
								</div>
							</div>
							
						</div>
					</div>
					
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="bottom-inner">
						<div className="row clearfix">
							
							<div className="col-lg-8 col-md-12 col-sm-12">
								<div className="copyright">© 2021 <strong>Financial Consulting</strong></div>
							</div>
							
							<div className="col-lg-4 col-md-12 col-sm-12">
								<ul className="social-nav">
									<li><a href="https://twitter.com/" className="icofont-twitter"></a></li>
									<li><a href="http://facebook.com/" className="icofont-facebook"></a></li>
									<li><a href="https://www.instagram.com/" className="icofont-instagram"></a></li>
									<li><a href="https://rss.com/" className="icofont-rss"></a></li>
									<li><a href="https://www.youtube.com/" className="icofont-play-alt-1"></a></li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>	
			</div>
			
		</div>
	</footer>
        </>
    )
}

export default Footer;