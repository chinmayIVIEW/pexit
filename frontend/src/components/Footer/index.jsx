import React from 'react';
import './footer.css';
export default function Footer() {

  return (


    <>
  <footer className='mt-0'>

<div className='row w-100' >
    <div className='col-md-5 my-3' style={{ display: 'flex', alignContent: 'start',alignItems:'center' }}>
        <span className='m-0 p-0 h5 my-0 ms-3'>Copyright @ 2020, PEXit</span>
    </div>
    <div className='col-md-1 my-3'>
        <span>
            About
        </span>

    </div>
    <div className='col-md-1 my-3'>
        <span>Supports</span>

    </div>
    <div className='col-md-1 my-3'>
        <span>Terms</span>

    </div>
    <div className='col-md-1 my-3'>
        <span>Pricing</span>

    </div>
    <div className='col-md-1 my-3'>
        <span>Partners</span>

    </div>
    <div className='col-md-1 my-2' >
        <span>
        <form>
        <select className="form-select" aria-label="Default select example" style={{width:'auto',backgroundColor:'#dbdbdb',style:'none',borderStyle:'none'}}>
                        <option selected>Language</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>

        </form>
    </span>
        

        </div>
   



</div>

</footer>



      {/* <footer>
        <nav className="navbar navbar-expand-lg footer-bg-color-dev text-dark">
          <div className="container-fluid" >
            <a className="navbar-brand text-dark" href="#">
              Copyright @ 2020, PEXit
            </a>
            <ul className="navbar-nav navbar-nav-footer-dev">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Supports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Terms</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"> Partners</a>
              </li>
              <li className="nav-item dropup">
               
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Language
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Hindi</a></li>
                  <li><a className="dropdown-item" href="#">English</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Others</a></li>
                </ul>
              </li>
            </ul>



          </div>
        </nav>
      </footer> */}
  


    </>




  );
}
