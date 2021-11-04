export default function FaveSkin({skin}){
    return(
        <div className="champion-faveskin-wrapper">
            <div className="champion-faveskin-skin" style={{backgroundImage: `url(${skin})`}}/>
        </div>
    )
}