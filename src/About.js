import Helmet from 'react-helmet';
import Titlebar from './Titlebar';
import aboutImg from './images/about-img.jpg';
const About = () => {
    return(
        <>
            <div>
                <Helmet>
                    <title>About Us</title>
                    <meta name="description" content="Join The Quorum Club for exclusive cultural events, discussions, and entertainment. Also, explore The Q co-working spaces for a dynamic work environment."></meta>
                </Helmet>
            </div>
            <Titlebar title="ABOUT" />
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-6 mb-5">
                        <img src={aboutImg} alt="about-banner" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <div className="title">
                            <h2>Himalay</h2>
                            <div className="sub_title">
                                FRONTEND DEVELOPER
                            </div>
                        </div>
                        <p>
                            We connect brands with their customers through intelligent design & innovation. Our technical expertise and creative nature combine to give you positive digital experiences that bring in the “WOW” factor.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;