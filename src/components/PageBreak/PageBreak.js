import './pagebreak.css';

export default function PageBreak({title}){
    return(
        <div className="page-break-wrapper">
            <div className="page-break-line" />
            <div className="page-break-title"><span>{title}</span></div>
            <div className="page-break-line" />
        </div>
    )
}