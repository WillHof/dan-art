import React, { Component } from 'react'
import DrawingsFull from '../../assets/Drawings/indexfull'
class Drawings extends Component{
    
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            names: [],
            dims: [],
            fullImages: [],
            propSource: [],
        }
        this.modalData = this.modalData.bind(this)
    }
    componentDidMount(){
        this.getDrawings()
    }
    modalData(e) {
        let source = this.state.fullImages[e.target.getAttribute("index")]
        let altText = e.target.alt
        this.setState({ propSource: [source, altText] })
    }
    getDrawings = ()=>{
        let fullPaths = DrawingsFull
        //update this to downscaled images
        let imagePaths = DrawingsFull
           //extracts filename before first semicolon from filepath
           let namePath = /a\/[^;]*/;
           //extracts dimensions, after first semicolon and before next semicolon from filepath
           let dimPath = /;[^;]*/;
           let pArr = [];
           let dArr = [];
           let fArr = []
           if (imagePaths.length) {
               //loops through images in the imagepath folder, pushes names and dimensions into an array
               for (let index = 0; index < imagePaths.length; index++) {
                   const element = imagePaths[index];
                   let pName = element.match(namePath)[0].substring(2).replace(/\^/g, "#").replace(/\$/g, "'");
                   let pDims = element.match(dimPath)[0].substring(1).replace(/-/g, " ").replace(/_/g, "/");
                   let pFull = fullPaths[index]
                   pArr.push(pName);
                   dArr.push(pDims);
                   fArr.push(pFull);
               }
               this.setState({ images: imagePaths, names: pArr, dims: dArr, fullImages: fArr })
           }
           else {
               this.setState({ images: "", names: "", dims: "" })
           }
    }
    render() {
        return(
            <div className="col-sm-12 col-md-8 col-xl-7 pt-4 blockContainer mr-auto ">
                {this.state.images ? this.state.images.map((danPainting, index) => (
                    <div key={index}>
                        <div className="clearfix">
                            <img src={danPainting} alt={"Dan Hofstadter" + this.state.names[index]} index={index} key={index} data-toggle="modal" data-target="#paintingModal" onClick={this.modalData} className="paintingImage float-right"></img>
                        </div>
                        <div className="row">
                            <div className="col-12 text-right mb-0 h6 tgray pDesc quicksand" key={index}>{this.state.names[index]}</div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-right mb-4 h6 tgray pDesc quicksand" key={index}>{this.state.dims[index]}</div>
                        </div>
                    </div>
                )) :
                    <div className="col-md-6 col-sm-11 blockContainer mr-auto ml-auto">
                        There are no drawings here yet.
                            </div>}
                {/* Placeholder for remaining column space */}
                <div className="d-none d-lg-block col-lg-1 col-xl-2"></div>


                {/* enlarged image when clicked */}
                <div className="modal fade" id="paintingModal" tabIndex="-1" role="dialog" aria-labelledby="paintingModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content" data-dismiss="modal" aria-label="Close">
                            <div className="modal-body d-flex justify-content-center">
                                <img src={this.state.propSource[0]} alt={this.state.propSource[1]} className="modalImage"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Drawings