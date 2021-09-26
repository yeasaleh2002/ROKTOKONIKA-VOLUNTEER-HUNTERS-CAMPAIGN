import React from 'react';
import './VolunteerCart.css'

// volunteerCart component
const VolunteerCart = (props) => {

    // Destructuring volunteerCart

    const {volunteerCart} = props;
    let total = 0;
    for(const volunteer of volunteerCart) {
        total = total + volunteer.balance;
    }

    // return VolunterCart data
    return (
        <div className="pt-5 pe-2">
           <div className="volunteerCart-style card shadow-lg">
                
            <h3>Added Volunteer: {props.volunteerCart.length}</h3>
            <br />
            <h2>Total Collection: ${total}</h2>
            <br />
            <h4>Donors Name: </h4>

            {/* access volunter data who donate - using array loop  */}
            <ul>
                {
                  volunteerCart.map((volunteer,i) => <li key={i}> <b> {volunteer.name} </b> </li>)
                }
            </ul>
           
           </div>
        </div>
    );
};

export default VolunteerCart;













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