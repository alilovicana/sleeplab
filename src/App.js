import Home from "./pages/Home/Home";
import { PersonContext } from './context/PersonContext'
import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useContext } from "react";
import { SearchContext } from "./context/SearchContext";

export default function App() {
  const { searchValue } = useContext(SearchContext);
  const INITIAL_STATE = {
    id: 'Unesite ispravan ID pacijenta',
    spol: 'X',
    dob: 0,
    tezina: 0,
    visina: 0,
    ahi: 0,
    odi: 0,
    histogram: null,
    graf: null,
    popis_lijekova: null,
    povijest_bolesti: null,
    isFetching: false,
    error: false,
  };
  const [person, setPerson] = useState(INITIAL_STATE);
  //dohvaćanje podataka iz excel tablice i postavaljanje unutar frontenda
  const fetchPerson = async (patientId) => {
    try {
      const response = await axios.get(`/${patientId}`);
      console.log(response)
      const PERSON_STATE = {
        id: response.data.props.Patient_ID,
        spol: response.data.props.Gender,
        rasa:response.data.props.Race,
        dob: response.data.props.Age,
        tezina: response.data.props.Weight,
        visina: response.data.props.Height,
        BMI: response.data.props.BMI,
        sistolicki_tlak: response.data.props.Systolic_Blood_Pressure,
        diastolicki_tlak: response.data.props.Diastolic_Blood_Pressure,
        puls: response.data.props.Heart_Rate,
        struk: response.data.props.Waist,
        kukovi: response.data.props.Hip,
        vrat: response.data.props.Neck,
        ahi: response.data.props.ahi,
        odi: response.data.props.odi,
        histogram: null,
        graf: null,
        popis_lijekova: null,
        povijest_bolesti: null,
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
  const fetchGraph = async (patientId) => {
    try {
      const response = await axios.get(`/python/${patientId}`);
    } catch (error) {
      console.error("Error fetching graph:", error);
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
        <Home />
      </ PersonContext.Provider>
  );
}


