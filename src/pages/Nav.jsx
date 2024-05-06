import { Link, useLocation } from "react-router-dom";
import logo from "../assets/eilogo.png";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Designs from "./Designs";

const Nav = () => {
    return (
        <div className="flex flex-col h-screen">
            <nav className="flex-col overflow-hidden top-0 w-full h-auto py-5 pl-5">
                <div className="flex justify-between bg-light rounded-l-3xl p-5 bg-opacity-25 backdrop-blur-sm">
                    <div className="flex items-center">
                        <Link to="#home"><img src={logo} alt="Logo" className="w-7" /></Link>
                    </div>
                    <NavItem to="#home" icon="home">Home</NavItem>
                    <NavItem to="#about" icon="person">About</NavItem>
                    <NavItem to="#skills" icon="lightbulb">Skills</NavItem>
                    <NavItem to="#designs" icon="draw">Designs</NavItem>
                    <NavItem to="#certs" icon="trophy">Certs</NavItem>
                    <NavItem to="#contacts" icon="contact_page">Contacts</NavItem>
                </div>
            </nav>
            <div className="flex-1 overflow-y-auto">
                <div className="bg-light h-full overflow-y-auto bg-opacity-25 backdrop-blur-sm p-7">
                    <Home />
                    <About />
                    <Skills />
                    <Designs />
                </div>
            </div>
        </div>
    );
};

const NavItem = ({ to, icon, children }) => {
    const location = useLocation();
    const isActive = location.hash === to;

    const iconStyle = {
        color: isActive ? 'red' : 'white'
    };

    return (
        <div className="flex items-center text-white mt-1">
            <Link to={to}>
                <span className="material-symbols-rounded" style={iconStyle}>{icon}</span>
            </Link>
        </div>
    );
};

export default Nav;
