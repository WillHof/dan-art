import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
import painting from "../../assets/LargeAbstractions/DH1;58x50.jpeg"
export class Contact extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 d-none d-md-block">
                            <Vnav />
                        </div>
                        <div className="d-block d-md-none col-sm-12">
                            <Nav />
                        </div>
                        <div className="col-md-6 col-sm-12 blockContainer mr-auto ml-auto">
                            <img src={painting} alt="Painting" id="contactImage" />
                            <div className="row">
                                <div className="col-12">
                                    For information about availability or prices of works, image reproduction permission, or other questions you might have. I'd love to hear from you!
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">Dan</div>
                            </div>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label htmlFor="fn">First Name:</label>
                                        <input type="text" className="form-control" id="fn" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="ln">Last Name:</label>
                                        <input type="text" className="form-control" id="ln" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputEmail">Email Address:</label>
                                    <input type="email" className="form-control" id="inputEmail"></input>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputMessage">Message:</label>
                                    <textarea className="form-control" id="inputMessage" rows="3"></textarea>
                                </div>
                                <button type="submit" id="sendEmailBtn" className="btn btn-primary">Send Message</button>
                            </form>
                        </div>
                        <div className="col-md-2 d-none d-sm-block"></div>
                    </div>
                </div>
            </div >
        )
    }
}

export default Contact

