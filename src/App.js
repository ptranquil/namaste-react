import { Outlet } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';
import UserContext from './utils/userContext';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import appStore from './store/appStore';

const App = () => {
    const [userName, setUserName] = useState("")
    useEffect(() => {
        // Consider that we are fetching the username from API
        const data = {
            username: 'Robert'
        }
        setUserName(data.username);
    }, [])
    return (
        <div className="app">
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: 'Albert' }}>
                    <Header />
                </UserContext.Provider>
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    {/* <Body /> */}
                    <Outlet />
                </UserContext.Provider>
            </Provider>
        </div>
    )
}

export default App;