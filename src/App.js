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


      // Dekodiranje Base64 teksta u binarni sadržaj
      const decodeBase64Image = (response) => {
        const binaryString = atob(response);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
      };
      const ImageComponent = ({ response }) => {
        try {
          const imageData = decodeBase64Image(response);
          const blob = new Blob([imageData], { type: 'image/png' });
          const imageUrl = URL.createObjectURL(blob);
          return <img src={imageUrl} alt="Slika" />;
        } catch (error) {
          console.error("Error decoding image:", error);
          return <p>Error decoding image.</p>;
        }
      };

      setPerson((prevPerson) => ({
        ...prevPerson,
        graf: <ImageComponent response={response.data} />,
      }));
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
         {person.graf && person.graf}
      </ PersonContext.Provider>
  );
}


