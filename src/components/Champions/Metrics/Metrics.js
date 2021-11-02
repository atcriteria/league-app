import './metrics.css';
import resolveMastery from './resolveMastery';
import Meter from './Meter';

export default function Metrics({metrics}){
    const masteryUrl = resolveMastery(metrics.mastery)

    return(
        <article className="champ-metrics">
            <div className="metrics-data">
                <div className="meter">
                    <label>AG</label>
                    <Meter value={metrics.agression} />
                </div>
                <div className="meter">
                    <label>LN</label>
                    <Meter value={metrics.laning} />
                </div>
                <div className="meter">
                    <label>CS</label>
                    <Meter value={metrics.cs} />
                </div>
                <div className="meter">
                    <label>TF</label>
                    <Meter value={metrics.teamFighting} />
                </div>
                <div className="meter">
                    <label>IP</label>
                    <Meter value={metrics.impact} />
                </div>
            </div>
            <div className="metrics-mastery">
                <img src={masteryUrl} alt={`Mastery level ${metrics.mastery} icon`} />
                <h2>Mastery {metrics.mastery}</h2>
            </div>
        </article>
    )
}