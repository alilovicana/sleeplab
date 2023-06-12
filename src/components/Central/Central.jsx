import React, { useState, useEffect } from 'react';
import "./central.css";
import histogram from '../../../backend/patient_histogram.png';
import graph from '../../../backend/patient_graph.png';
import { PersonContext } from "../../context/PersonContext";
import { useContext } from 'react';
import { Line, Bar } from 'react-chartjs-2';

export default function Central() {
    const [showHistogram, setShowHistogram] = useState(true);
    const [showGraph, setShowGraph] = useState(false);

    /********************************************** */

    // useEffect(() => {
    //     // Učitavanje podataka za grafikon i histogram
    //     fetch('/python/:id')
    //         .then(response => response.blob())
    //         .then(blob => {
    //             const reader = new FileReader();
    //             reader.onloadend = () => {
    //                 const buffer = reader.result;
    //                 const graphUrl = URL.createObjectURL(new Blob([buffer]));
    //                 setShowGraph(graphUrl);
    //             };
    //             reader.readAsArrayBuffer(blob);
    //         });

    //     fetch('/python/:id')
    //         .then(response => response.blob())
    //         .then(blob => {
    //             const reader = new FileReader();
    //             reader.onloadend = () => {
    //                 const buffer = reader.result;
    //                 const histogramUrl = URL.createObjectURL(new Blob([buffer]));
    //                 setShowHistogram(histogramUrl);
    //             };
    //             reader.readAsArrayBuffer(blob);
    //         });
    // }, []);


    /************************************************* */
    const handleHistogramChange = () => {
        setShowHistogram(!showHistogram);
    };
    const handleGraphChange = () => {
        setShowGraph(!showGraph);
    };
    const { person } = useContext(PersonContext);
    return (
        <div className="central">
            <div className="centralWrapper">
                <div className='name'> <h1>PACIJENT:# {person.id}</h1></div>
                <div className="checkbox">
                    <div className={`checkbox ${showHistogram ? "on" : "off"}`} onClick={handleHistogramChange}>
                        {showHistogram ? (
                            <svg className="checkboxIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                            </svg>
                        ) : (
                            <svg className="checkboxIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            </svg>
                        )}
                        HISTOGRAM
                    </div>

                    <div className={`checkbox ${showGraph ? "on" : "off"}`} onClick={handleGraphChange}>
                        {showGraph ? (
                            <svg className="checkboxIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z" />
                            </svg>
                        ) : (
                            <svg className="checkboxIcon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                            </svg>
                        )}
                        GRAPH
                    </div>
                </div>
                <div className="images" style={{ color: "gray" }}>
                    {showHistogram && <img src={histogram} alt="histogram" />}
                    {showGraph && <img src={graph} alt="graph" />}
                </div>
            </div>
        </div>
    );
}

