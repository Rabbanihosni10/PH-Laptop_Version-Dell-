// import React from 'react';
import { useState } from 'react';
import './Country.css'
import CountryDetail from '../Country_Details/CountryDetail';

const Country = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    // console.log(country);
    const {name,flags,population,area,cca3,cca2}=country;
    const [visited,setVisited]=useState(false)
    const handleVisited=()=>{
        setVisited(!visited);
    }
    // const passWithParams=()=>handleVisitedCountry(country);
    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited? 'visited':'non-visted'}` }>
            <h3 style={{color: visited?'Purple':'White'}}>Name:{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Country Code: {cca3}</small></p>
            <p><small>Country Local Code: {cca2}</small></p>
            <button onClick={()=>handleVisitedCountry(country)}>Mark Visited</button>
            <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'visited':'Going'}</button>
            {
                visited ? 'I have visited This Country':'I want to visit'
            }
            <hr />
            <CountryDetail 
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;