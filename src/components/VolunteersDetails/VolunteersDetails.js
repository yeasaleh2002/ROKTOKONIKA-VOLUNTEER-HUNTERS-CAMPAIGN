import React from 'react';
import './VolunteersDetails.css';

// VolunteersDetails component
const VolunteersDetails = (props) => {

  // Destructuring volunteersDetails
  const {picture,title, name, balance, address, email, age } = props.volunteer || {}


    return (
        <div className = " container col-md-4">
           
            <div className="row  "> 
  
              {/* volunteer data dynamicly accessing */}

                <div className="col">
                      <div className="card-design shadow  card h-100">
                      <div className = "volunteer-picture">
                      <img src={picture} className="card-img-top" alt="..."/>
                      </div>
                        <div className="card-body">
                          <h5 className="card-title"> <b> Name : </b> {name}</h5>
                          <h5 className="card-title"> <b> Title : </b> {title}</h5>
                          <p className="card-title"> <b> Address :</b>  {address}</p>
                          <p className="card-text"> <b> Age : </b> {age}</p>
                          <p className="card-text"> <b> Email : </b> {email}</p>
                          <h3 className=" card-text"> <b> Balance : </b>  ${balance}</h3>

                          {/* button handling */}
                          <button 
                            onClick = {() => props.handleAddVolunteer(props.volunteer)}
                              
                                className="button-style btn btn-primary"><i className="fas fa-hands-helping"></i> Add Voluteer
                          </button>
                        </div>
                      </div>
                </div>
            </div>
       </div>
    );
};

export default VolunteersDetails;