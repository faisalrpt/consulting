import { NavLink } from 'react-router-dom';
import slide1 from '../assets/images/banner/b1.jpg';
import slide2 from '../assets/images/banner/b2.jpg';
import slide3 from '../assets/images/banner/b3.png';
import AboutComp from './reusedComponent/AboutComp';
import ServiceData from './Data';
import ServiceComp from './reusedComponent/ServiceComp';
import ProjectComp from './reusedComponent/ProjectComp';
import projectImg1 from '../assets/images/project-img1.jpg';
import projectImg2 from '../assets/images/project-img2.jpg';
import projectImg3 from '../assets/images/project-img3.jpg';
import projectImg4 from '../assets/images/project-img4.jpg';
import TeamComp from './reusedComponent/TeamComp';
import teamImg1 from '../assets/images/team/team-1.jpg';
import teamImg2 from '../assets/images/team/team-2.jpg';
import teamImg3 from '../assets/images/team/team-3.jpg';

import BlogComp from "./reusedComponent/BlogComp";


const Home = () =>{
    return(
        <>
        <section className="hero-banner">
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={slide3} className="img-fluid" alt="slide_img" />
      <div className="carousel-caption">
          <p className="title">consulte company</p>
      <p className="h1 heading">Clever <span>Investing</span> Make Your Money Grow</p>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum. nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <NavLink className="primaryBtn" to="/about">Work With Us</NavLink>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slide2} className="img-fluid" alt="slide_img" />
      <div className="carousel-caption">
          <p className="title">consulte company</p>
      <p className="h1 heading">Clever <span>Investing</span> Make Your Money Grow</p>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum. nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <NavLink className="primaryBtn" to="/about">Work With Us</NavLink>
      </div>
    </div>
    <div className="carousel-item">
      <img src={slide1} className="img-fluid" alt="slide_img" />
      <div className="carousel-caption">
          <p className="title">consulte company</p>
      <p className="h1 heading">Clever <span>Investing</span> Make Your Money Grow</p>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum. nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <NavLink className="primaryBtn" to="/about">Work With Us</NavLink>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    {/* <span className="visually-hidden"></span> */}
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    {/* <span className="visually-hidden">Next</span> */}
  </a>
</div>
</section>
<AboutComp />

<section className="servicesSection">
  <div className="container">
  <div className="sec-title">
				<div class="title">our services</div>
				<h2 class="heading"><span>Best Solutions</span> For Your Business</h2>
			</div>
    <div className="row">
      {
        ServiceData.map((itemData, i)=>
        <>
        <div key={i} className="col-lg-3 col-md-6 col-sm-12 service-block">
        <ServiceComp  icon={itemData.icon} title={itemData.title} disc={itemData.disc} />
        </div>
        </>
        )
      }
      
    </div>
  </div>
</section>

<section className="projectGallry">
  <div className="container my-5">
  <div className="sec-title">
				<div className="clearfix">
						<div className="title">latest projects</div>
						<h2 class="heading">See Our <span>Successful Businesses</span></h2>
				</div>
			</div>
  
  <div className="row">
  <div className="column col-lg-6 col-md-12 col-sm-12">
  <div className="row clearfix">
  <div className="inner-column col-lg-6 col-md-6 col-sm-12">
    <ProjectComp  imgsrc ={projectImg2} title="WOTa Money Save" disc="Finance, Consulting"/>
  </div>
  <div className="inner-column col-lg-6 col-md-6 col-sm-12">
    <ProjectComp  imgsrc ={projectImg3} title="WOTa Money Save" disc="Finance, Consulting"/>
  </div>
  <div className="inner-column col-lg-12 col-md-12 col-sm-12">
  <ProjectComp  imgsrc ={projectImg4} title="WOTa Money Save" disc="Finance, Consulting"/>
  </div>
  </div>
  </div>
  <div className="column col-lg-6 col-md-12 col-sm-12">
  <ProjectComp  imgsrc ={projectImg1} title="WOTa Money Save" disc="Finance, Consulting"/>
  </div>

  </div>
  </div>
</section>
<section className="team">
  <div className="container">
  <div class="sec-title"><div class="title">our Team</div><h2 class="heading"> We Are <span>Friendly & Profressional</span></h2></div>
   <div className="row">
       <TeamComp imgSrc={teamImg1} title="Edward Eric Jr" disc="Business & Financial Expert"/>
       <TeamComp imgSrc={teamImg2} title="Tom Holland" disc="Logistic & Communication Expert"/>
       <TeamComp imgSrc={teamImg3} title="Laura Erakovic" disc="Consumer Market Expert"/>
   </div>
  </div>
</section>

<section className="blog-section">
    <BlogComp />
</section>


        </>
    )
}
export default Home;