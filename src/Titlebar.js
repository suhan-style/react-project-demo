const Titlebar = (props) => {
    return(
        <>
            <div className="container-fluid px-0">
              <div className="col-12">
                  <div className="titlebar">
                      <h1>{props.title}</h1>
                  </div>
              </div>
            </div>
        </>
    );
}

export default Titlebar;