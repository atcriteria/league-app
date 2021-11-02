import './metrics.css';
import resolveMastery from './resolveMastery';

export default function Metrics({metrics}){
    const masteryUrl = resolveMastery(metrics.mastery)

    return(
        <article className="champ-metrics">
            <div className="metrics-data">
                Actual Data
            </div>
            <div className="metrics-mastery">
                <img src={masteryUrl} alt={`Mastery level ${metrics.mastery} icon`} />
                <h2>Mastery {metrics.mastery}</h2>
            </div>
        </article>
    )
}