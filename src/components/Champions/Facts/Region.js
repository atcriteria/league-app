export default function Region({region}){
    const origin = window.location.origin;
    let url = `${origin}/Images/factions/${region.toLowerCase()}_crest_icon.png`
    console.log(url)
    return(
        <div className="champion-region-wrapper">
            <div className="champion-region-content-wrapper">

            </div>
            <div className="champion-region-title-wrapper" >
                <div className="champion-region-title">
                    <p>Region</p>
                    <p>{region}</p>
                </div>
                <div className="champion-region-emblem" >
                    <img src={url} alt={`${region} crest icon`} />
                </div>
            </div>
        </div>
    )
}