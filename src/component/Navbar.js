import { Link } from "react-router-dom"
import '../stylsheet/Navbar.css'

const Navbar = () => {
    return (
        <>
            <div id='navbar'>
                <Link to="/">Home</Link>
                <Link to="/arrow">Arrow</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/LetterShow">LetterShow</Link>
                <Link to="/Keyboard">Keyboard</Link>
            </div>
        </>
    )
}
export default Navbar;