import { Outlet } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';

const App = () => {
    return (
        <div className="app">
            <Header />
            {/* <Body /> */}
            <Outlet />
        </div>
    )
}

export default App;