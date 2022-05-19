import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import About from './components/About';
import Recruitment from './components/Recruitment';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/about" element={<About/>}/>

                <Route path="/recruitment" element={<Recruitment/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default RouteSwitch;