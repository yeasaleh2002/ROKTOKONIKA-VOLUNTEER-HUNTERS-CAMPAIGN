import React, { useEffect, useState } from 'react';
// import VolunteerCart from '../VolunteerCart/VolunteerCart';
import VolunteersDetails from '../VolunteersDetails/VolunteersDetails';
import './AllVolunteers.css';

const AllVolunteers = () => {

   const [volunteers, setVolunteers] = useState([]);

/*    const [ volunteerCart , setVolunteerCart ] = useState([]);


   const handleAddVolunteer=(volunteer)=>{

    const newVolunteerCart=[ ...volunteerCart  , volunteer ]
    setVolunteerCart(newVolunteerCart)
} */



   useEffect(() => {
       fetch('/volunteer.json')
       .then(response => response.json())
       .then(data => setVolunteers(data))
   } , [])


    return (
        <div>
             <div className="row">
                 <div className="col-md-9">
                    <div className="row  g-4 container m-3">
                        {
                            volunteers.map(volunteer => <VolunteersDetails

                                key = {volunteer._id}
                                 volunteer= {volunteer}

                                //  handleAddVolunteer={handleAddVolunteer}
                                >

                                </VolunteersDetails>)
                        }
                    </div>
                 </div>



                 <div className="col-md-3">
              
                         {/*  <VolunteerCart  
                          
                          volunteerCart={volunteerCart}>

                          </VolunteerCart> */}

                 </div>

             </div>
        </div>
    );
};

export default AllVolunteers;