import React from 'react';
import './VolunteersDetails.css';

const VolunteersDetails = (props) => {

  const {picture,title, name, balance, address, email, age } = props.volunteer || {}



    return (
        <div className = " container col-md-4">
           

            <div className="row  "> 
  
  <div className="col">
    <div className="card-design shadow  card h-100">
    <div className = "volunteer-picture">
    <img src={picture} className="card-img-top" alt="..."/>
    </div>
      <div className="card-body">
        <h5 className="card-title">Name : {name}</h5>
        <h5 className="card-title">Title : {title}</h5>
        <p className="card-title">Address : {address}</p>
        <p className="card-text">Age : {age}</p>
        <p className="card-text">Email : {email}</p>
        <p className="card-text">Balance : {balance}</p>
        <button 
              onClick={ ()=> props.handleAddVolunteer(props.product)}
              className="btn btn-warning"><i className="fas fa-hands-helping"></i> Add Voluteer
        </button>
      </div>
    </div>
  </div>
</div>
         </div>
    );
};

export default VolunteersDetails;