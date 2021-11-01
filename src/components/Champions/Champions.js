import './champions.css';
import { useState } from 'react';
import championData from './championData';
import ChampionSelector from './ChampionSelector/ChampionSelector';
import CurrentChampionThumb from './ChampionSelector/CurrentChampionThumb';

export default function Champions(){
    const [selectedChampion, setSelectedChampion] = useState(championData[0]);
    const [champions, setChampions] = useState(championData);

    const selectNewChampion = (id) => {
        return setSelectedChampion(championData[id])
    }

    return(
        <section className="champions-section">
            <div className="champions-left-field">
                <CurrentChampionThumb name={selectedChampion.name} />
                <ChampionSelector selectedChampion={selectedChampion} selectNewChampion={selectNewChampion} champions={champions} />
            </div>
            <div className="champion-info">
                <div className="champion-avatar" style={{backgroundImage: `url(${selectedChampion.image})`}} />
                <div className="champ-description">
                    <h2>{selectedChampion.title}</h2>
                    <p>{selectedChampion.description}</p>
                </div>
                <div className="champ-metrics"></div>
            </div>
            <div className="champions-right-field">
                <div className="champion-meta-info"></div>
            </div>
        </section>
    )
}