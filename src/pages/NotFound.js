import { useHistory } from "react-router-dom";

const NotFound = () => {
    const router = useHistory();
    return (
        <div className="d-flex justify-content-center align-items-center vh-100" >
            <button className="btn btn-danger" onClick={() => router.push("/")}> Kembali ke Home</button>
        </div>
    );
};

export default NotFound;