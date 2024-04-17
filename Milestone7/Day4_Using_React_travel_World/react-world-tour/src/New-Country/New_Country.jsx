import './New_Country.css'
const New_Country = ({new_country}) => {
    console.log(new_country);
    const {name,flags,population, area}=new_country;
    return (
        <div className='new_country'>
            <h3>Country: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Popilation: {population}</p>
            <p>Area: {area}</p>
        </div>
    );
};

export default New_Country;