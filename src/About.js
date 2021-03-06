import Helmet from 'react-helmet';
import Titlebar from './Titlebar';
import aboutImg from './images/about-img.jpg';
const About = () => {
    return(
        <>
            <div>
                <Helmet><title>About</title></Helmet>
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;