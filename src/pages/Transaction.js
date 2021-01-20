import { useEffect, useState } from 'react';
import { API } from '../config/api';
import Status from '../components/transactions/Status';
import ViewPayment from '../components/transactions/ViewPayment';
import Loading from '../components/Loading';

function Transaction() {

    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTransactions = async () => {
        try {
            setLoading(true);
            const response = await API('/transactions');
            setTransactions(response.data.data.transactions);
            setLoading(false);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchTransactions();
    }, [])


    return loading ? <Loading /> :
        <div className="container">
            <h3 className="text-red">Income Transaction</h3>
            <table className="table my-4">
                <thead className="bg-danger text-light">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Post Code</th>
                        <th scope="col">Income</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, i) => 
                        <tr key={transaction.id}>
                            <td>{i + 1}</td>
                            <td>{transaction.name}</td>
                            <td>{transaction.address}</td>
                            <td>{transaction.postCode}</td>
                            <td>Rp. {transaction.income}</td>
                            <td className="text-center"><Status status={transaction.status} /></td>
                            <td className="text-center">
                                {transaction.status === "WAITING" ?
                                    <ViewPayment id={transaction.id} image={transaction.attachment} refetch={fetchTransactions} />
                                : transaction.status === "COMPLETED" ?
                                    <img src="/img/success.svg" alt="success" />
                                : transaction.status === "CANCELED" ?
                                    <img src="/img/cancel.svg" alt="cancel" />
                                : <img src="/img/waiting.svg" alt="waiting" />
                                }
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
}

export default Transaction;