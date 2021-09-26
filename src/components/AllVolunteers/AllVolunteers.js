import React, { useEffect, useState } from 'react';
import VolunteerCart from '../VolunteerCart/VolunteerCart';
import VolunteersDetails from '../VolunteersDetails/VolunteersDetails';
import './AllVolunteers.css';

const AllVolunteers = () => {

    // volunteers state declare
   const [volunteers, setVolunteers] = useState([]);

   // volunteerCart state declare
   const [volunteerCart, setVolunteerCart] = useState([]);


 // add volunteer button event handler 
  const handleAddVolunteer = (volunteer) => {

    const newVolunteerCart = [...volunteerCart, volunteer];
    setVolunteerCart(newVolunteerCart);

}


 // fake data load
   useEffect(() => {
       fetch('/volunteer.json')
       .then(response => response.json())
       .then(data => setVolunteers(data))
   } , [])


    return (
        <div className = "allVolunteers-style">
             <div className="row">

                 {/* VoluteersDetails part dynamicly accessing */}

                 <div className="col-md-9">
                    <div className="row  g-4 container m-3">
                        {
                            volunteers.map(volunteer => <VolunteersDetails

                                key = {volunteer._id}
                                 volunteer= {volunteer}
                                 handleAddVolunteer = {handleAddVolunteer}
                                >

                                </VolunteersDetails>)
                        }
                    </div>
                 </div>

           {/* VoluteerCart part dynamicly accessing */}
                 <div className="col-md-3">                   

                     <VolunteerCart                    
                     volunteerCart ={volunteerCart}                    
                     >
                     </VolunteerCart>
              
                 </div>

             </div>
        </div>
    );
};

export default AllVolunteers;