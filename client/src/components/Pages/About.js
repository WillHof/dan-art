import React, { Component } from 'react'
import Nav from "../h-Nav"
import Vnav from "../v-Nav"
import painting from "../../About/DH_studio_b.jpg"
export class About extends Component {
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
                            <img src={painting} id="contactImage" alt="Dan Self Portrait" />
                            {/* indent these */}
                            <p>      Painting for me is an expression of feeling, analogous to music. Though I seldom make collages, my pictures are derived from a collage approach. Each paint patch is mentally weighed for its color volume - its size, hue, value, and saturation - while being juxtaposed with others. I try not to fall into a settled way of doing things, but to attend to where the work itself wants to go. </p>
                            <p>      I have drawn and painted since childhood as a chief interest. At Columbia University I studied painting with Walter Murch and art history with Meyer Schapiro. I then received a French scholarship to Paris, where for a year I did little else than draw at the Ecole des Beaux-Arts and in parks and cafes. Moving to Sweden, I showed in Stockholm with Eero Solin, a Finnish dealer who is now back in Helsinki; while in Sweden I also taught art, primarily collage, to school children. For a long period I was prevented by illness from painting, returning to this activity about twelve years ago. I contributed numerous drawings to a faculty show at Bennington College, VT; joining the Atlantic Works Gallery, in Boston, I entered eight paintings in a group exhibition in 2019 and then showed a free-standing group of my own work.</p>
                            <p>      Apart from my job in Sweden, I have taught freehand architectural drawing and art history at Bennington. I also served as a resident critic under Neil Welliver in the graduate painting department at U.Penn. For eight years, as a contract writer for the New Yorker, I wrote long pieces for the magazine's Art World rubric, including profiles of Jean Helion and Henri Cartier-Bresson. I have never ceased drawing the people and things around me, out of sheer fascination with what I see.
</p>
                        </div>
                        <div className="col-md-2 d-none d-sm-block">
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About
