const CountryData = ({country, handleVisitedCountry, handleVisitedFlags}) => {
    console.log('Inside Country data',country,handleVisitedCountry,handleVisitedFlags)
    return (
        <div>
            <p><small>Country Data: {country.name.common}</small></p>
        </div>
    );
};

export default CountryData;
//npm run dev
//npm run build