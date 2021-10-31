import './banner.css';
const origin = window.location.origin;

export default function Banner(){
    return(
        <section>
            <div alt="banner" style={{backgroundImage:`url(${origin+"/images/Ezreal_6.jpg"})`}} />
        </section>
    )
}