import "./championButton.css";

export default function ChampionButton(props){
    const {champion} = props;
    return(
        <div className="champion-button-container" >
            <div className="champion-button-wrapper">
                <div className="champion-button-image-wrapper" style={{backgroundImage: `url(${champion.image})`}} />
            </div>
            <div>{champion.name}</div>
        </div>
    )
}