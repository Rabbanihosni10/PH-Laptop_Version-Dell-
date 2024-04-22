import './Bottle.css'
import PropTypes from 'prop-types';


const Bottle = ({bottle,handleCart}) => {
    // console.log(bottle)
    const {brand,lid_type,capacity_ml,price}=bottle;
    // console.log(bottle);
    return (
        <div className="bottle">
            <h3>Bottle :{brand}</h3>
            <h5>Water Capacity: {capacity_ml}</h5>
            <p>Bottle Type: {lid_type}</p>
            <p><b>Price: $</b>{price}</p>
            <button onClick={()=>handleCart(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.propTypes={
    bottle: PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired
}

export default Bottle;