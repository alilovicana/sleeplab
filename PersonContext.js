import { createContext } from "react";

const INITIAL_STATE = {
    id: null,
    spol: null,
    rasa: null,
    dob: null,
    visina: null,
    tezina: null,
    BMI: null,
    sistolicki_tlak: null,
    diastolicki_tlak: null,
    puls: null,
    struk: null,
    kukovi: null,
    vrat: null,
    ahi: null,
    odi: null,
    Mean_SaO2: null,
    Lowest_SaO2: null,
    popis_lijekova: null,
    CV_Other: null,
    Other_o: null,
    isFetching: false,
    error: false,
};

export const PersonContext = createContext(INITIAL_STATE);