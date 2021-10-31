import './banner.css';
const origin = window.location.origin;

export default function Banner(){
    return(
        <aside>
            <div className="fade-wrapper"></div>
            <div className="text-wrapper"><span>AtCriteria</span></div>
            <div className="img-container" alt="banner" style={{backgroundImage:`url(${origin+"/images/Ezreal_6.jpg"})`}} />
            <img src="https://universe.leagueoflegends.com/images/t1HeaderDivider.png" alt="section divider"/>
        </aside>
    )
}