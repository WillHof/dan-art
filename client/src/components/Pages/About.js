import React, { Component } from 'react'

import painting from "../../assets/About/DH_studio_b.jpg"

export class About extends Component {
    render() {
        return (
            <div className="col-md-8 col-sm-12 pt-4 mr-auto ml-auto" id="infoWrapper">

                <img src={painting} id="aboutImage" className="paintingImage pt-2" alt="Dan Hofstadter Studio" />
                <div className="baskerville aboutText">
                    Painting for me is an expression of feeling, analogous to music. Though I seldom make collages, my pictures are derived from a collage approach. Each paint patch is mentally weighed for its color volume - its size, hue, value, and saturation - while being juxtaposed with others. I try not to fall into a settled way of doing things, but to attend to where the work itself wants to go.
                            </div>
                <div className="indent baskerville aboutText">
                    The materials used in the abstractions are acrylics and inks on canvas or board. The three recent studies called "Rivers and Mountains" are collages. The early pictures were painted in oil on canvas or gouache on illustration board. In addition, I have never ceased drawing the people and things around me, and some of the results may be found here.
                                </div>
                <div className="indent baskerville aboutText">
                    I have drawn and painted since childhood as a chief interest. At Columbia University I studied painting with Walter Murch and art history with Meyer Schapiro. Then I received a French scholarship to Paris, where for a year I did little else than draw at the Ecole des Beaux-Arts and in parks and caf&eacute;s. Moving to Sweden, I showed in Stockholm with Eero Solin, a Finnish dealer who is now back in Helsinki; while in Sweden I also taught art, primarily collage, to school children. For a long period I was prevented by illness from painting, returning to this activity about twelve years ago. I contributed numerous drawings to a faculty show at Bennington College, VT; joining the Atlantic Works Gallery, in Boston, I entered eight paintings in a group exhibition in 2019 and then showed a free-standing group of my own work.
                            </div>
                <div className="indent baskerville mb-5 aboutText">
                    Apart from my job in Sweden, I have taught freehand architectural drawing and art history at Bennington. I also served as a resident critic under Neil Welliver in the graduate painting department at U.Penn. For eight years, as a contract writer for the New Yorker, I wrote long pieces for the magazine's Art World rubric, including profiles of Jean H&eacute;lion and Henri Cartier-Bresson.
                                </div>

                <div className="col-md-2 d-none d-sm-block"></div>


            </div>
        )
    }
}

export default About
