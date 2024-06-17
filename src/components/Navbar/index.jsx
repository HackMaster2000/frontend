import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
    const location = useLocation();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    if (location.pathname === '/login' || location.pathname === '/register') {
        return null;
    }

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" arial-label="Furni navigation bar">
            <div className="container">
                <Link className="navbar-brand" to="/">Furni<span>.</span></Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsFurni" aria-controls="navbarsFurni" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsFurni">
                    <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                        <li className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                            <Link className="nav-link" to="/">Inicio</Link>
                        </li>
                        <li className={`nav-item ${isActive('/shop') ? 'active' : ''}`}>
                            <Link className="nav-link" to="/shop">Tienda</Link>
                        </li>
                        <li className={`nav-item ${isActive('/about') ? 'active' : ''}`}>
                            <Link className="nav-link" to="/about">Sobre Nosotros</Link>
                        </li>
                        <li className={`nav-item ${isActive('/services') ? 'active' : ''}`}>
                            <Link className="nav-link" to="/services">Servicios</Link>
                        </li>
                        <li className={`nav-item ${isActive('/blog') ? 'active' : ''}`}>
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className={`nav-item ${isActive('/contact') ? 'active' : ''}`}>
                            <Link className="nav-link" to="/contact">Contáctanos</Link>
                        </li>
                    </ul>

                    <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                        <li><Link className="nav-link" to="/profile"><img src="images/user.svg" alt="Usuario" /></Link></li>
                        <li>
                            <Link className="nav-link" to="/cart">
                                <img src="images/cart.svg" alt="Carrito" />
                                {cartItems.length > 0 && (
                                    <span className="badge bg-primary rounded-pill ms-2">{cartItems.reduce((acc, item) => acc + item.qty, 0)}</span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;