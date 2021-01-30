import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from '../config/api';
import Loading from '../components/Loading';
import Cancel from '../components/transactions/Cancel';
import Complete from '../components/transactions/Complete';
import Status from '../components/transactions/Status';
import UploadPayment from '../components/transactions/UploadPayment';
import { Button } from 'react-bootstrap';

function Profile() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({})
    const router = useHistory();

    const editProfile = () => {
        router.push('/edit-profile');
    }

    const fetchUser = async () => {
        try {
            setLoading(true)
            const response = await API('/user');
            setUser(response.data.data.user);
            setLoading(false);
        } catch (err) {
            console.log(err);
            // alert(err.response.message);
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        loading ? <Loading /> :
        <div className="container">
            <div className="row">
                <div className="col-lg-5 mb-3">
                    <h5 className="text-red"><strong>My Profile</strong></h5>
                    <div className="d-flex align-items-center my-3">
                        { user.avatar === "false" ? <img src="/img/profile/person-circle.png" alt="profile" className="img-profile" />
                            : <img src={user.avatar} alt="profile" className="img-profile" />
                        }
                        <div className="ml-3">
                            <strong className="text-brown">Full Name</strong>
                            <p>{user.name}</p>
                            <strong className="text-brown">Email</strong>
                            <p>{user.email}</p>
                        </div>
                    </div>
                    <Button variant="red" onClick={editProfile} >Edit Profile</Button>
                </div>
                <div className="col-lg-7">
                    <h5 className="text-brown mb-4"><strong>My Transaction</strong></h5>
                    {user.transactions.length < 1 ? <p className="text-secondary">There's no transaction yet</p> : 
                        <ul className="list-group rounded">
                            { user.transactions.map(transaction => // transaction
                                <li className="list-group-item list-group-item-danger mb-3" key={transaction.id} >
                                    <div className="row">
                                        <div className="col-md-9">
                                            <ul className="list-group"> {/*product in transaction*/}
                                                {transaction.transactionProducts.map( transactionProduct => 
                                                    <li className="list-group-item list-group-item-danger" key={transactionProduct.id} >
                                                        <div className="d-flex align-items-center ">
                                                            <img src={transactionProduct.product.image} alt="product" />
                                                            <div className="ml-3 text-red">
                                                                <h5><strong>{transactionProduct.product.name}</strong></h5>
                                                                <p><span className="text-brown">Topping : </span>{transactionProduct.transactionToppings.map(transactionTopping => transactionTopping.topping.name).join(', ')}</p>
                                                                <p><span className="text-brown">SubTotal : </span>Rp. {transactionProduct.transactionToppings.map(transactionTopping => transactionTopping.topping.price).reduce((a, b) => a + b, transactionProduct.product.price)}</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )}
                                            </ul>
                                        </div>
                                        <div className="col-md-3 text-center">
                                            <img src="/img/logo/WaysBucks.svg" alt="logo"></img>
                                            <img src="/img/profile/qr-code.png" alt="logo" className="img-qrcode mt-4"></img>
                                            <p>Total :<br/><strong>Rp. {transaction.income}</strong></p>
                                            <div className="my-3">
                                                <Status status={transaction.status} />
                                                {transaction.status === "PENDING" ?
                                                    <div className="my-5">
                                                        <div>
                                                            <UploadPayment id={transaction.id} refetch={fetchUser} />
                                                        </div>
                                                        <div className="mt-3">
                                                            <Cancel id={transaction.id} refetch={fetchUser} />
                                                        </div>
                                                    </div>
                                                : transaction.status === "PROCESSING" &&
                                                    <div className="my-3">
                                                        <Complete id={transaction.id} refetch={fetchUser} />
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    }
                </div>
            </div>
        </div>
    );
}

export default Profile;