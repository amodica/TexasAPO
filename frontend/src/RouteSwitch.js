import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import History from './components/History';
import Flag from './components/Flag';
import Recruitment from './components/Recruitment';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/flag" element={<Flag/>}/>


                <Route path="/recruitment" element={<Recruitment/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;