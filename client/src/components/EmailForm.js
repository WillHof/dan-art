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
                <form onSubmit={this.onClick} className="quicksand">
                    <div className="form-row">
                        <div className="form-group mb-2 col-6">
                            <input type="text" className="form-control" id="fn" value={this.state.fn} placeholder="FIRST NAME" onChange={this.handleChange} />
                        </div>
                        <div className="form-group mb-2 col-6">
                            <input type="text" className="form-control" id="ln" value={this.state.ln} placeholder="LAST NAME" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group mb-2">
                        <input type="email" className="form-control" id="email" value={this.state.email} placeholder="EMAIL@EXAMPLE.COM" onChange={this.handleChange}></input>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" id="message" rows="3" value={this.state.message} placeholder="YOUR MESSAGE HERE" onChange={this.handleChange}></textarea>
                    </div>
                    <button type="submit" id="sendEmailBtn" className="btn btn-primary mb-4">Send Message</button>
                </form>
            </div>
        )
    }
}

export default EmailForm
