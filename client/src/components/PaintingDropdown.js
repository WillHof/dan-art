// import React, { Component } from 'react';
// export class PaintingDropdown extends Component {

//     // fixName = (input) => {
//     //     const exp = /(?<=[a-z])[A-Z]/
//     //     let nStr = input.replace(exp, " " + input.match(exp))
//     //     return nStr
//     // }

//     render() {
//         return (
//             <div className="dropdown">
//                 <span className="dropdown-toggle quicksand" type="button" id="pDrop" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     {/* {this.fixName(this.props.category)} */}
//                     {this.props.category}
//                 </span>
//                 <div className="dropdown-menu" aria-labelledby="pDrop">
//                     {this.props.allCategories.map((currC, index) =>
//                         (
//                             <span key={index} value={currC} className={"quicksand" + this.props.category === currC ? "dropdown-item" : "dropdown-item tgray4"} onClick={(e) => this.props.onClick(e)}>
//                                 {/* {this.fixName(currC)} */}
//                                 {currC}
//                             </span>
//                         ))}
//                 </div>
//             </div>
//         )
//     }
// }

// export default PaintingDropdown
