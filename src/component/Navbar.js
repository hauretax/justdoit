import { Link } from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/arrow">Arrow</Link>
                <Link to="/careers">Careers</Link>
            </div>

        </>
    )
}
export default Navbar;