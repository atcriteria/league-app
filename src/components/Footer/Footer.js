import './footer.css';

export default function Footer(){
    const origin = window.location.origin;

    return(
        <footer className="footer-wrapper">
            <div className="footer-img" style={{backgroundImage: `url(${origin}/Images/footer-image.jpg)`}} />
            <nav className="footer-content">
                <a href="localhost:3000/#">Link</a>
                <a href="localhost:3000/#">Link</a>
                <a href="localhost:3000/#">Link</a>
                <a href="localhost:3000/#">Link</a>
                <a href="localhost:3000/#">Link</a>
            </nav>
        </footer>
    )
}