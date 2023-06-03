import { createContext } from "react";

const INITIAL_STATE = {
    id: null,
    spol: null,
    dob: null,
    tezina: null,
    visina: null,
    ahi: null,
    odi: null,
    histogram:null,
    graf: null,
    popis_lijekova: null,
    povijest_bolesti:null,
    isFetching: false,
    error: false,
};

export const PersonContext = createContext(INITIAL_STATE);