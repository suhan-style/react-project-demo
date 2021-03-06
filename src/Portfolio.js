import Helmet from 'react-helmet';
import Titlebar from './Titlebar';
import Portf from './Portf';
import Portdata from './Portdata';

const nPortfolio = (val, ind) => {
    // console.log(val);
    return(
        <Portf key={ind} imgsrc={val.imagesrc} title={val.title} />
    );
}

const Portfolio = () => {
    return(
        <>
            <div>
                <Helmet><title>Portfolio</title></Helmet>
            </div>
            <Titlebar title="PORTFOLIO" />
            <div className="container">
                <div className="row">
                    <div className="title text-center">
                        <h2>Our works</h2>
                        <div className="sub_title">
                            Lorem Ipsum is simply dummy text
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    {Portdata.map(nPortfolio)}
                </div>
            </div>
        </>
    );
}

export default Portfolio;