import React, { Component } from 'react'
import InstallationImages from "../../assets/InstallationViews/index"


export class InstallationViews extends Component {
    state = {
        images: []
    };

    componentDidMount() {
        this.setState({ images: InstallationImages })
    }


    render() {
        return (
            <div className="col-sm-12 col-md-8 pt-4  mr-auto ml-auto">
                {this.state.images[0] ?
                    <div>
                        <div className="d-flex flex-wrap" id="installFlex">
                            <div className="flex-column p-2 flex57">
                                <img src={this.state.images[0]} className="paintingImage p-2 gallery" alt="gallery1"></img>
                                <div className="d-flex">
                                    <div className="flex-column p-2 flex50" >
                                        <img src={this.state.images[3]} className="paintingImage gallery" alt="gallery4"></img>
                                    </div>
                                    <div className="flex-column p-2 flex50" >
                                        <img src={this.state.images[2]} className="paintingImage gallery" alt="gallery3"></img>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-column flex43">
                                <img src={this.state.images[1]} id="gallery2" className="paintingImage gallery pr-3 pb-3" alt="gallery2"></img>
                            </div>
                        </div>
                    </div>
                    :
                    <div>not found</div>
                }
            </div>
        )
    }
}

export default InstallationViews
