/* import React from 'react';

const VolunteerCart = (props) => {

    const {volunteerCart}= props || {}


    const totalReducer=(prevValue,currentValue)=>prevValue+currentValue.price

   const total = volunteerCart.reduce(  totalReducer   ,  0).toFixed(2)

    return (
        <div>
            <div>
              <h3><i className="fas fa-user"></i> Volunteer Added: 
                 {volunteerCart.length}
               </h3>
                <h2>Total Collection: {total}</h2>
               
               <ul>
                   {
                       volunteerCart.map( product=> <li>{product.name}</li>)
                   }
               </ul>
        </div>
        </div>
    );
};

export default VolunteerCart; */