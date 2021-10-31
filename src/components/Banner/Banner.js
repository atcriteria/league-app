import './banner.css';
const origin = window.location.origin;

export default function Banner(){
    return(
        <aside>
            <div className="fade-wrapper"></div>
            <div className="text-wrapper">Greetings, Summoner</div>
            <div className="img-container" alt="banner" style={{backgroundImage:`url(${origin+"/images/Ezreal_6.jpg"})`}} />
        </aside>
    )
}