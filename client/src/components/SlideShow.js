// import React, { Component } from 'react'

// import EarlyWork from "../assets/EarlyWork/index";
// import RecentWork from "../assets/RecentWork/index";
// import SmallAbstractions from "../assets/SmallAbstractions/index";
// import LargeAbstractions from "../assets/LargeAbstractions/index";


// export class SlideShow extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             images: "",
//             names: "",
//             dims: "",
//             category: "",
//             index: 0
//         }
//         this.onClick = this.onClick.bind(this)
//     }
//     componentDidMount() {
//         this.getPaintings(this.props.category)
//     }
//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.category !== this.props.category) {
//             this.getPaintings(this.props.category)
//         }
//     }
//     getPaintings = (category) => {
//         let imagePaths = []
//         if (category === "EarlyWork") {
//             imagePaths = EarlyWork;
//         };
//         if (category === "LargeAbstractions") {
//             imagePaths = LargeAbstractions
//         };
//         if (category === "SmallAbstractions") {
//             imagePaths = SmallAbstractions
//         };
//         // if (category === "Drawings") {
//         //     imagePaths = MonotypesDrawings
//         // };
//         // if (category === "InstallationViews") {
//         //     imagePaths = InstallationViews
//         // };
//         if (category === "RecentWork") {
//             imagePaths = RecentWork
//         }
//         let namePath = /a\/[^;]*/;
//         let dimPath = /;[^;]*/;
//         let pArr = [];
//         let dArr = [];
//         if (imagePaths.length) {
//             for (let index = 0; index < imagePaths.length; index++) {
//                 const element = imagePaths[index];
//                 let pName = element.match(namePath)[0].substring(2).replace(/\^/g, "#");
//                 let pDims = element.match(dimPath)[0].substring(1).replace(/-/g, " ").replace(/_/g, "/");
//                 pArr.push(pName);
//                 dArr.push(pDims);
//             }
//             this.setState({ images: imagePaths, names: pArr, dims: dArr, index: 0 })
//         }
//         else {
//             this.setState({ images: "", names: "", dims: "" })
//         }
//     }
//     onClick(e) {
//         e.preventDefault()
//         let x = this.state.index + Number(e.target.getAttribute('value'))
//         if (x < 0) {
//             this.setState({ index: this.state.images.length - 1 })
//         }
//         else if (x > this.state.images.length - 1) {
//             this.setState({ index: 0 })
//         }
//         else {
//             this.setState({ index: x })
//         }
//     }
//     render() {
//         return (
//             <div className="row">
//                 <div className="col-12" >
//                     <div className="row relative">
//                         <div className="col-1 arrowContainerL" value={-1} onClick={this.onClick}>
//                             <div id="leftArrow" value={-1}>
//                                 <span className="carousel-control-prev-icon" value={-1}></span>
//                             </div>
//                         </div>
//                         <div className="stuff col-10">
//                             <img src={this.state.images[this.state.index]} id="danSlideImage" alt={"Dan Hofstadter" + this.state.names[this.state.index]} />
//                         </div>
//                         <div className="arrowContainerR col-1" value={1} onClick={this.onClick}>
//                             <div id="rightArrow" value={1}>
//                                 <span className="carousel-control-next-icon" value={1}></span>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-1"></div>
//                         <div className="col-10 text-right mb-4 h6 tgray pDesc">{this.state.names[this.state.index]} {this.state.dims[this.state.index]}</div>
//                         <div className="col-1"></div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default SlideShow
