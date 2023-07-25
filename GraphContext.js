import { createContext } from "react";

const INITIAL_STATE = {
    diff_histogram: null,
    Duration_time_histogram:null,
    Min_MAx_find_peaks_sa_pravcem:null,
    Min_MAx_find_peaks:null,
    slope_histogram:null,
    Vrijeme_trajanja:null,
    isFetching: false,
    error: false,
};

export const GraphContext = createContext(INITIAL_STATE);