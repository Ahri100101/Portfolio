import { Link, useLocation } from "react-router-dom";
import logo from "../assets/eilogo.png";

const Nav = () => {
    const location = useLocation();

    return (
        <nav className="flex flex-col top-0 w-full h-auto py-5 pl-5">
            <div className="flex justify-between bg-light rounded-l-3xl p-5 bg-opacity-25 backdrop-blur-sm">
                <div className="flex items-center">
                    <Link to="/"><img src={logo} alt="Logo" className="w-7" /></Link>
                </div>
                <NavItem to="/home" icon="home" location={location}>Home</NavItem>
                <NavItem to="/about" icon="person" location={location}>About</NavItem>
                <NavItem to="/skills" icon="lightbulb" location={location}>Skills</NavItem>
                <NavItem to="/designs" icon="draw" location={location}>Designs</NavItem>
                <NavItem to="/certs" icon="trophy" location={location}>Certs</NavItem>
                <NavItem to="/contacts" icon="contact_page" location={location}>Contacts</NavItem>
            </div>
        </nav>
    );
};

const NavItem = ({ to, icon, location, children }) => {
    const isActive = location.pathname === to;
    const iconClassName = isActive ? `material-symbols-rounded text-red` : `material-symbols-rounded text-white`;

    return (
        <div className="flex items-center text-white mt-1">
            <Link to={to}>
                <span className={iconClassName}>{icon}</span>
            </Link>
        </div>
    );
};

export default Nav;