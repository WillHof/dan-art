import React, { Component } from 'react'
import Axios from 'axios';

export class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fn: "",
            ln: "",
            email: "",
            message: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    handleChange(e) {
        let property = e.target.id
        this.setState({ [property]: e.target.value })
    }
    onClick(e) {
        e.preventDefault()

        Axios.post('/api/sendMail', this.state)
            .then(
                (res) => { console.log(res.json) },
                (err) => { console.log(err.json) }
            );
        alert('Thank you for your email! Dan will get in touch with you shortly.');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onClick}>
                    <div className="form-row">
                        <div className="form-group col-6">
                            <label htmlFor="fn">First Name:</label>
                            <input type="text" className="form-control" id="fn" value={this.state.fn} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="ln">Last Name:</label>
                            <input type="text" className="form-control" id="ln" value={this.state.ln} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail">Email Address:</label>
                        <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputMessage">Message:</label>
                        <textarea className="form-control" id="message" rows="3" value={this.state.message} onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" id="sendEmailBtn" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        )
    }
}

export default EmailForm
