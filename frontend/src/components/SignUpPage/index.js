import React from 'react';
import './SignupPage.css';
import Header from './../Header/index';
import Footer from './../Footer/index';


export default function SignUpPage() {




  return (
    <>
      <Header />

      <section>
        <div className="container">


          <form className="sign-Up-dev">

            <div className="row">
              <div className="col-lg-6 col-md-12 col-sm-12 p-2 bg-color-signUp-left-dev">

                <div className="text-center mt-3 h6">
                  <span>Social Sign Up</span>
                </div>

                {/* <div className="form-group sigUp-form-left-dev">
                 
                  <input type="email" className="form-control my-2" id="email" placeholder="Enter email" name="email" />
                </div> */}
                <div className="form-group sigUp-form-left-dev">

                  <button type="submit" className="btn btn-primary my-2"><h3>Sign up with Google</h3></button>
                </div>
                <div className="form-group sigUp-form-left-dev">

                  <button type="submit" className="btn btn-primary my-2"><h3>Sign up with Facebook</h3></button>
                </div>
                <div className="form-group sigUp-form-left-dev">

                  <button type="submit" className="btn btn-primary my-2"><h3>Sign up with Linkedin</h3></button>
                </div>


              </div>



              <div className="col-lg-6 col-md-12 col-sm-12 p-2 bg-color-signUp-right-dev">
                <div className='text-center my-3 h6'>
                  <span >Create New Account</span>
                </div>

                <div className="form-group sigUp-form-right-dev">

                  <input type="text" className="form-control my-2" placeholder="display name" name="display name" />
                </div>
                <div className="form-group sigUp-form-right-dev">

                  <input type="email" className="form-control my-3" placeholder="user name" name="user name" />
                </div>
                <div className="form-group sigUp-form-right-dev">

                  <input type="password" className="form-control my-2" id="pwd" placeholder="password" name="pwd" />
                </div>
                <div className="form-group sigUp-form-right-dev">

                  <input type="email" className="form-control my-3" id="email" placeholder="email" name="email" />
                </div>
                <div className="form-group">
                  <div className='row'>
                    <div className='col-lg-12 col-md-12 col-m-12 mb-1'>
                      <div className="form-group placeholder-style-dev">
                        <input type="tel" className="form-control" id="phone" placeholder="+91" name="phone" style={{ height: '3.5rem', width: '15%', marginLeft: '0%', display: 'inline' }} />
                        <input type="tel" className="form-control" id="phone" placeholder="phone" name="phone" style={{ height: '3.5rem', width: '70%', display: 'inline', marginLeft: '5%' }} />
                      </div>
                    </div>

                  </div>
                </div>
                <div className="form-group sigUp-form-right-dev">

                  <input type="text" className="form-control my-2" id="" placeholder="country" name="country" />
                </div>
                <div className="form-group">

                  <p className='h4 text-center px-5 my-4 mx-2'> By clicking Jion Now or Log In, you agree to PEXit's terms </p>


                </div>
                <div className="form-group">

                  <button type="button" className="btn btn-secondary btn-lg btn-block mb-5" style={{ width: '90%', textAlign: 'center' }}><h4>Join Now</h4></button>


                </div>







              </div>

            </div>





          </form>
        </div>








        {/* 

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#myModal">
          Open modal
        </button>
        <div className="modal fade" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className="modal-title">Modal Heading</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>


              <div className="modal-body">
                Modal body..
              </div>


              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>

            </div>
          </div>
        </div> */}








      </section>

      <Footer />
    </>
  )
}