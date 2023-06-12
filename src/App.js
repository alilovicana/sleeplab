import Home from "./pages/Home/Home";
import { PersonContext } from './context/PersonContext'
import React, { useState, useEffect } from 'react'
import axios from "axios";
// import searchValue from "./components/Topbar/Topbar";
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
      const PERSON_STATE = {
        id: response.data.props.ID,
        spol: response.data.props.spol,
        dob: response.data.props.dob,
        tezina: response.data.props.tezina,
        visina: response.data.props.visina,
        ahi: response.data.props.ahi,
        odi: response.data.props.odi,
        histogram: null,
        graf: null,
        popis_lijekova: null,
        povijest_bolesti: null,
        isFetching: false,
        error: false,

      };
      console.log(response)
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
      console.log("ana", response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error("Greška prilikom dohvata pacijenta.");
    }
  };
  // broj u SearchBar-u

  const patientId = '2';
  // const handleSearch = (searchValue) => {
  //   patientId = searchValue;
  //   console.log(searchValue);
  // };
  // pozivanje fetchPerson funkcije samo kad se pronijeni patientID (uklanjanje Uncaught runtime errors:)
  useEffect(() => {
    fetchPerson(patientId);
    fetchGraph(patientId);
  }, [patientId]);


  return (

    < PersonContext.Provider value={{ person, setPerson }}>
      {/* <Topbar onSearch={handleSearch} /> */}
      <Home />
    </ PersonContext.Provider>

  );
}


