import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
import painting from "../../Large Abstractions/lg_dh1.jpg"
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
                                    Thank you for your interest in my work. Please contact me about pricing and/or availability of works, image reproduction permission, or other questions you might have. I'd love to hear from you!
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">Dan</div>
                            </div>
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label for="fn">First Name:</label>
                                        <input type="text" className="form-control" id="fn" />
                                    </div>
                                    <div className="form-group col-6">
                                        <label for="ln">Last Name:</label>
                                        <input type="text" className="form-control" id="ln" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label for="inputEmail">Email Address:</label>
                                    <input type="email" class="form-control" id="inputEmail"></input>
                                </div>
                                <div className="form-group">
                                    <label for="inputMessage">Message:</label>
                                    <textarea class="form-control" id="inputMessage" rows="3"></textarea>
                                </div>
                                <button type="submit" id="sendEmailBtn" class="btn btn-primary">Send Message</button>
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

