// import React from 'react';
// rsc 
import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import Noya from "../Noya-Country/Noya";
import New_Country from "../New-Country/New_Country";
import './Countries.css'
const Countries = () => {
    const [countries,setCountries]=useState([]);
    const [visitedCountries,setVisitedCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data));
    },[])
    const  handleVisitedCountry= country =>{
        console.log('Add This to your visited country');
        console.log(country);
    }
    return (
        <div className="">
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited Countries--</h5>
                <ul></ul>
            </div>
            <div className="country-container">
                {
                 countries.map(country=> <Country handleVisitedCountry={handleVisitedCountry} key={country.cca3} country={country}></Country>)
                }
            </div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-container">    
                {
                    countries.map(noya=><Noya key={noya.cca3} noya={noya}></Noya>)
                }
            </div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(new_country=> <New_Country key={new_country.cca3} new_country={new_country}></New_Country>)
                }
            </div>
        </div>
    );
};

export default Countries;