import {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Login = () => {

    const [state, dispatch] = useContext(AppContext);

    const handleLogin = () => {
        dispatch({
            type: "LOGIN"
        });
    }

    return (
        <div>
            State Login saat ini: {state.isLogin ? "Sedang Login" : "Belum Login"}.
            <button className="btn btn-sm btn-danger pl-5 pr-5 ml-5" onClick={handleLogin}>Login</button>
        </div>
    )
};

export default Login;