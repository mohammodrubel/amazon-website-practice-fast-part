import React from 'react';

const Cart = ({cart}) => {

    let total = 0 
    for (const product of cart ){
        total = total + product.price
    }
    // shiping  
    const shiping = 100 
    // tax 
    const tax = (total + shiping ) * .10 
    // garnd total  
    const grandtotal = total + shiping + tax
    return (
        <div>
            <h4>Order Summary</h4>
                    <p>item : <b>{cart.length}</b></p> <hr />
                    <p>Total : <b>{total.toFixed(2)}</b></p>
                    <p>shiping Cost : {shiping}</p> <hr />
                    <p>Tax Cost: {tax.toFixed(2)}</p> <hr />
                    <h5 className='text-warning'>Grand Total :{grandtotal.toFixed(2)} </h5>
        </div>
    );
};

export default Cart;