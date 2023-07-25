import React from 'react';
import "./sidebar.css"

import { PersonContext } from "../../context/PersonContext";
import { useContext } from 'react';
export default function Sidebar() {
    const { person } = useContext(PersonContext);
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="title">
                            <div className="sidebarIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-bounding-box" viewBox="0 0 16 16">
                                <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1h-3zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5zM.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5zm15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5z" />
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            </svg></div>
                            <span className="sidebarListItemText">Osnovni podaci</span>
                        </div>
                    </li>
                    <li className="sidebarListItemMinor">
                        <span className="sidebarListItemUnder">Spol: {person.spol}</span>
                        <span className="sidebarListItemUnder">Dob: {person.dob}</span>
                        <span className="sidebarListItemUnder">Težina: {person.tezina}</span>
                        <span className="sidebarListItemUnder">Visina: {person.visina}</span>
                        <span className="sidebarListItemUnder">Rasa: {person.rasa}</span>
                        <span className="sidebarListItemUnder">BMI: {person.BMI}</span>
                        <span className="sidebarListItemUnder">Sistolički tlak: {person.sistolicki_tlak}</span>
                        <span className="sidebarListItemUnder">Dijastolički tlak: {person.diastolicki_tlak}</span>
                        <span className="sidebarListItemUnder">Puls: {person.puls}</span>
                        <span className="sidebarListItemUnder">Širina vrata: {person.vrat}</span>
                        <span className="sidebarListItemUnder">Širina struka: {person.struk}</span>
                        <span className="sidebarListItemUnder">Širina kukova: {person.kukovi}</span>
                    </li>

                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
            </div>
        </div>

    );
}
