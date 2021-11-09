import './header.css';

export default function Header(){
    return(
        <header className="app-header">
            <nav>
                <div>Logo</div>
                <div>About</div>
                <div>Champions</div>
                <div>Blog</div>
                <div><a href="https://na.op.gg/summoner/userName=AtCriteria" target="_blank" rel="noreferrer" >OP.GG</a></div>
            </nav>
        </header>
    )
}