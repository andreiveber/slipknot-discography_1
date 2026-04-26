function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white text-center py-4">
            <div className="container">
                <p style={{ color: '#ff0000' }}>
                    &copy; {year} Slipknot Discography. Все права защищены.
                </p>
                <p className="small" style={{ color: '#ff0000' }}>
                    Создано с любовью к их музыке
                </p>
            </div>
        </footer>
    );
}

export default Footer;