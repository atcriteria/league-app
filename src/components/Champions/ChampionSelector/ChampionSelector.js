import ChampionButton from "../ChampionButton";

export default function ChampionSelector({champions, selectedChampion, selectNewChampion}){
    return(
        <div className="champion-select">
            {champions.map((champion, ind) => {
                if (champion === selectedChampion){
                    return "";
                } else {
                    return <ChampionButton selectNewChampion={selectNewChampion} champion={champion} key={ind} id={ind} />
                }
            })}
        </div>
    )
}