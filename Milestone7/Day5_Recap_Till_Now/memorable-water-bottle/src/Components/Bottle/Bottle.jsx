import './Bottle.css'
const Bottle = ({bottle}) => {
    console.log(bottle)
    const {brand,lid_type,capacity_ml}=bottle;
    return (
        <div className="bottle">
            <h3>Bottle :{brand}</h3>
            <h5>Water Capacity: {capacity_ml}</h5>
            <p>Bottle Type: {lid_type}</p>
        </div>
    );
};

export default Bottle;