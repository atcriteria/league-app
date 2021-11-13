import './header.css';

export default function Header(){
    return(
        <header className="app-header" name="main-header" data-testid="header-testID" >
            <nav>
                <div>Logo</div>
                <div><a href="#about-section" >About</a></div>
                <div><a href="#champion-section">Champions</a></div>
                <div><a href="#blog-section">Blog</a></div>
                <div><a href="https://na.op.gg/summoner/userName=AtCriteria" target="_blank" rel="noreferrer" >OP.GG</a></div>
            </nav>
        </header>
    )
}