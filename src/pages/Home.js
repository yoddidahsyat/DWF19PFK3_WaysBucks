import {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Home = () => {
    const [hari] = useContext(AppContext);
    return <div>ini adalah hari: {hari}.</div>
};

export default Home;