import React from 'react';
import logo from './../../assets/landingpage_img/logo.png';
import notification from './../../assets/Dashboard/notification.png';
import inbox from './../../assets/Dashboard/inbox.png';
import profile from './../../assets/Dashboard/profile_img.png';
import './dashboard_nav.css';
import Footer from './../Footer/index';


export default function Dashboard() {
  return (
    <>
      <head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </head>

      <body>
        <div className='dashboard-header-dev'>

          <div className='deshboard-header-left-dev'>
            <img src={logo} className='img-fluid' />

          </div>

          <div className='deshboard-header-middle-dev'>

            <div className='dashboard-header-input-serach-dev'>
              <span className="material-icons mx-1">
                arrow_drop_down
              </span>
              <input type="text" placeholder="Search..." />
              <span className="material-icons">
                search
              </span>
            </div>


          </div>

          <div className='deshboard-header-right-dev'>
            <span className="material-icons">
              control_point
            </span>
            <span className="material-icons">
              mail
            </span>
            <span className="material-icons">
              notifications
            </span>
            <div className='dashboard-header-info-dev'>
              <img src={profile} alt="user profile" className="img-fluid user-pic-dev" />
            </div>
          </div>
        </div>






        <div className='dashboard-main-body-dev'>

          <div className='dashboard-main-body-left-dev w-25'>

            <div className='dashboard-left-sidebar-row-dev'>
              <div className='dashboard-header-info-dev' style={{display:'flex'}}>
                <img src={profile} alt="user profile" className="img-fluid" style={{height:60,width:60}} />
                <span className='text-start mx-3 mt-4'><span className='fw-bold'>User Name</span><p>SST India Pvt. Ltd.</p></span>
              
              </div>
              
            </div>
            <div className='dashboard-left-sidebar-row-dev'>
              <span className="material-icons">
                pending_actions
              </span>
              <span>Pending invites</span>
            </div>
            <div className='dashboard-left-sidebar-row-dev'>
              <span className="material-icons">
                person_outline
              </span>
              <span>Profile view</span>
            </div>
            <div className='dashboard-left-sidebar-row-dev'>
              <span className="material-icons">
                drafts
              </span>
              <span>Invite Contacts</span>
            </div>

            <div className='dashboard-left-sidebar-row-dev'>
              <span className="material-icons">
                drafts
              </span>
              <span>View your posts to</span>
            </div>

            <div className='dashboard-left-sidebar-row-dev'>
              <ul className='dropdown'>
                <button type="button" className="btn btn-dark btn-lg">Individuals</button>

              </ul>
            </div>

            <div className='dashboard-left-sidebar-row-dev'>
              <div className='dashboard-header-input-serach-dev'>
                <input type="text" placeholder="Search..." className="w-25 " />
                <span className="material-icons">
                  search
                </span>
              </div>
            </div>




            <div className='dashboard-left-sidebar-row-dev'>

              <div className="form-check mx-5">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  GVR @SST USA
                </label>
              </div>
            </div>
            <div className='dashboard-left-sidebar-row-dev'>

              <div className="form-check mx-5">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  PEXit
                </label>
              </div>
            </div>
            <div className='dashboard-left-sidebar-row-dev'>

              <div className="form-check mx-5">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Guna
                </label>
              </div>
            </div>
            <div className='dashboard-left-sidebar-row-dev'>

              <div className="form-check mx-5">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label" for="flexCheckDefault">
                  Ram
                </label>
              </div>
            </div>

            <div className='dashboard-left-sidebar-row-dev'>
              <span className="material-icons">
                groups
              </span>
              <span>My Circle</span>
            </div>
            <div className='dashboard-left-sidebar-row-dev'>
              <span className="material-icons">
                business_center
              </span>
              <span>Software</span>
            </div>




          </div>






          <div className="dashboard-main-body-middle-dev">
         

            <div className="dashboard-main-middle-dev">

              <div className='dashboard-main-option-dev active'>
                <span className="material-icons">
                  groups
                </span></div>
              <div className='dashboard-main-option-dev active'>
                <span className="material-icons">
                  business_center
                </span></div>
              <div className='dashboard-main-option-dev active'>
                <span className="material-icons">
                  inventory_2
                </span></div>
              <div className='dashboard-main-option-dev active'>
                <span className="material-icons">
                  screen_search_desktop
                </span></div>
              <div className='dashboard-main-option-dev active'>
                <span className="material-icons">
                  miscellaneous_services
                </span></div>
            </div>

            <div className='dashboard-main-middle-message-box-dev'>
              <div className='dashboard-main-middle-message-sender-box-dev'>

                <div className='dashboard-header-info-dev'>
                <img src={profile} alt="user profile" className="img-fluid" style={{height:40,width:40}} />
                </div>
                <form>
                  <input type="text" placeholder="What's on your mind ..." style={{height:36}} />
                </form>


              </div>

              <div className='dashboard-main-middle-message-box-bottom-dev'>
                <div className='dashboard-messege-sender-option-dev'>
                  <span className="material-icons">
                    article
                  </span>
                  <span>files</span>
                </div>
                <div className='dashboard-messege-sender-option-dev'>
                  <span className="material-icons">
                    photo_camera
                  </span>
                  <span>photos</span>
                </div>
                <div className='dashboard-messege-sender-option-dev'>
                  <span className="material-icons">
                    movie
                  </span>
                  <span>video</span>

                </div>
                <div className='dashboard-messege-sender-option-dev'>
                  <span className="material-icons">
                    link
                  </span>
                  <span>links</span>

                </div>
                <div className='dashboard-messege-sender-option-dev'>
                  <span className="material-icons">
                    backup_table
                  </span>
                  <span>youtube</span>

                </div>

              </div>





            </div>

            <div className='dashboard-main-middle-post-box-dev'>

              <div className='dashboard-main-middle-post-sender-box-dev'>
                <div className='dashboard-header-info-dev'>
                  <img src={inbox} alt="user profile" className="img-fluid" />
                </div>

                <div className='dashboard-main-middle-post-sender-info-dev'>
                  <h5>Hi I am PEXit User</h5>
                  <p>Posted  <p>02:00 PM</p></p>

                </div>


              </div>
              <div className='dashboard-main-middle-post-sender-box-bottom-dev'>
                <p className='text-start'>Message</p>

              </div>
              <div className='dashboard-main-middle-post-box-image-dev text-start'>
                <img src={logo} alt="post image" className='img-fluid post-img-dev' />
              </div>



              <div className='dashboard-main-middle-post-box-options-dev'>

                <div className='dashboard-main-middle-post-box-option-dev'>
                  <span className="material-icons">
                    thumb_up_off_alt
                  </span>
                  <span className='mx-2'>Like<span className='mx-1'>()</span></span>
                </div>

                <div className='dashboard-main-middle-post-box-option-dev'>
                  <span className="material-icons">
                    chat
                  </span>
                  <span className='mx-1'>Comment(s)<span className='mx-1'>()</span></span>
                </div>

                <div className='dashboard-main-middle-post-box-option-dev'>
                  <span className="material-icons">
                    share
                  </span>
                  <span className='mx-2'>Share<span className='mx-1'>()</span></span>
                </div>

                <div className='dashboard-main-middle-post-box-option-dev'>
                  <div className='' style={{ display: 'block' }}>
                    <span className="material-icons">
                      email
                    </span>
                    <span className=''><small><br />Email</small></span>
                  </div>


                </div>


              </div>


            </div>

            <div className='dashboard-main-middle-post-box-dev'>

              <div className='dashboard-main-middle-post-sender-box-dev'>
                <div className='dashboard-header-info-dev'>
                  <img src={inbox} alt="user profile" className="img-fluid" />
                </div>

                <div className='dashboard-main-middle-post-sender-info-dev'>
                  <h5>Hi I am PEXit User</h5>
                  <p>Posted  <p>02:00 PM</p></p>

                </div>


              </div>
              <div className='dashboard-main-middle-post-sender-box-bottom-dev'>
                <p className='text-start'>Message</p>

              </div>
              <div className='dashboard-main-middle-post-box-image-dev text-start'>
                <img src={logo} alt="post image" className='img-fluid post-img-dev' />
              </div>



              <div className='dashboard-main-middle-post-box-options-dev'>

                <div className='dashboard-main-middle-post-box-option-dev'>
                  <span className="material-icons">
                    thumb_up_off_alt
                  </span>
                  <span className='mx-2'>Like<span className='mx-1'>()</span></span>
                </div>

                <div className='dashboard-main-middle-post-box-option-dev'>
                  <span className="material-icons">
                    chat
                  </span>
                  <span className='mx-1'>Comment(s)<span className='mx-1'>()</span></span>
                </div>

                <div className='dashboard-main-middle-post-box-option-dev'>
                  <span className="material-icons">
                    share
                  </span>
                  <span className='mx-2'>Share<span className='mx-1'>()</span></span>
                </div>

                <div className='dashboard-main-middle-post-box-option-dev'>
                  <div className='' style={{ display: 'block' }}>
                    <span className="material-icons">
                      email
                    </span>
                    <span className=''><small><br />Email</small></span>
                  </div>


                </div>


              </div>


            </div>
            <div className='dashboard-main-middle-post-box-dev'>

<div className='dashboard-main-middle-post-sender-box-dev'>
  <div className='dashboard-header-info-dev'>
    <img src={inbox} alt="user profile" className="img-fluid" />
  </div>

  <div className='dashboard-main-middle-post-sender-info-dev'>
    <h5>Hi I am PEXit User</h5>
    <p>Posted  <p>02:00 PM</p></p>

  </div>


</div>
<div className='dashboard-main-middle-post-sender-box-bottom-dev'>
  <p className='text-start'>Message</p>

</div>
<div className='dashboard-main-middle-post-box-image-dev text-start'>
  <img src={logo} alt="post image" className='img-fluid post-img-dev' />
</div>



<div className='dashboard-main-middle-post-box-options-dev'>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      thumb_up_off_alt
    </span>
    <span className='mx-2'>Like<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      chat
    </span>
    <span className='mx-1'>Comment(s)<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      share
    </span>
    <span className='mx-2'>Share<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <div className='' style={{ display: 'block' }}>
      <span className="material-icons">
        email
      </span>
      <span className=''><small><br />Email</small></span>
    </div>


  </div>


</div>


</div>

<div className='dashboard-main-middle-post-box-dev'>

<div className='dashboard-main-middle-post-sender-box-dev'>
  <div className='dashboard-header-info-dev'>
    <img src={inbox} alt="user profile" className="img-fluid" />
  </div>

  <div className='dashboard-main-middle-post-sender-info-dev'>
    <h5>Hi I am PEXit User</h5>
    <p>Posted  <p>02:00 PM</p></p>

  </div>


</div>
<div className='dashboard-main-middle-post-sender-box-bottom-dev'>
  <p className='text-start'>Message</p>

</div>
<div className='dashboard-main-middle-post-box-image-dev text-start'>
  <img src={logo} alt="post image" className='img-fluid post-img-dev' />
</div>



<div className='dashboard-main-middle-post-box-options-dev'>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      thumb_up_off_alt
    </span>
    <span className='mx-2'>Like<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      chat
    </span>
    <span className='mx-1'>Comment(s)<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      share
    </span>
    <span className='mx-2'>Share<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <div className='' style={{ display: 'block' }}>
      <span className="material-icons">
        email
      </span>
      <span className=''><small><br />Email</small></span>
    </div>


  </div>


</div>


</div>

<div className='dashboard-main-middle-post-box-dev'>

<div className='dashboard-main-middle-post-sender-box-dev'>
  <div className='dashboard-header-info-dev'>
    <img src={inbox} alt="user profile" className="img-fluid" />
  </div>

  <div className='dashboard-main-middle-post-sender-info-dev'>
    <h5>Hi I am PEXit User</h5>
    <p>Posted  <p>02:00 PM</p></p>

  </div>


</div>
<div className='dashboard-main-middle-post-sender-box-bottom-dev'>
  <p className='text-start'>Message</p>

</div>
<div className='dashboard-main-middle-post-box-image-dev text-start'>
  <img src={logo} alt="post image" className='img-fluid post-img-dev' />
</div>



<div className='dashboard-main-middle-post-box-options-dev'>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      thumb_up_off_alt
    </span>
    <span className='mx-2'>Like<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      chat
    </span>
    <span className='mx-1'>Comment(s)<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      share
    </span>
    <span className='mx-2'>Share<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <div className='' style={{ display: 'block' }}>
      <span className="material-icons">
        email
      </span>
      <span className=''><small><br />Email</small></span>
    </div>


  </div>


</div>


</div>

<div className='dashboard-main-middle-post-box-dev'>

<div className='dashboard-main-middle-post-sender-box-dev'>
  <div className='dashboard-header-info-dev'>
    <img src={inbox} alt="user profile" className="img-fluid" />
  </div>

  <div className='dashboard-main-middle-post-sender-info-dev'>
    <h5>Hi I am PEXit User</h5>
    <p>Posted  <p>02:00 PM</p></p>

  </div>


</div>
<div className='dashboard-main-middle-post-sender-box-bottom-dev'>
  <p className='text-start'>Message</p>

</div>
<div className='dashboard-main-middle-post-box-image-dev text-start'>
  <img src={logo} alt="post image" className='img-fluid post-img-dev' />
</div>



<div className='dashboard-main-middle-post-box-options-dev'>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      thumb_up_off_alt
    </span>
    <span className='mx-2'>Like<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      chat
    </span>
    <span className='mx-1'>Comment(s)<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      share
    </span>
    <span className='mx-2'>Share<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <div className='' style={{ display: 'block' }}>
      <span className="material-icons">
        email
      </span>
      <span className=''><small><br />Email</small></span>
    </div>


  </div>


</div>


</div>

<div className='dashboard-main-middle-post-box-dev'>

<div className='dashboard-main-middle-post-sender-box-dev'>
  <div className='dashboard-header-info-dev'>
    <img src={inbox} alt="user profile" className="img-fluid" />
  </div>

  <div className='dashboard-main-middle-post-sender-info-dev'>
    <h5>Hi I am PEXit User</h5>
    <p>Posted  <p>02:00 PM</p></p>

  </div>


</div>
<div className='dashboard-main-middle-post-sender-box-bottom-dev'>
  <p className='text-start'>Message</p>

</div>
<div className='dashboard-main-middle-post-box-image-dev text-start'>
  <img src={logo} alt="post image" className='img-fluid post-img-dev' />
</div>



<div className='dashboard-main-middle-post-box-options-dev'>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      thumb_up_off_alt
    </span>
    <span className='mx-2'>Like<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      chat
    </span>
    <span className='mx-1'>Comment(s)<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      share
    </span>
    <span className='mx-2'>Share<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <div className='' style={{ display: 'block' }}>
      <span className="material-icons">
        email
      </span>
      <span className=''><small><br />Email</small></span>
    </div>


  </div>


</div>


</div>

<div className='dashboard-main-middle-post-box-dev'>

<div className='dashboard-main-middle-post-sender-box-dev'>
  <div className='dashboard-header-info-dev'>
    <img src={inbox} alt="user profile" className="img-fluid" />
  </div>

  <div className='dashboard-main-middle-post-sender-info-dev'>
    <h5>Hi I am PEXit User</h5>
    <p>Posted  <p>02:00 PM</p></p>

  </div>


</div>
<div className='dashboard-main-middle-post-sender-box-bottom-dev'>
  <p className='text-start'>Message</p>

</div>
<div className='dashboard-main-middle-post-box-image-dev text-start'>
  <img src={logo} alt="post image" className='img-fluid post-img-dev' />
</div>



<div className='dashboard-main-middle-post-box-options-dev'>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      thumb_up_off_alt
    </span>
    <span className='mx-2'>Like<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      chat
    </span>
    <span className='mx-1'>Comment(s)<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <span className="material-icons">
      share
    </span>
    <span className='mx-2'>Share<span className='mx-1'>()</span></span>
  </div>

  <div className='dashboard-main-middle-post-box-option-dev'>
    <div className='' style={{ display: 'block' }}>
      <span className="material-icons">
        email
      </span>
      <span className=''><small><br />Email</small></span>
    </div>


  </div>


</div>


</div>


            

            
          
          </div>









          <div className='dashboard-main-body-right-dev w-25'>


            <div className='row'>
              <div className='col-lg-12 my-5'>
                <div className='dashboard-right-sidebar-row-dev'>
                  <span className="material-icons">
                    add_circle_outline
                  </span>
                  <span>Create New Group</span>
                </div>

                <div className='dashboard-right-sidebar-row-dev'>
                  <span className="material-icons">
                    add_circle_outline
                  </span>
                  <span>Add Product</span>
                </div>

                <div className='dashboard-right-sidebar-row-dev'>
                  <span className="material-icons">
                    add_circle_outline
                  </span>
                  <span>Publish Advertisement</span>
                </div>

                <div className='dashboard-right-sidebar-row-dev'>
                  <span className="material-icons">
                    add_circle_outline
                  </span>
                  <span>Post Sponsored Content</span>
                </div>

                <div className='dashboard-right-sidebar-row-dev'>
                  <span className="material-icons">
                    add_circle_outline
                  </span>
                  <span>Post Job</span>
                </div>

                <div className='dashboard-right-sidebar-row-dev'>
                  <span className="material-icons">
                    add_circle_outline
                  </span>
                  <span>Add Software</span>
                </div>

                <div className='dashboard-right-sidebar-row-dev'>
                  <span className="material-icons">
                    add_circle_outline
                  </span>
                  <span>Add Service</span>
                </div>

              </div>
            </div>


            <div className='row'>
              <div className='col-lg-12 my-5'>

                <div className='dashboard-right-sidebar-row-dev'>
                  <span><p className='h6 fw-bold'>Active <span>()</span></p></span>
                </div>

                <div className='dashboard-right-sidebar-row-dev mb-3'>
                  <div className='dashboard-header-info-dev'>
                  <img src={profile} alt="user profile" className="img-fluid" style={{height:60,width:60}} />
                    <span className='mx-4 fw-bold h5'>User Name</span>
                  </div>
                </div>

                <div className='dashboard-right-sidebar-row-dev mb-3'>
                  <div className='dashboard-header-info-dev'>
                  <img src={profile} alt="user profile" className="img-fluid" style={{height:60,width:60}} />
                    <span className='mx-4 fw-bold'>User Name</span>
                  </div>
                </div>

                <div className='dashboard-right-sidebar-row-dev mb-3'>
                  <div className='dashboard-header-info-dev'>
                  <img src={profile} alt="user profile" className="img-fluid" style={{height:60,width:60}} />
                    <span className='mx-4 fw-bold'>User Name</span>
                  </div>
                </div>






              </div>
            </div>





          </div>


        </div>



      </body>

      <Footer />




    </>


  )
}
