import "./championButton.css";

export default function ChampionButton(props){
    const {champion} = props;
    return(
        <div className="champion-button-container" >
            <img src={champion.image} alt={`${champion.name} portrait`} />
            {champion.name}
        </div>
    )
}