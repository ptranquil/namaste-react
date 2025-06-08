import { Outlet } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import UserContext from './utils/userContext';

const App = () => {
    return (
        <div className="app">
            <UserContext.Provider value={{loggedInUser: 'Albert'}}>
                <Header />
            </UserContext.Provider>
            {/* <Body /> */}
            <Outlet />
        </div>
    )
}

export default App;