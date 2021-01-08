import {Route, Redirect} from 'react-router-dom';
import {useContext} from "react";
import {AppContext} from "../../context/AppContext";

const PrivateRoute = ({component: Component, ...rest}) => {
    const [state] = useContext(AppContext);
    
    return (
        <Route
            {...rest}
            render = {(props) => {
                if (state.isLogin) {
                    return <Component {...props}/>
                } else {
                    alert('Please Login');
                    return <Redirect to="/" /> 
                }
            }}
        />
    );
};

export default PrivateRoute;