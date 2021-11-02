import './champions.css';
import { useState } from 'react';
import championData from './championData';
import ChampionSelector from './ChampionSelector/ChampionSelector';
import CurrentChampionThumb from './ChampionSelector/CurrentChampionThumb';
import Metrics from './Metrics/Metrics';
import Role from './Facts/Role';
import Region from './Facts/Region';
import FaveSkin from './Facts/FaveSkin';

export default function Champions(){
    const [selectedChampion, setSelectedChampion] = useState(championData[0]);
    const [champions, setChampions] = useState(championData);

    const selectNewChampion = (id) => {
        return setSelectedChampion(championData[id])
    }

    return(
        <section className="champions-section">
            <div className="champions-left-field">
                <CurrentChampionThumb name={selectedChampion.name} title={selectedChampion.title} />
                <ChampionSelector selectedChampion={selectedChampion} selectNewChampion={selectNewChampion} champions={champions} />
            </div>
            <div className="champion-info">
                <div className="champion-avatar-wrapper" >
                    <div className="champion-avatar" style={{backgroundImage: `url(${selectedChampion.image})`}} />
                    <img src="https://universe.leagueoflegends.com/images/ChampionIconFrame.png" alt="border" width="180" height="180" />
                </div>
                <div className="champ-description">
                    <p>{selectedChampion.description}</p>
                    <div className="champ-description-background" style={{backgroundImage: `url(${selectedChampion.splash})`}} />
                </div>
                <Metrics metrics={selectedChampion.metrics}/>
            </div>
            <div className="champions-right-field">
                <Role role={selectedChampion.role} />
                <Region region={selectedChampion.region} />
                <FaveSkin />
            </div>
        </section>
    )
}