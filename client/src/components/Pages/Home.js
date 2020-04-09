import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import homeBG from "../../assets/Home/DH home page art B.jpg"
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
                                <div><Link to="/Paintings?category=SmallAbstractions" id="danTitle" className="quicksand">DAN HOFSTADTER</Link></div>
                                <div> <Link to="/Paintings?category=SmallAbstractions" id="danSub" className="baskerville"><i>p a i n t i n g s</i></Link></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Home
