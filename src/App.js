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
    histogram: null,
    graf: null,
    popis_lijekova: '-',
    CV_Other: '-',
    Other_o: '-',
    isFetching: false,
    error: false,
  };
  const [person, setPerson] = useState(INITIAL_STATE);
  //dohvaćanje podataka iz excel tablice i postavaljanje unutar frontenda
  const fetchPerson = async (patientId) => {
    try {
      const response = await axios.get(`/${patientId}`);
      console.log('ana ' + response.data);
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
        histogram: '-',
        graf: null,
        popis_lijekova: '-',
        CV_Other: response.data.props.CV_Other,
        Other_o: response.data.props.Other_o,
        isFetching: false,
        error: false,

      };
      setPerson(PERSON_STATE);
      console.log(response);
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
      setPerson((prevPerson) => ({
        ...prevPerson,
        graf: response.data.base64Graph,
      }));
    } catch (error) {
      console.error(error);
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
    <>
      < PersonContext.Provider value={{ person, setPerson }}>
        <Topbar />
        <div className="redLine"></div>
        <div className="homeContainer">
          <Sidebar />
          <Central />
          <Rightbar />
        </div>
      </ PersonContext.Provider>
    </>
  );
}


