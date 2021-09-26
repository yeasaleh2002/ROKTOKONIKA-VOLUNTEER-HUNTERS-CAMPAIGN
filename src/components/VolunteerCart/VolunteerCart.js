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
                
            <h3><i className="fas fa-user text-primary"></i> Added Volunteer: {props.volunteerCart.length}</h3>
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


