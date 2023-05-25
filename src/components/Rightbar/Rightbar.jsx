import './rightbar.css'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <h4 className="rightbarTitle">Općeniti podaci o pacijentu</h4>
                <span className="rightbarListItem">AHI: 10%</span>
                <span className="rightbarListItem">ODI: 5</span>
                <div className="mainList">
                    <li className="sidebarListItem">
                        <div className="title">
                            <div className="sidebarIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-capsule" viewBox="0 0 16 16">
                                <path d="M1.828 8.9 8.9 1.827a4 4 0 1 1 5.657 5.657l-7.07 7.071A4 4 0 1 1 1.827 8.9Zm9.128.771 2.893-2.893a3 3 0 1 0-4.243-4.242L6.713 5.429l4.243 4.242Z" />
                            </svg></div>
                            <span className="sidebarListItemText">Popis lijekova</span>
                        </div>
                        <li className="sidebarListItemMinor">
                            <span className="sidebarListItemUnder">Aspirin</span>
                            <span className="sidebarListItemUnder">Ketanol</span>
                            <span className="sidebarListItemUnder">Paracetamol</span>
                        </li>
                    </li>
                    <li className="sidebarListItem">
                        <div className="title">
                            <div className="sidebarIcon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-pulse-fill" viewBox="0 0 16 16">
                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5ZM9.98 5.356 11.372 10h.128a.5.5 0 0 1 0 1H11a.5.5 0 0 1-.479-.356l-.94-3.135-1.092 5.096a.5.5 0 0 1-.968.039L6.383 8.85l-.936 1.873A.5.5 0 0 1 5 11h-.5a.5.5 0 0 1 0-1h.191l1.362-2.724a.5.5 0 0 1 .926.08l.94 3.135 1.092-5.096a.5.5 0 0 1 .968-.039Z" />
                            </svg></div>
                            <span className="sidebarListItemText">Povijest bolesti</span>
                        </div>
                        <li className="sidebarListItemMinor">
                            <span className="sidebarListItemUnder">Astma</span>
                            <span className="sidebarListItemUnder">Rahitis</span>
                            <span className="sidebarListItemUnder">Upala pluća</span>
                        </li>
                    </li>
                </div>
            </div>
        </div>
    );
}



