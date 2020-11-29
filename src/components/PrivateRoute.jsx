import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    const isLogin = false;

    return (
        <Route {...rest} render={(props) => isLogin ? <Component {...props}/> : <Redirect to="/login"/> } />
    );
};

export default PrivateRoute;