import TeamComp from './reusedComponent/TeamComp';
import teamImg1 from '../assets/images/team/team-1.jpg';
import teamImg2 from '../assets/images/team/team-2.jpg';
import teamImg3 from '../assets/images/team/team-3.jpg';
import aboutImg1 from '../assets/images/about1.jpg';
import AboutComp from './reusedComponent/AboutComp';
const About = () =>{
    return(
        <>
        <img className="img-fluid" src={aboutImg1} alt="aboutImg1" />
        <AboutComp />
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
        </>
    )
}
export default About;