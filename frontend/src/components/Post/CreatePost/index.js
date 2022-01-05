import React from 'react';
import profile from './../../../assets/Dashboard/profile_img.png';


export default function CreatePost() {


  return (
    <>
      <h1>hii</h1>

      <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Create post
      </button>

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title text-center" id="exampleModalLabel">Create Post</p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className='row'>
                <div className='col-9' style={{ display: 'flex', justifyContent: 'start' }}>
                  <div>
                    <span>
                      <div className='mx-2'>
                        <img src={profile} alt="user profile" className="img-fluid rounded-pill" style={{ height: 50, width: 50 }} />
                      </div>
                    </span>
                  </div>
                  <div className='text-start' style={{ fontSize: 'small' }}>
                    <p className='m-0 p-0'>User Name</p>



                    <div className="dropdown">
                      <button className="btn btn-sm btn-secondary dropdown-toggle"
                       type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className='row'>
                          <div className='col-12' style={{display:'flex'}}>
                          <span className="material-icons">
                          pending_actions
                        </span><span>My Connections
                        </span>

                          </div>

                        </div>
                        

                   
                        
                      </button>
                      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>









                  </div>


                </div>
                <div className='col-3'>

                </div>

              </div>









            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}