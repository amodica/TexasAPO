import '../styles/Splash.css';
import Image from 'react-bootstrap/Image';
import source from '../images/apo_splash.jpeg';

const Splash = () => {
    return (
        <div className="splash-container">
            <Image src={source} fluid/>
        </div>
    );
}

export default Splash;