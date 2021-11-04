export default function Region({region}){
    return(
        <div className="champion-region-wrapper">
            <div className="champion-region-content-wrapper">

            </div>
            <div className="champion-region-title-wrapper" >
                <div className="champion-region-title">
                    <p>Region</p>
                    <p>{region}</p>
                </div>
                <div className="champion-region-emblem" />
            </div>
        </div>
    )
}