const Portf = (props) => {
    return(
        <>
            <div className="col-md-4">
                <figure className="mb-5">
                    <img src={props.imgsrc} alt="portfolio_thumb" className="img-fluid" />
                    <figcaption className="portfolio_desc">{props.title}</figcaption>
                </figure>
            </div>
        </>
    );
}

export default Portf;