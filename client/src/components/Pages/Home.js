import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import homeBG from "../../assets/Home/DH home page art A.jpeg"
export class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid no-m">
                    <div className="home-wrapper">
                        <div className="fp-wrapper">
                            <div className="home-wrapper">
                                <img src={homeBG} alt="home" id="home" />
                            </div>
                        </div>
                    </div>
                    <div className="home-wrapper">
                        <div className="tx-wrapper">
                            <div className="title-group">
                                <Link to="/Paintings?category=LargeAbstractions" style={{ textDecoration: "none" }}>
                                    <div id="danTitle" className="quicksand">DAN HOFSTADTER</div>
                                    <div id="danSub" className="baskerville" style={{ fontSize: '3.6rem', color: 'white' }}><i>p a i n t i n g s</i></div>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
