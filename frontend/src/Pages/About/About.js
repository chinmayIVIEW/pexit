import React from 'react';
import './About.css';
import Header from './../../components/Header';
import Footer from './../../components/Footer';
import App_store from './../../assets/Pages/About_image/App_store.png';
import Google_store from './../../assets/Pages/About_image/Google_store.png';



export default function About() {

  return (
    <>
      <Header />
      <section>
        <div className="container my-5">
          <div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12 about-page-style-dev'>


              <p className='text-primary h4'>
                PEXit - The Integrated Multi-Lingual Media
              </p>
              <p>
                PEXit combines the functionalities of social media, profetional media and e-commerce; it is designed for
                B2B(Business-to-Businesss) and B2C(Business-to-Consumer) users of varied profile to
              </p>
              <p>
              <span className='text-danger text-uppercase h5'>Connect</span>  with their peers, associates, partners, customers...,
              </p>
              <p>
              <span className='text-danger text-uppercase h5'>Communicate</span> with them by messaging, sharing photos, videos, drawings, reports, presentations...,
              </p>
              <p>
              <span className='text-danger text-uppercase h5'>Collaborate</span> with team members of projects by forming user specified groups,
              </p>
              <p>
              <span className='text-danger text-uppercase h5'>Consume content</span> posted on yellow pages and other postings.
              </p>
              <p>
              <span className='text-danger text-uppercase h5'>Conduct commerce</span> on products, services, software etc.,and
              </p>
              <p>
              <span className='text-danger text-uppercase h5'>Choose career</span> by posting resumes and searching job openings.
              </p>
              <p>
                Lets PEXits!
              </p>
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 mb-4'>
                  <a href="#">
                  <img src={Google_store} alt="Android App on Google Play store" classname="img-fluid" style={{height:'60%',width:'20%',margin:10}} />
                  </a>
              <a href="#">
                <img src={App_store} alt="Download on the App store" classname="img-fluid" style={{height:'60%',width:'20%',margin:10}} />
              </a>
                </div>
              </div>

              <p>
                It has multi-lingual functionality inclusive of
              translation making it truly global and breaks the barriers of communication across geographic and time zones.
              </p>
              <p>
              In short, PEXit is for use by professionals, entrepreneurs, micro/small/medium enterprises, retailers, suppliers,
               manufacturers, industrial facilities and governments. Companies worldwide can use PEXit for their inter-departmental 
               sharing of data, drawings and documents, 
              project management, communication with suppliers and clients, sales & marketing activities, HR recruitment etc.
              </p>
              <p className="fw-normal">
              Its usage extends beyond B2B and B2C transactions; even friends, families, students, teachers and communities can 
              use it with ease to share and carry out assignments and events.
              </p>
              <p>
              Some of the key features of PEXit are:
              <ul>
                <li>
                An integrated Application that can be used as a professional media, e-commerce facilitator and even as a social media
                </li>
                <li>
                Create numerous Groups within an entity and between entities to manage business activities discipline-wise, project-wise,
                 client-wise etc.
                </li>
                <li>
                Have multiple threads of conversations within each Group
                </li>
                <li>
                Create open Forums for products, software, services, special topics etc.
                </li>
                <li>
                “Nested search” (i.e., search for people, products, services, software etc. within previously searched results)
                </li>
                <li>
                Attach multiple files of diverse types with each file size up to 25 MB
                </li>
                <li>
                Create and manage product/service/organization websites within PEXit
                </li>
                <li>
                Has a built-in multi-way language translator, by which a user can post in one language
                 and other users around the world can translate to their respective languages.
                </li>
                <li>
                Download native apps for Android and iOS mobiles from PlayStore & AppStore respectively
                </li>
                <li>
                Browser version (www.pexit.net) accessible on all devices including Windows-based laptops, desktops etc.
                </li>
                <li>
                Hosted securely on Cloud VPS that commits 99.95% availability
                </li>
                <li>
                Designed to work on "closed, private clouds” of corporations and governmental agencies.
                </li>
               
                 
                  
               
              </ul>
              </p>


              <p>
            You can “Log” into PEXit using your Gmail or Facebook or LinkedIn username and password.  The 2nd registration option is to “Join” PEXit by entering your own Display Name, Username, Password, email, etc.  Under the 2nd option, click the link sent
                  to your email (check Inbox/Spam folder) to activate PEXit, thereby validating the email you entered during registration.
                
              </p>
              <p>
                Please watch 2 power-point presentations with Voice available under “About” page in PEXit. The first presentation for 4 minutes gives an “Overview”, while the 2nd for 11 minutes lists all features of PEXit and is almost like a mini instruction manual. 
                   Also, "Support" page lists answers to almost all Frequently Asked Queries (FAQ).
                

              </p>
              <p>
                 For an overview of PEXit, <a href='#'>Click here</a>
             </p>
             <p>
             
             For features of PEXit, view <a href="#">PDF</a> <a href='#'>Video</a>
               
             </p>
















            </div>
          </div>



        </div>

      </section>



      <Footer />
    </>
  )

}