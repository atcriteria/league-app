import './championSelector.css';
import ChampionButton from "../ChampionButton";

export default function ChampionSelector({champions, selectedChampion, selectNewChampion}){

    const listenScroll = e => {
        let obj = e.target;
        if (obj.scrollTop === (obj.scrollHeight - obj.offsetHeight)){
            document.getElementById('champion-select-fader').classList.add("champion-select-invizzer")
        } else {
            document.getElementById('champion-select-fader').classList.remove("champion-select-invizzer")
        }
    }

    return(
        <div className="champion-select-wrapper">
            <div className="champion-select">
                <div className="champion-select-header">
                    Champions
                </div>
                <div onScroll={listenScroll} className="champion-select-buttons">
                    {champions.map((champion, ind) => {
                        if (champion === selectedChampion){
                            return "";
                        } else {
                            return <ChampionButton selectNewChampion={selectNewChampion} champion={champion} key={ind} id={ind} />
                        }
                    })}
                    <div className="champion-select-buttons-fader" id="champion-select-fader" />
                </div>
            </div>
        </div>
    )
}