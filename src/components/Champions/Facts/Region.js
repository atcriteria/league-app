import resolveRegion from "./resolveRegion";

export default function Region({region}){
    const origin = window.location.origin;
    const regionImagePath = resolveRegion(region)
    console.log(regionImagePath)
    let regionIconURL = `${origin}/Images/faction_icons/${regionImagePath}_crest_icon.png`
    let regionSplashURL = `${origin}/Images/locations/${regionImagePath}.jpg`
    return(
        <div className="champion-region-wrapper">
            <div className="champion-region-content-wrapper" style={{backgroundImage: `url(${regionSplashURL})`}}>

            </div>
            <div className="champion-region-title-wrapper" >
                <div className="champion-region-title">
                    <p>Region</p>
                    <p>{region}</p>
                </div>
                <div className="champion-region-emblem" >
                    <img src={regionIconURL} alt={`${region} crest icon`} />
                </div>
            </div>
        </div>
    )
}