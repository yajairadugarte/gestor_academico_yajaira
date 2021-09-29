import React, { Component } from 'react'
import {Dropdown, Button, ButtonGroup, DropdownButton} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { alignPropType } from 'react-bootstrap/esm/DropdownMenu';




class homepageComponent extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div>
          <div className="container-fluid">
           <div class="row">
              <div class="col-12">

                <Carousel fade className="miCarousel">
                  <Carousel.Item interval= {3000}>
                    <img
                    className="d-block w-100"
                    src="imagen 1.jpg"
                    alt="Second slide"/>
           
                        <Carousel.Caption className="miCarousel">
                          <h1>Universidad de la calle</h1>
                          <p>“Cuando haces lo correcto, obtienes la sensación de paz y serenidad. Hazlo una y otra vez.”
                             Roy T. Bennett
                          </p>
                        </Carousel.Caption>
                  </Carousel.Item> 
                    <Carousel.Item>
                      <img
                      className="d-block w-100"
                      src="imagen 2.jpg"
                      alt="Second slide"/>
          
                      <Carousel.Caption className="miCarousel">
                        <h1>Universidad de la calle</h1>
                        <p>“Debes hacer las cosas que crees que no puedes hacer.”
                          Eleanor Roosevelt
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                      <Carousel.Item>
                         <img
                        className="d-block w-100"
                        src="imagen 4.jpg"
                        alt="Second slide"/>
    
                       <Carousel.Caption className="miCarousel">
                         <h1>Universidad de la calle</h1>
                         <p>“Nunca eres demasiado viejo para tener otra meta u otro sueño.”
                            C.S Lewis
                         </p>
                        </Carousel.Caption>
                      </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
   
      </div>
    )
  }
}

export default homepageComponent
