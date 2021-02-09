import ProjectComp from './reusedComponent/ProjectComp';
import projectImg1 from '../assets/images/project-img1.jpg';
import projectImg2 from '../assets/images/project-img2.jpg';
import projectImg3 from '../assets/images/project-img3.jpg';
import projectImg4 from '../assets/images/project-img4.jpg';
const Project = () => {
    return (
        <>
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
                                    <ProjectComp imgsrc={projectImg2} title="WOTa Money Save" disc="Finance, Consulting" />
                                </div>
                                <div className="inner-column col-lg-6 col-md-6 col-sm-12">
                                    <ProjectComp imgsrc={projectImg3} title="WOTa Money Save" disc="Finance, Consulting" />
                                </div>
                                <div className="inner-column col-lg-12 col-md-12 col-sm-12">
                                    <ProjectComp imgsrc={projectImg4} title="WOTa Money Save" disc="Finance, Consulting" />
                                </div>
                            </div>
                        </div>
                        <div className="column col-lg-6 col-md-12 col-sm-12">
                            <ProjectComp imgsrc={projectImg1} title="WOTa Money Save" disc="Finance, Consulting" />
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Project;