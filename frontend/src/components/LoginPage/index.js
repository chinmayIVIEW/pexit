import React, { useState } from 'react';
import { Button, FormGroup, Input, Form } from 'reactstrap';
import './loginPage.css';
import logo from './../../assets/landingpage_img/logo.png';
import Header from '../Header';
import Footer from '../Footer';


export default function LoginPage() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);

    const submitForm = (e) => {
        e.preventDefault();
        const newEntry = { email: email, password: password };

        setAllEntry([...allEntry, newEntry]);
        console.log(allEntry);
    }



    return (
        <>
            <Header />










            <Form className="login-form" onSubmit={submitForm}>
                <div className="for-padding">
                    <div> <img src={logo} alt="Logo_Image" className="img-fluid m-3" /> </div>
                    <div className="mt-3">
                        <p style={{ fontSize: 25 }}>Login</p>
                    </div>
                   <FormGroup>
                        <div>
                            <Input type="email" name="email" id="email" autoComplete="off" value={email} placeholder="user name"
                                onChange={(e) => setEmail(e.target.value)} className="form-input" 

                            />
                        </div>
                        </FormGroup>
                    <FormGroup>
                        <div>

                            <Input type="password" name="password" id="password" autoComplete="off" value={password} placeholder="password"
                                onChange={(e) => setPassword(e.target.value)} className="form-input" 


                            />
                        </div>
                  </FormGroup>

                    <Button type="submit" className="btn btn-lg btn-block submit-button"><h4>Login</h4></Button><br />
                    <div className="mt-4">
                        <h4>Or </h4>
                    </div>
                    <Button type="submit" className="btn btn-lg btn-block form-button" ><h4>Sign in with Google</h4></Button><br />
                    <Button type="submit" className="btn btn-lg btn-block form-button" ><h4>Sign in with Facebook</h4></Button><br />
                    <Button type="submit" className="btn btn-lg btn-block form-button" ><h4>Sign in with Linkedin</h4></Button><br />
                </div>
            </Form>

           


            <Footer />



        </>
    )
}

