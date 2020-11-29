import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Cart = () => {
    const [hari] = useContext(AppContext);

    return <div>ini adalah cart di hari: {hari}.</div>
};

export default Cart;