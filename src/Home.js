import Helmet from 'react-helmet';
import banner from "./images/home-banner.png";
const Home = () => {
    return(
        <>
            <div>
                <Helmet>
                    <title>Home</title>
                    <meta name='description' content='This is my Home Page' />
                </Helmet>
            </div>
            <div className="home_banner">
                <img src={banner} alt="banner" className="img-fluid" />
            </div>
        </>
    );
}

export default Home;