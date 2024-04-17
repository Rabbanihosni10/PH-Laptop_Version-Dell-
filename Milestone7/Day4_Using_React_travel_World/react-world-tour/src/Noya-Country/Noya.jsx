import './Noya.css'
const Noya = ({noya}) => {
    console.log("==================================")
    console.log(noya);
    const {name,flags,population,area}=noya;
    return (
        <div className="noye">
          <h3>Country name: {name.common} </h3>
          <img src={flags.png} alt="" />
          <p>Population: {population}</p>  
          <p>Area: {area}</p>  
        </div>
    );
};

export default Noya;