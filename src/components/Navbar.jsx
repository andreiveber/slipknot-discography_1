function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img
                        src="/images/slipknot-logo.jpg"
                        alt="Slipknot Logo"
                        height="120"
                        style={{ objectFit: 'contain' }}
                    />
                    <span className="ms-3" style={{
                        color: '#ff0000',
                        fontSize: '2.2rem',
                        fontWeight: 'bold',
                        letterSpacing: '3px'
                    }}>SLIPKNOT</span>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link active" style={{ fontSize: '1.4rem', color: '#ff0000' }} href="#">Главная</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ fontSize: '1.4rem', color: '#ff0000' }} href="#">Дискография</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" style={{ fontSize: '1.4rem', color: '#ff0000' }} href="#">О группе</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;