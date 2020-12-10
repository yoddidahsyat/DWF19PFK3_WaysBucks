function Transaction() {
    return (
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
                    <tr>
                        <td scope="row">1</td>
                        <td>Levi Ackerman</td>
                        <td>Shinganshina</td>
                        <td>696969</td>
                        <td>Rp. 69000</td>
                        <td>On the way</td>
                        <td className="d-flex justify-content-around">
                            <button className="btn btn-sm btn-danger">Cancel</button>
                            <button className="btn btn-sm btn-success">Approve</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Transaction;