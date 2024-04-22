import './Cart.css';
import PropTypes from 'prop-types';
const Cart = ({cart,handleRemoveFromCart}) => {
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cart-container">
                {
                    cart.map(bottle=> 
                    <div key={bottle.id}> 
                        <p>bottle.name</p>
                        <button onClick={handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};
Cart.propTypes={
    cart: PropTypes.array.isRequired,
    handleRemoveFromCart: PropTypes.func.isRequired
}

export default Cart;