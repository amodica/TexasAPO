import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import History from './components/History';
import Flag from './components/Flag';
import Recruitment from './components/Recruitment';
import Scrapbooks from './components/Scrapbooks';
import Contact from './components/Contact';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/history" element={<History/>}/>
                <Route path="/flag" element={<Flag/>}/>

                <Route path="/recruitment" element={<Recruitment/>}/>
                <Route path="/scrapbooks" element={<Scrapbooks/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;