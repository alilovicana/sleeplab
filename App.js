import '../src/pages/Home/home.css'
import { PersonContext } from './context/PersonContext'
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useContext } from "react";
import { SearchContext } from "./context/SearchContext";
import Sidebar from "../src/components/Sidebar/Sidebar"
import Topbar from "../src/components/Topbar/Topbar"
import Central from "../src/components/Central/Central"
import Rightbar from "../src/components/Rightbar/Rightbar"
import { GraphContext } from './context/GraphContext';
import LoadingSpinner from "./LoadingSpinner/LoadingSpinner";

export default function App() {
  /***********************************EXCEL*********************************************/
  const { searchValue } = useContext(SearchContext);
  const INITIAL_STATE = {
    id: 'Unesite ispravan ID',
    spol: '-',
    rasa: '-',
    dob: '-',
    visina: '-',
    tezina: '-',
    BMI: '-',
    sistolicki_tlak: '-',
    diastolicki_tlak: '-',
    puls: '-',
    struk: '-',
    kukovi: '-',
    vrat: '-',
    ahi: '-',
    odi: '-',
    Mean_SaO2: '-',
    Lowest_SaO2: '-',
    popis_lijekova: '-',
    CV_Other: '-',
    Other_o: '-',
    isFetching: false,
    error: false,
  };
  const INITIAL_GRAPH_STATE = {
    diff_histogram: null,
    Duration_time_histogram: null,
    Min_MAx_find_peaks_sa_pravcem: null,
    Min_MAx_find_peaks: null,
    slope_histogram: null,
    Vrijeme_trajanja: null,
    isFetching: false,
    error: false,
  };
  const [person, setPerson] = useState(INITIAL_STATE);
  //dohvaćanje podataka iz excel tablice i postavaljanje unutar frontenda
  const fetchPerson = async (patientId) => {
    try {
      const response = await axios.get(`/${patientId}`);
      console.log('ana ' + response);
      const PERSON_STATE = {
        id: response.data.props.Patient_ID,
        spol: response.data.props.Gender,
        rasa: response.data.props.Race,
        dob: response.data.props.Age,
        visina: response.data.props.Height,
        tezina: response.data.props.Weight,
        BMI: response.data.props.BMI,
        sistolicki_tlak: response.data.props.Systolic_Blood_Pressure,
        diastolicki_tlak: response.data.props.Diastolic_Blood_Pressure,
        puls: response.data.props.Heart_Rate,
        struk: response.data.props.Waist,
        kukovi: response.data.props.Hip,
        vrat: response.data.props.Neck,
        ahi: response.data.props.AHI,
        Mean_SaO2: response.data.props.Mean_SaO2,
        Lowest_SaO2: response.data.props.Lowest_SaO2,
        odi: response.data.props.ODI,
        popis_lijekova: '-',
        CV_Other: response.data.props.CV_Other,
        Other_o: response.data.props.Other_o,
        isFetching: false,
        error: false,

      };
      setPerson(PERSON_STATE);
      return response.data; // Vraća podatke pacijenta
    } catch (error) {
      console.error(error);
      console.error("Greška prilikom dohvata pacijenta.");
    }
  };
  /***********************************PYTHON*********************************************/
  const [graph, setGraph] = useState(INITIAL_GRAPH_STATE);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchGraph = async (patientId) => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/python/${patientId}`);
      const GRAPH_STATE = {
        diff_histogram: response.data.images[0].base64Image,
        Duration_time_histogram: response.data.images[1].base64Image,
        Min_MAx_find_peaks_sa_pravcem: response.data.images[2].base64Image,
        Min_MAx_find_peaks: response.data.images[3].base64Image,
        slope_histogram: response.data.images[4].base64Image,
        Vrijeme_trajanja: response.data.images[5].base64Image,
        isFetching: false,
        error: false,

      };
      setGraph(GRAPH_STATE);
      setIsLoading(false);
      return response.data; // Vraća podatke pacijenta
    } catch (error) {
      console.error(error);
      console.error("Error fetching patient:", error);
      setErrorMessage("Unable to get patient plots");
      setIsLoading(false);
      throw new Error("Greška prilikom dohvata pacijenta.");
    }
  };

  const patientId = searchValue;
  // pozivanje fetchPerson funkcije samo kad se pronijeni patientID (uklanjanje Uncaught runtime errors:)
  useEffect(() => {
    fetchPerson(patientId);
    fetchGraph(patientId);
  }, [patientId]);

  return (
    < PersonContext.Provider value={{ person, setPerson }}>
      <Topbar />
      <div className="redLine"></div>
      <div className="homeContainer">
        <Sidebar />
        < GraphContext.Provider value={{ graph, setGraph }}>
          {/* {isLoading ? <LoadingSpinner /> : <Central />}  */}
          <Central/>
           {errorMessage && <div className="error">{errorMessage}</div>}
        </GraphContext.Provider>
        <Rightbar />
      </div>
    </ PersonContext.Provider>
  );
}


