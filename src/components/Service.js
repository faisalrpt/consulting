import ServiceData from './Data';
import ServiceComp from './reusedComponent/ServiceComp';
const Service = () => {
    return (
        <>
            <section className="servicesSection">
                <div className="container">
                    <div className="sec-title">
                        <div class="title">our services</div>
                        <h2 class="heading"><span>Best Solutions</span> For Your Business</h2>
                    </div>
                    <div className="row">
                        {
                            ServiceData.map((itemData, i) =>
                                <>
                                    <div key={i} className="col-lg-3 col-md-6 col-sm-12 service-block">
                                        <ServiceComp icon={itemData.icon} title={itemData.title} disc={itemData.disc} />
                                    </div>
                                </>
                            )
                        }

                    </div>
                </div>
            </section>
        </>
    )
}
export default Service;