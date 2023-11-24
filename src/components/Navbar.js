import './Navbar.css';
import Logo from '../assets/logo.png';

const Navbar = () => {
    return(
        <nav>
            <div className="content">
                <img src={Logo} alt="Global Talent Lab logo" />
            </div>
        </nav>
    );
}

export default Navbar;