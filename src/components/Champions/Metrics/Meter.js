// A component that renders a progress bar based on the passed value

import './meter.css';
import metricData from './metricData';

export default function Meter({value, type}){
    return(
        <div className="meter-wrapper">
            <div className="meter-border" >
                <div className="meter-notches">
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                    <div className="meter-notch" />
                </div>
                <div className="meter-definition">
                    <span>{metricData[type]}</span>
                </div>
                <div className="meter-progress" style={{borderRadius: `12px ${(value === 10) ? 12 : 0}px ${(value === 10) ? 12 : 0}px 12px`, width: `${value*10}%`}} />
                <div className="meter-shader" />
            </div>
        </div>
    )
}