import './championSelector.css';
import ChampionButton from "../ChampionButton";

export default function ChampionSelector({champions, selectedChampion, selectNewChampion}){
    return(
        <div className="champion-select">
            <div className="champion-select-header">
                Champions
            </div>
            <div className="champion-select-buttons">
                {champions.map((champion, ind) => {
                    if (champion === selectedChampion){
                        return "";
                    } else {
                        return <ChampionButton selectNewChampion={selectNewChampion} champion={champion} key={ind} id={ind} />
                    }
                })}
            </div>
        </div>
    )
}