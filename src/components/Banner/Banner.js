import './banner.css';
const origin = window.location.origin;

export default function Banner(){
    return(
        <section>
            <img src={`${origin+"/images/Ezreal_6.jpg"}`} alt="banner" />
        </section>
    )
}