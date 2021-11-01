import "./championButton.css";

export default function ChampionButton(props){
    const {champion, selectNewChampion, id} = props;

    const handleClick = e => {
        selectNewChampion(id);
    }

    return(
        <div className="champion-button-container" >
            <div onClick={handleClick} className="champion-button-wrapper">
                <div className="champion-button-image-wrapper" style={{backgroundImage: `url(${champion.image})`}} />
            </div>
            <div>{champion.name}</div>
        </div>
    )
}