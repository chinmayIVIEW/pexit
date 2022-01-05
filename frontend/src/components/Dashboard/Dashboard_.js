
import React from 'react';
import logo from './../../assets/landingpage_img/logo.png';
// import notification from './../../assets/Dashboard/notification.png';
// import inbox from './../../assets/Dashboard/inbox.png';
import profile from './../../assets/Dashboard/profile_img.png';
import './dashboard__.css';
import Footer from './../Footer/index';


export default function Dashboard_() {


    function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }
      
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
      }




    return (
        <>


            <header>
                <div className='container-fluid' style={{ backgroundColor: '#dbdbdb' }}>

                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="container-fluid m-0 p-0">
                            <div className='row w-100 m-0 p-0' style={{ display: 'flex', alignItems: 'center' }}>

                                <div className='col-3'>
                                    <div className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
                                        <a className="" href="#"> <img src={logo} className='img-fluid' /></a>
                                    </div>


                                </div>

                                <div className='col-6'>
                                    <div className='' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <form className="">
                                            <div className='dashboard-header-input-search-dev'>
                                                <span className="material-icons mx-1">
                                                    arrow_drop_down
                                                </span>
                                                <input className="form-control" type="search" placeholder="Search ..." aria-label="Search" />

                                                <button className="btn" type="submit"> <span className="material-icons">
                                                    search
                                                </span></button>
                                            </div>
                                        </form>
                                    </div>


                                </div>

                                <div className='col-3 m-0 p-0'>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
                                        <span className="material-icons mx-auto me-2">
                                            control_point
                                        </span>
                                        <span className="material-icons mx-2">
                                            mail
                                        </span>
                                        <span className="material-icons mx-2">
                                            notifications
                                        </span>
                                        <span>
                                            <div className='mx-2 dashboard-user-profile-dev'>
                                                <img src={profile} alt="user profile" className="img-fluid rounded-pill" style={{ height: 50, width: 50 }} />
                                            </div>
                                        </span>
                                        <span>
                                            <div className='me-0 header-bar-dev'>

                                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                    <span className="navbar-toggler-icon"></span>
                                                </button>
                                            </div>
                                        </span>



                                    </div>





                                </div>
                                <div className='col-2'>
                                </div>


                            </div>



                            {/*                            
                            <div className='dashboard-header-input-search-dev'>
                                <span className="material-icons mx-1">
                                    arrow_drop_down
                                </span>
                                <input type="text" placeholder="Search..." />
                                <span className="material-icons">
                                    search
                                </span>
                            </div>
                           */}








                            <div className="collapse navbar-collapse" id="navbarSupportedContent">



                            </div>
                        </div>
                    </nav>



                </div>
            </header>


            <section>


                


                <div className='container-fluid m-0 p-0 '>
                    <div className='row m-0 p-0 main-row-1' >

                        <div className='col-lg-3 mx-0 bg-light left-side-dev-1' >



                            <div className='row ms-auto me-auto '>
               


                                <div className='col-12 mt-3'>
                                    {/* <div className='row mb-3 p-0'>
                                        <div className='col-12'>
                                            <div id="mySidenav" className='me-5' style={{ display: 'flex', justifyContent: 'right', cursor: 'pointer' }}>
                                                <a href='javascript:void(0)' onclick="closeNav()">
                                                    <span className="material-icons">
                                                        arrow_back
                                                    </span>
                                                </a>

                                            </div>


                                        </div>
                                    </div> */}


                                    <div className='row'>
                                        <div className='col-3' style={{ justifyContent: 'center', display: 'flex' }}>
                                            <img src={profile} alt="user profile" className="img-fluid rounded-pill" style={{ height: 60, width: 60 }} />


                                        </div>
                                        <div className='col-9' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className='text-start mx-0 mt-0'><span className='fw-bold'>User Name</span><p>SST India Pvt. Ltd.</p></span>

                                        </div>
                                    </div>

                                    <div className='row my-3'>
                                        <div className='col-12' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='mx-2'>Pending invites <span className='ms-auto'>()</span></span>
                                        </div>


                                    </div>

                                    <div className='row my-3'>
                                        <div className='col-12' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='mx-2'>Profile View <span className='ms-auto'>()</span></span>
                                        </div>


                                    </div>

                                    <div className='row my-3'>
                                        <div className='col-12' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='mx-2'>Invite Contacts </span>
                                        </div>


                                    </div>

                                    <div className='row my-3'>
                                        <div className='col-12'>

                                            <div className="row my-2">
                                                <div className="col-12" style={{ justifyContent: 'start', display: 'flex' }}>
                                                <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='w-75'>
                                            <select className="form-select m-0 p-0 ms-2 fw-bold" aria-label="Default select example" style={{border:'none'}}>
                                                        <option className='fw-bold' selected>View your posts to</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>

                                            </span>
                                                

                                                </div>
                                            </div>

                                        
                                            <div className='row me-4'>
                                                <div className='col-2'>
                                              
                                                </div>
                                                <div className='col-10' style={{ justifyContent: 'start', display: 'flex', alignItems: 'start' }}>
                                                    <select className="form-select w-100 p-2" aria-label="Default select example">
                                                        <option selected>Individuals</option>
                                                        <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option>
                                                    </select>

                                                </div>

                                            </div>





                                        </div>

                                    </div>

                                    <div className='row my-3'>
                                        <div className='col-12'>
                                            <div className="input-group" style={{ display: 'inline' }}>

                                                <div className='row me-4'>
                                                    <div className='col-2'>

                                                    </div>
                                                    <div className='col-10' >
                                                        <div className="form-outline w-100" style={{ justifyContent: 'center', display: 'flex' }}>
                                                            <div className='dashboard-leftside-search-dev'>
                                                                <input type="search" placeholder='Search ...' id="form1" className="form-control" />
                                                            </div>
                                                            <button type="button" className="btn" style={{ marginLeft: -50, border: 'none', outline: 'none' }}>
                                                                <span className="material-icons mt-0">
                                                                    search
                                                                </span>
                                                            </button>

                                                        </div>

                                                    </div>



                                                </div>




                                            </div>

                                        </div>

                                    </div>

                                    <div className='row my-3'>
                                        <div className='col-12' style={{ fontSize: 'small' }}>
                                            <div className="form-check mx-5">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    GVR @SST USA
                                                </label>
                                            </div>
                                            <div className="form-check mx-5">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    PEXit
                                                </label>
                                            </div>
                                            <div className="form-check mx-5">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Guna
                                                </label>
                                            </div>
                                            <div className="form-check mx-5">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Ram
                                                </label>
                                            </div>





                                        </div>

                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-12' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='mx-2'>My Circle</span>
                                        </div>


                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-12' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='mx-2'>Software</span>
                                        </div>


                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-12' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='mx-2'>Products</span>
                                        </div>


                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-12' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='mx-2'>Job</span>
                                        </div>


                                    </div>
                                    <div className='row my-3'>
                                        <div className='col-12' style={{ justifyContent: 'start', display: 'flex' }}>
                                            <span className="material-icons">
                                                pending_actions
                                            </span>
                                            <span className='mx-2'>Services</span>
                                        </div>


                                    </div>


                                </div>
                            </div>






                        </div>







                        <div className='col-lg-6 mx-0 p-0 bg-light center-main-div-1'>

                            <div className='row m-0 p-0'>
                                <div className='col-12 m-0 p-0 '>
                                    <main className='main-menu-sticky-dev'>
                                        <div className='container-fluid pt-2' style={{ backgroundColor: '#dbdbdb' }}>
                                            <div className='row mt-0 p-0 mb-0'>
                                                <div className='col-3'>
                                                    <span className="material-icons">
                                                        groups
                                                    </span>
                                                    <p className='' style={{ fontSize: 'small' }} >My Circle</p>

                                                </div>
                                                <div className='col-2'>
                                                    <span className="material-icons">
                                                        groups
                                                    </span>
                                                    <p style={{ fontSize: 'small' }}>Software</p>

                                                </div>
                                                <div className='col-2'>
                                                    <span className="material-icons">
                                                        groups
                                                    </span>
                                                    <p style={{ fontSize: 'small' }}>Product</p>

                                                </div>
                                                <div className='col-2'>
                                                    <span className="material-icons">
                                                        groups
                                                    </span>
                                                    <p style={{ fontSize: 'small' }}>Job</p>

                                                </div>
                                                <div className='col-3'>
                                                    <span className="material-icons">
                                                        groups
                                                    </span>
                                                    <p style={{ fontSize: 'small' }}>Service</p>

                                                </div>



                                            </div>

                                        </div>
                                    </main>



                                    <div className='container-fluid mb-3 mt-3' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row m-0 p-0'>
                                            <div className='col-2'>
                                                <div className='mt-4' style={{ justifyContent: 'center', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ height: 45, width: 45, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-10'>
                                                <div className="form-outline mt-4 dashboard-msg-sender-dev" style={{ justifyContent: 'start', display: 'flex' }}>

                                                    <input type="search" id="form1" className="form-control w-100" placeholder="What's on your mind ..." />


                                                </div>
                                            </div>
                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row my-1 mx-auto'>
                                                <div className='col-2 mx-auto'>

                                                </div>

                                                <div className='col-2 mx-auto' style={{ fontSize: 'small', justifyContent: '', display: 'flex' }}>
                                                    <span className="material-icons">
                                                        article
                                                    </span>
                                                    <span className='mx-1'>files</span>

                                                </div>
                                                <div className='col-2 mx-auto' style={{ fontSize: 'small', justifyContent: '', display: 'flex' }}>
                                                    <span className="material-icons">
                                                        article
                                                    </span>
                                                    <p className='mx-1'>photo</p>

                                                </div>
                                                <div className='col-2 mx-auto' style={{ fontSize: 'small', justifyContent: '', display: 'flex' }}>
                                                    <span className="material-icons">
                                                        article
                                                    </span>
                                                    <p className='mx-1'>video</p>

                                                </div>
                                                <div className='col-2 mx-auto' style={{ fontSize: 'small', justifyContent: 'center', display: 'flex' }}>
                                                    <span className="material-icons">
                                                        article
                                                    </span>
                                                    <p className='mx-1'>links</p>

                                                </div>
                                                <div className='col-2 mx-auto' style={{ fontSize: 'small', justifyContent: '', display: 'flex' }}>
                                                    <span className="material-icons">
                                                        article
                                                    </span>
                                                    <p className='mx-1'>youtube</p>

                                                </div>

                                            </div>

                                        </div>


                                    </div>

                                    <div className='container-fluid my-2' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-7'>
                                                <div className='mt-4' style={{ justifyContent: 'start', display: 'flex' }}>
                                                    <span className='h6'>Hi I am PEXit User</span><br />
                                                </div>
                                                <div className='text-start'>
                                                    <p className='p-0' style={{ fontSize: 'small' }}>Posted  <p>02:00 PM</p></p>
                                                </div>


                                            </div>
                                            <div className='col-3'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex', cursor: 'pointer' }}>
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>


                                                </div>

                                            </div>

                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-start' style={{fontSize:'13px'}}>
                                                    <p>
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box <span>...</span> <span className='text-danger cursor-pointer' style={{ cursor: 'pointer' }}>read more</span>


                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12' style={{ display: 'flex' }} >
                                                <div className='mx-2' >
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>
                                                <div className='mx-2'>
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>



                                            </div>

                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row ms-0'>
                                                <div className='col-md-12'>
                                                    <hr className='w-100' />

                                                    <ul className='ms-0 dashboard-post-options-dev' style={{ display: 'flex' }}>
                                                        <li>
                                                            <span className="material-icons">
                                                                thumb_up_off_alt
                                                            </span>
                                                            <span className='ms-1'>Like<span className='ms-1'>()</span></span>
                                                        </li>
                                                        <li><span className="material-icons">
                                                            chat
                                                        </span>
                                                            <span className='ms-1'>Comment(s)<span className='ms-1'>()</span></span></li>
                                                        <li><span className="material-icons">
                                                            share
                                                        </span>
                                                            <span className='ms-1'>Share<span className='ms-1'>()</span></span></li>
                                                        <li>
                                                            <ul >
                                                                <li style={{ display: 'grid' }}>
                                                                    <span className="material-icons">
                                                                        email
                                                                    </span>
                                                                    <p className='m-0 p-0'><small>Email</small></p>

                                                                </li>
                                                            </ul>

                                                        </li>
                                                    </ul>


                                                    <hr className='mx-auto w-100' />
                                                </div>

                                            </div>

                                        </div>




                                    </div>

                                    <div className='container-fluid my-2' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-7'>
                                                <div className='mt-4' style={{ justifyContent: 'start', display: 'flex' }}>
                                                    <span className='h6'>Hi I am PEXit User</span><br />
                                                </div>
                                                <div className='text-start'>
                                                    <p className='p-0' style={{ fontSize: 'small' }}>Posted  <p>02:00 PM</p></p>
                                                </div>


                                            </div>
                                            <div className='col-3'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex', cursor: 'pointer' }}>
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>


                                                </div>

                                            </div>

                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-start'>
                                                    <p id="dots">
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box <span>...</span> <span className='text-danger cursor-pointer' style={{ cursor: 'pointer' }}>read more</span>


                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12' style={{ display: 'flex' }} >
                                                <div className='mx-2' >
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>
                                                <div className='mx-2'>
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>



                                            </div>

                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row ms-0'>
                                                <div className='col-md-12'>
                                                    <hr className='w-100' />

                                                    <ul className='ms-0 dashboard-post-options-dev' style={{ display: 'flex' }}>
                                                        <li>
                                                            <span className="material-icons">
                                                                thumb_up_off_alt
                                                            </span>
                                                            <span className='ms-1'>Like<span className='ms-1'>()</span></span>
                                                        </li>
                                                        <li><span className="material-icons">
                                                            chat
                                                        </span>
                                                            <span className='ms-1'>Comment(s)<span className='ms-1'>()</span></span></li>
                                                        <li><span className="material-icons">
                                                            share
                                                        </span>
                                                            <span className='ms-1'>Share<span className='ms-1'>()</span></span></li>
                                                        <li>
                                                            <ul >
                                                                <li style={{ display: 'grid' }}>
                                                                    <span className="material-icons">
                                                                        email
                                                                    </span>
                                                                    <p className='m-0 p-0'><small>Email</small></p>

                                                                </li>
                                                            </ul>

                                                        </li>
                                                    </ul>


                                                    <hr className='mx-auto w-100' />
                                                </div>

                                            </div>

                                        </div>




                                    </div>

                                    <div className='container-fluid my-2' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-7'>
                                                <div className='mt-4' style={{ justifyContent: 'start', display: 'flex' }}>
                                                    <span className='h6'>Hi I am PEXit User</span><br />
                                                </div>
                                                <div className='text-start'>
                                                    <p className='p-0' style={{ fontSize: 'small' }}>Posted  <p>02:00 PM</p></p>
                                                </div>


                                            </div>
                                            <div className='col-3'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex', cursor: 'pointer' }}>
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>


                                                </div>

                                            </div>

                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-start'>
                                                    <p id="dots">
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box <span>...</span> <span className='text-danger cursor-pointer' style={{ cursor: 'pointer' }}>read more</span>


                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12' style={{ display: 'flex' }} >
                                                <div className='mx-2' >
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>
                                                <div className='mx-2'>
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>



                                            </div>

                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row ms-0'>
                                                <div className='col-md-12'>
                                                    <hr className='w-100' />

                                                    <ul className='ms-0 dashboard-post-options-dev' style={{ display: 'flex' }}>
                                                        <li>
                                                            <span className="material-icons">
                                                                thumb_up_off_alt
                                                            </span>
                                                            <span className='ms-1'>Like<span className='ms-1'>()</span></span>
                                                        </li>
                                                        <li><span className="material-icons">
                                                            chat
                                                        </span>
                                                            <span className='ms-1'>Comment(s)<span className='ms-1'>()</span></span></li>
                                                        <li><span className="material-icons">
                                                            share
                                                        </span>
                                                            <span className='ms-1'>Share<span className='ms-1'>()</span></span></li>
                                                        <li>
                                                            <ul >
                                                                <li style={{ display: 'grid' }}>
                                                                    <span className="material-icons">
                                                                        email
                                                                    </span>
                                                                    <p className='m-0 p-0'><small>Email</small></p>

                                                                </li>
                                                            </ul>

                                                        </li>
                                                    </ul>


                                                    <hr className='mx-auto w-100' />
                                                </div>

                                            </div>

                                        </div>




                                    </div>

                                    <div className='container-fluid my-2' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-7'>
                                                <div className='mt-4' style={{ justifyContent: 'start', display: 'flex' }}>
                                                    <span className='h6'>Hi I am PEXit User</span><br />
                                                </div>
                                                <div className='text-start'>
                                                    <p className='p-0' style={{ fontSize: 'small' }}>Posted  <p>02:00 PM</p></p>
                                                </div>


                                            </div>
                                            <div className='col-3'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex', cursor: 'pointer' }}>
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>


                                                </div>

                                            </div>

                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-start'>
                                                    <p id="dots">
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box <span>...</span> <span className='text-danger cursor-pointer' style={{ cursor: 'pointer' }}>read more</span>


                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12' style={{ display: 'flex' }} >
                                                <div className='mx-2' >
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>
                                                <div className='mx-2'>
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>



                                            </div>

                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row ms-0'>
                                                <div className='col-md-12'>
                                                    <hr className='w-100' />

                                                    <ul className='ms-0 dashboard-post-options-dev' style={{ display: 'flex' }}>
                                                        <li>
                                                            <span className="material-icons">
                                                                thumb_up_off_alt
                                                            </span>
                                                            <span className='ms-1'>Like<span className='ms-1'>()</span></span>
                                                        </li>
                                                        <li><span className="material-icons">
                                                            chat
                                                        </span>
                                                            <span className='ms-1'>Comment(s)<span className='ms-1'>()</span></span></li>
                                                        <li><span className="material-icons">
                                                            share
                                                        </span>
                                                            <span className='ms-1'>Share<span className='ms-1'>()</span></span></li>
                                                        <li>
                                                            <ul >
                                                                <li style={{ display: 'grid' }}>
                                                                    <span className="material-icons">
                                                                        email
                                                                    </span>
                                                                    <p className='m-0 p-0'><small>Email</small></p>

                                                                </li>
                                                            </ul>

                                                        </li>
                                                    </ul>


                                                    <hr className='mx-auto w-100' />
                                                </div>

                                            </div>

                                        </div>




                                    </div>

                                    <div className='container-fluid my-2' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-7'>
                                                <div className='mt-4' style={{ justifyContent: 'start', display: 'flex' }}>
                                                    <span className='h6'>Hi I am PEXit User</span><br />
                                                </div>
                                                <div className='text-start'>
                                                    <p className='p-0' style={{ fontSize: 'small' }}>Posted  <p>02:00 PM</p></p>
                                                </div>


                                            </div>
                                            <div className='col-3'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex', cursor: 'pointer' }}>
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>


                                                </div>

                                            </div>

                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-start'>
                                                    <p id="dots">
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box <span>...</span> <span className='text-danger cursor-pointer' style={{ cursor: 'pointer' }}>read more</span>


                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12' style={{ display: 'flex' }} >
                                                <div className='mx-2' >
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>
                                                <div className='mx-2'>
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>



                                            </div>

                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row ms-0'>
                                                <div className='col-md-12'>
                                                    <hr className='w-100' />

                                                    <ul className='ms-0 dashboard-post-options-dev' style={{ display: 'flex' }}>
                                                        <li>
                                                            <span className="material-icons">
                                                                thumb_up_off_alt
                                                            </span>
                                                            <span className='ms-1'>Like<span className='ms-1'>()</span></span>
                                                        </li>
                                                        <li><span className="material-icons">
                                                            chat
                                                        </span>
                                                            <span className='ms-1'>Comment(s)<span className='ms-1'>()</span></span></li>
                                                        <li><span className="material-icons">
                                                            share
                                                        </span>
                                                            <span className='ms-1'>Share<span className='ms-1'>()</span></span></li>
                                                        <li>
                                                            <ul >
                                                                <li style={{ display: 'grid' }}>
                                                                    <span className="material-icons">
                                                                        email
                                                                    </span>
                                                                    <p className='m-0 p-0'><small>Email</small></p>

                                                                </li>
                                                            </ul>

                                                        </li>
                                                    </ul>


                                                    <hr className='mx-auto w-100' />
                                                </div>

                                            </div>

                                        </div>




                                    </div>

                                    <div className='container-fluid my-2' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-7'>
                                                <div className='mt-4' style={{ justifyContent: 'start', display: 'flex' }}>
                                                    <span className='h6'>Hi I am PEXit User</span><br />
                                                </div>
                                                <div className='text-start'>
                                                    <p className='p-0' style={{ fontSize: 'small' }}>Posted  <p>02:00 PM</p></p>
                                                </div>


                                            </div>
                                            <div className='col-3'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex', cursor: 'pointer' }}>
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>


                                                </div>

                                            </div>

                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-start'>
                                                    <p id="dots">
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box <span>...</span> <span className='text-danger cursor-pointer' style={{ cursor: 'pointer' }}>read more</span>


                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12' style={{ display: 'flex' }} >
                                                <div className='mx-2' >
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>
                                                <div className='mx-2'>
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>



                                            </div>

                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row ms-0'>
                                                <div className='col-md-12'>
                                                    <hr className='w-100' />

                                                    <ul className='ms-0 dashboard-post-options-dev' style={{ display: 'flex' }}>
                                                        <li>
                                                            <span className="material-icons">
                                                                thumb_up_off_alt
                                                            </span>
                                                            <span className='ms-1'>Like<span className='ms-1'>()</span></span>
                                                        </li>
                                                        <li><span className="material-icons">
                                                            chat
                                                        </span>
                                                            <span className='ms-1'>Comment(s)<span className='ms-1'>()</span></span></li>
                                                        <li><span className="material-icons">
                                                            share
                                                        </span>
                                                            <span className='ms-1'>Share<span className='ms-1'>()</span></span></li>
                                                        <li>
                                                            <ul >
                                                                <li style={{ display: 'grid' }}>
                                                                    <span className="material-icons">
                                                                        email
                                                                    </span>
                                                                    <p className='m-0 p-0'><small>Email</small></p>

                                                                </li>
                                                            </ul>

                                                        </li>
                                                    </ul>


                                                    <hr className='mx-auto w-100' />
                                                </div>

                                            </div>

                                        </div>




                                    </div>

                                    <div className='container-fluid my-2' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-7'>
                                                <div className='mt-4' style={{ justifyContent: 'start', display: 'flex' }}>
                                                    <span className='h6'>Hi I am PEXit User</span><br />
                                                </div>
                                                <div className='text-start'>
                                                    <p className='p-0' style={{ fontSize: 'small' }}>Posted  <p>02:00 PM</p></p>
                                                </div>


                                            </div>
                                            <div className='col-3'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex', cursor: 'pointer' }}>
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>


                                                </div>

                                            </div>

                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-start'>
                                                    <p id="dots">
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box <span>...</span> <span className='text-danger cursor-pointer' style={{ cursor: 'pointer' }}>read more</span>


                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12' style={{ display: 'flex' }} >
                                                <div className='mx-2' >
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>
                                                <div className='mx-2'>
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>



                                            </div>

                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row ms-0'>
                                                <div className='col-md-12'>
                                                    <hr className='w-100' />

                                                    <ul className='ms-0 dashboard-post-options-dev' style={{ display: 'flex' }}>
                                                        <li>
                                                            <span className="material-icons">
                                                                thumb_up_off_alt
                                                            </span>
                                                            <span className='ms-1'>Like<span className='ms-1'>()</span></span>
                                                        </li>
                                                        <li><span className="material-icons">
                                                            chat
                                                        </span>
                                                            <span className='ms-1'>Comment(s)<span className='ms-1'>()</span></span></li>
                                                        <li><span className="material-icons">
                                                            share
                                                        </span>
                                                            <span className='ms-1'>Share<span className='ms-1'>()</span></span></li>
                                                        <li>
                                                            <ul >
                                                                <li style={{ display: 'grid' }}>
                                                                    <span className="material-icons">
                                                                        email
                                                                    </span>
                                                                    <p className='m-0 p-0'><small>Email</small></p>

                                                                </li>
                                                            </ul>

                                                        </li>
                                                    </ul>


                                                    <hr className='mx-auto w-100' />
                                                </div>

                                            </div>

                                        </div>




                                    </div>

                                    <div className='container-fluid my-2' style={{ backgroundColor: '#efefef' }} >
                                        <div className='row'>
                                            <div className='col-2'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex' }}>
                                                    <img src={profile} alt="user profile" className="img-fluid" style={{ width: 60, height: 60, borderRadius: 50 }} />
                                                </div>
                                            </div>
                                            <div className='col-7'>
                                                <div className='mt-4' style={{ justifyContent: 'start', display: 'flex' }}>
                                                    <span className='h6'>Hi I am PEXit User</span><br />
                                                </div>
                                                <div className='text-start'>
                                                    <p className='p-0' style={{ fontSize: 'small' }}>Posted  <p>02:00 PM</p></p>
                                                </div>


                                            </div>
                                            <div className='col-3'>
                                                <div className='my-4' style={{ justifyContent: 'end', display: 'flex', cursor: 'pointer' }}>
                                                    <span className="material-icons">
                                                        more_vert
                                                    </span>


                                                </div>

                                            </div>

                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='text-start'>
                                                    <p id="dots">
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box   Post box   Post box
                                                        Post box   Post box   Post box <span>...</span> <span className='text-danger cursor-pointer' style={{ cursor: 'pointer' }}>read more</span>


                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12' style={{ display: 'flex' }} >
                                                <div className='mx-2' >
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>
                                                <div className='mx-2'>
                                                    <img src={logo} alt="Image" className='img-fluid' />


                                                </div>



                                            </div>

                                        </div>
                                        <div className='container-fluid m-0 p-0'>
                                            <div className='row ms-0'>
                                                <div className='col-md-12'>
                                                    <hr className='w-100' />

                                                    <ul className='ms-0 dashboard-post-options-dev' style={{ display: 'flex' }}>
                                                        <li>
                                                            <span className="material-icons">
                                                                thumb_up_off_alt
                                                            </span>
                                                            <span className='ms-1'>Like<span className='ms-1'>()</span></span>
                                                        </li>
                                                        <li><span className="material-icons">
                                                            chat
                                                        </span>
                                                            <span className='ms-1'>Comment(s)<span className='ms-1'>()</span></span></li>
                                                        <li><span className="material-icons">
                                                            share
                                                        </span>
                                                            <span className='ms-1'>Share<span className='ms-1'>()</span></span></li>
                                                        <li>
                                                            <ul >
                                                                <li style={{ display: 'grid' }}>
                                                                    <span className="material-icons">
                                                                        email
                                                                    </span>
                                                                    <p className='m-0 p-0'><small>Email</small></p>

                                                                </li>
                                                            </ul>

                                                        </li>
                                                    </ul>


                                                    <hr className='mx-auto w-100' />
                                                </div>

                                            </div>

                                        </div>




                                    </div>








                                </div>
                            </div>



                        </div>













                        <div className='col-lg-3 mx-0 bg-light right-side-dev-1'>
                            <div className='container-fluid my-5'>
                                <div className='row'>
                                    <div className='col-md-12' style={{ display: 'block', fontSize: 'small' }}>

                                        <div className='row my-4'>
                                            <div className='col-md-12 dashboard-rightside-add-dev' style={{ justifyContent: 'start', display: 'flex' }}>

                                                <span className="material-icons">
                                                    add_circle_outline
                                                </span>
                                                <span className='ms-2 fw-bold'>Create New Group</span>

                                            </div>

                                        </div>
                                        <div className='row my-4 dashboard-rightside-add-dev'>
                                            <div className='col-md-12' style={{ justifyContent: 'start', display: 'flex' }}>

                                                <span className="material-icons">
                                                    add_circle_outline
                                                </span>
                                                <span className='ms-2'>Add Product</span>

                                            </div>

                                        </div>
                                        <div className='row my-4 dashboard-rightside-add-dev'>
                                            <div className='col-md-12' style={{ justifyContent: 'start', display: 'flex' }}>

                                                <span className="material-icons">
                                                    add_circle_outline
                                                </span>
                                                <span className='ms-2'>Publish Advertisement</span>

                                            </div>

                                        </div>

                                        <div className='row my-4 dashboard-rightside-add-dev'>
                                            <div className='col-md-12' style={{ justifyContent: 'start', display: 'flex' }}>

                                                <span className="material-icons">
                                                    add_circle_outline
                                                </span>
                                                <span className='ms-2'>Post Sponsored Content</span>

                                            </div>

                                        </div>
                                        <div className='row my-4 dashboard-rightside-add-dev'>
                                            <div className='col-md-12' style={{ justifyContent: 'start', display: 'flex' }}>

                                                <span className="material-icons">
                                                    add_circle_outline
                                                </span>
                                                <span className='ms-2'>Post Job</span>

                                            </div>

                                        </div>
                                        <div className='row my-4 dashboard-rightside-add-dev'>
                                            <div className='col-md-12' style={{ justifyContent: 'start', display: 'flex' }}>

                                                <span className="material-icons">
                                                    add_circle_outline
                                                </span>
                                                <span className='ms-2'>Add Software</span>

                                            </div>

                                        </div>
                                        <div className='row my-4 dashboard-rightside-add-dev'>
                                            <div className='col-md-12' style={{ justifyContent: 'start', display: 'flex' }}>

                                                <span className="material-icons">
                                                    add_circle_outline
                                                </span>
                                                <span className='ms-2'>Add Service</span>

                                            </div>

                                        </div>



                                    </div>

                                </div>
                            </div>

                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='text-start'>
                                            <span><p className='h5 fw-bold'>Active <span>()</span></p></span>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 60, width: 60, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 60, width: 60, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 60, width: 60, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 60, width: 60, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 60, width: 60, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>
                                        <div className='row my-4' >
                                            <div className='col-md-12' >
                                                <div style={{ alignContent: 'start', display: 'flex', alignItems: 'center' }} >
                                                    <img src={profile} alt="user profile" className="img-fluid ms-0" style={{ height: 60, width: 60, borderRadius: 50 }} />
                                                    <span className='ms-2 h6'>User Name</span>

                                                </div>
                                            </div>
                                        </div>




                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>
                </div>
            </section>

            <Footer />







            {/* 
            <footer className='mt-2'>

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

            </footer> */}


        </>
    )
}
