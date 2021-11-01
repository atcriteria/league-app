import './currentChampionThumb.css';

export default function currentChampionThumb({name}){
    return(
        <div className="current-champion-thumb-wrapper">
            <span>{name}</span>
        </div>
    )
}