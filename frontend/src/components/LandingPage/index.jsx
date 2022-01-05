import React from 'react';
import './index.css';
import landingpage_image from './../../../src/assets/landingpage_img/landingPage_image.png';
import Header from '../Header';
import Footer from '../Footer';


export default function LandingPage() {

    return (
        <>
            <Header />
            
                <div className="container-fluid">
                   
                            <div className='landing-img-dev'>
                            
                               <span> PEXit TM  -The Integrated Multi-Lingual Media</span>
                           
                            <img src={landingpage_image} alt="Landing_Image" className="img-fluid" />
                            </div>
                   
                </div>
      

            <Footer />
        </>
    )
}

