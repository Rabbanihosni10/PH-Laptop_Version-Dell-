// import React from 'react';
// rsc 
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import Noya from "../Noya-Country/Noya";
import New_Country from "../New-Country/New_Country";

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country=> <Country key={country.cca3} country={country}></Country>)
            }
            {
                countries.map(noya=><Noya key={noya.cca3} noya={noya}></Noya>)
            }
            {
                countries.map(new_country=> <New_Country key={new_country.cca3} new_country={new_country}></New_Country>)
            }
        </div>
    );
};

export default Countries;