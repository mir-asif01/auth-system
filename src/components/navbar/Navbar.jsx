import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar() {
    return (<>
        <div className="cont" >
            <header className="head">
                <NavLink className='navlink' to='/'>Home</NavLink>
                <NavLink className='navlink' to='/login'>Login</NavLink>
                <NavLink className='navlink' to='/signup'>Signup</NavLink>
            </header>
        </div>
    </>);
}

export default Navbar;