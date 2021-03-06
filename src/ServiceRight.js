const ServiceRight = (props) => {
    return(
        <>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 px-0">
                    <img src={props.imgSrc} alt="services-banner" className="img-fluid" />
                </div>
                <div className="col-md-6 px-0">
                    <h3 className="text-center mb-4 mt-4 mt-md-0">{props.serviceTitle}</h3>
                    <p className="text-center w-75 p-3 mx-auto">{props.serviceText}</p>
                </div>
            </div>
        </>
    );
}

export default ServiceRight;