import './rightbar.css'
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"
export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <h4 className="rightbarTitle">Općeniti podaci o pacijentu</h4>
                <span className="rightbarListItem">AHI: 10%</span>
                <span className="rightbarListItem">ODI: 5</span>
                <div className="list">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Popis lijekova</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Popis lijekova"
                        >
                            <MenuItem value={1}>Aspirin</MenuItem>
                            <MenuItem value={2}>Ketanol</MenuItem>
                            <MenuItem value={3}>Paracetamol</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="list">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Povijest bolesti</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Povijest bolesti"
                        >
                            <MenuItem value={1}>Astma</MenuItem>
                            <MenuItem value={2}>Rahitis</MenuItem>
                            <MenuItem value={3}>Upala pluća</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}



