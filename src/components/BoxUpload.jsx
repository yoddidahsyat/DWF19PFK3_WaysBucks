
function BoxUpload({type}) {
    return (
        <div className="d-flex align-items-center justify-content-center" >
            <img src="/img/box/box-striped.svg" alt="box" className="img-fluid" />
            <div className="position-absolute">
                <img src="/img/box/cloud-computing.svg" alt="cloud" className="img-fluid" />
                <h5 className="text-center text-secondary"><span className="text-danger">Upload</span> {type} Photo</h5>
            </div>
        </div>
    );
}

export default BoxUpload;