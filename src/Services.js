import Helmet from 'react-helmet';
import Titlebar from './Titlebar';
import ServiceLeft from './ServiceLeft';
import ServiceRight from './ServiceRight';
import web_design_banner from './images/web-design-banner.jpg';
import web_dev_banner from './images/web-development-banner.jpg';
import graphic_banner from './images/graphic-banner.jpg';

const Services = () => {
    return(
        <>
            <div>
                <Helmet><title>Services</title></Helmet>
            </div>
            <Titlebar title="SERVICES" />
            <div className="container">
                <div className="row">
                    <div className="title text-center">
                        <h2>What we provide?</h2>
                        <div className="sub_title">
                            Lorem Ipsum is simply dummy text
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <ServiceLeft
                    serviceTitle="Web Design"
                    serviceText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imgSrc={web_design_banner}
                />
                <ServiceRight
                    serviceTitle="Web Development"
                    serviceText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imgSrc={web_dev_banner}
                />
                <ServiceLeft
                    serviceTitle="Graphic Design"
                    serviceText="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    imgSrc={graphic_banner}
                />
            </div>
        </>
    );
}

export default Services;