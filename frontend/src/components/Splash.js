import '../styles/Splash.css';
import banner from '../images/apo_splash.jpeg';

const Splash = () => {
    return (
        <div className="container">
            <img src={banner} alt=""></img>
            <div className="splash-text">Texas Alpha Phi Omega</div>
        </div>
    );
}

export default Splash;