function Profile() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-5 mb-3">
                    <h5 className="text-red mb-4"><strong>My Profile</strong></h5>
                    <div className="d-flex align-items-center">
                        <img className="img-profile" src="/img/profile/captainlevi.png"/>
                        <div className="ml-3">
                            <strong className="text-brown">Full Name</strong>
                            <p>Levi Ackerman</p>
                            <strong className="text-brown">Email</strong>
                            <p>levi@aot.com</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7">
                    <h5 className="text-brown mb-4"><strong>My Transaction</strong></h5>
                    <ul className="list-group rounded">{/* transaction */}
                        <li className="list-group-item list-group-item-danger mb-3">
                            <div className="row">
                                <div className="col-md-9">
                                    <ul className="list-group"> {/*product in transaction*/}
                                        <li className="list-group-item list-group-item-danger">
                                            <div className="d-flex align-items-center ">
                                                <img src="/img/product/1.png"/>
                                                <div className="ml-3 text-red">
                                                    <h5><strong>Ice Coffee Palm Sugar</strong></h5>
                                                    <p><strong>Saturday, </strong>5 March 2020</p>
                                                    <p><span className="text-brown">Topping : </span>Bill Berry Boba, Bill Berry Gelatin</p>
                                                    <p><span className="text-brown">Price : </span>Rp. 33.000</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item list-group-item-danger">
                                            <div className="d-flex align-items-center">
                                                <img src="/img/product/1.png"/>
                                                <div className="ml-3 text-red">
                                                    <h5><strong>Ice Coffee Palm Sugar</strong></h5>
                                                    <p className="fs-6"><strong>Saturday, </strong>5 March 2020</p>
                                                    <p><span className="text-brown">Topping : </span>Bill Berry Boba, Bill Berry Gelatin</p>
                                                    <p><span className="text-brown">Price : </span>Rp. 33.000</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-3 text-center">
                                    <img src="/img/logo/WaysBucks.svg" alt="logo"></img>
                                    <img src="/img/profile/qr-code.png" alt="logo" className="img-qrcode mt-4"></img>
                                    <div className="bg-info text-light rounded my-3">On The Way</div>
                                    <p>SubTotal :<br/><strong>Rp. 69.000</strong></p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;