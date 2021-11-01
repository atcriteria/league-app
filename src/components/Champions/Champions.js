import './champions.css';
import { useState } from 'react';
import championData from './championData';
import ChampionButton from './ChampionButton';

export default function Champions(){
    const [selectedChampion, setSelectedChampion] = useState(championData[0]);
    const [champions, setChampions] = useState(championData);

    const selectNewChampion = (id) => {
        return setSelectedChampion(championData[id])
    }

    return(
        <section className="champions-section">
            <div className="champion-select">
                {champions.map((champion, ind) => {
                    return <ChampionButton selectNewChampion={selectNewChampion} champion={champion} key={ind} id={ind} />
                })}
            </div>
            <div className="champion-info">
                <div className="champion-avatar" style={{backgroundImage: `url(${selectedChampion.image})`}}></div>
                <div className="champ-description"></div>
                <div className="champ-metrics"></div>
            </div>
            <div className="champion-meta-info"></div>
        </section>
    )
}