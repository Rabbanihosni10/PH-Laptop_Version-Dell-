import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../Utilities/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles,setBottles]=useState([])
    const [cart,setCart]=useState([])
    useEffect(()=>{
        fetch('bottles.json')
        .then(res=>res.json())
        .then(data=>setBottles(data))
    },[])

    //load cart from local storage
    useEffect(()=>{
        console.log('Call the useEffect:',bottles.length);
        if(bottles.length){
            const savedCart=[];
            const storedCartId=getStoredCart();
            console.log(storedCartId,bottles);
            for(const id of storedCartId){
                console.log(id); 
                const bottle=bottles.find(bottle=>bottle.id===id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            console.log('Saved cart',savedCart);
            setCart(savedCart);
        }
    },[bottles])
    const handleCart=bottle=>{
        const newCart=[...cart,bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }
    const handleRemoveFromCart=id=>{
        //visual cart remove
        //remove from LS
        removeFromLS(id);
    }
    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            {/* <h4>Cart: {cart.length}</h4> */}
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle=><Bottle 
                        key={bottle.id} 
                        bottle={bottle} 
                        handleCart={handleCart}></Bottle>)
                }
            </div>

        </div>
    );
};

export default Bottles;