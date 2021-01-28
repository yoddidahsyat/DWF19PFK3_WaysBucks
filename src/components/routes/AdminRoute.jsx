import {Route, Redirect} from 'react-router-dom';
import {useContext} from "react";
import {AppContext} from "../../context/AppContext";
import Swal from 'sweetalert2';

const PrivateRoute = ({component: Component, ...rest}) => {
    const [state] = useContext(AppContext);

    
    return (
        <Route
            {...rest}
            render = {(props) => {
                    if (state.isLogin && state.user.role === "admin") {
                        return <Component {...props}/>
                    } else {
                        Swal.fire(
                            'Access denied',
                            'Please login',
                            'error'
                        );
                        return <Redirect to="/" /> 
                    }
                }}
        />
    );
};

export default PrivateRoute;