import React from 'react';
import './Header.css';

// header component
const Header = () => {
    return (
       
           <div className=" bg-info p-4 navbar-style">
 
           {/* Community name*/}
           <h1 className =" text-danger">ROKTOKONIKA VOLUNTEER HUNTERS CAMPAIGN</h1>
         
         {/* navbar declare */}

        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/roktokonika">Roktokonika</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/allVolunteer">All Volunteer </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/categories">Categories</a>
              </li>
                       
            </ul>

             {/* search button and form */}
            <form className="d-flex flex-fill mx-5">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-danger" type="submit">Search</button>
            </form>
          </div>
        </div>
          
      </nav>
           </div>

           {/* Community budget  */}
           <div>
            <h1> Total Collection Need (Budget) :  $ 100000 </h1>
         </div>

         </div>     
        
    );
};

export default Header;