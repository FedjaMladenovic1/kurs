import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Fedjin blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#337caa',
                    borderRadius: '8px'
                }}>Novi blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;
