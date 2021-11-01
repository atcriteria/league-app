import './champions.css';
import { useState } from 'react';
import championData from './championData';

export default function Champions(){
    const [selectedChampion, seteSelectedChampion] = useState(championData[0]);
    const [champions, setChampions] = useState(championData);

    return(
        <section className="champions-section">
            <div className="champion-select"></div>
            <div className="champion-info">
                <div className="champion-avatar"></div>
                <div className="champ-description"></div>
                <div className="champ-metrics"></div>
            </div>
            <div className="champion-meta-info"></div>
        </section>
    )
}