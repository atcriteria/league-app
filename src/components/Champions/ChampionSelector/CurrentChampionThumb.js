import './currentChampionThumb.css';

export default function currentChampionThumb({name, title}){
    return(
        <div className="current-champion-thumb-wrapper">
            <span>{name}</span>
            <p>{title}</p>
        </div>
    )
}