import "./fifth.css"
import React from "react"
import Carousel from "react-bootstrap/Carousel"
import CarouselItem from "react-bootstrap/esm/CarouselItem"

function Fifth(){
    return(
        <div className="fifth-container">
            <div className="our-container">
                <button>TESTIMONIAL</button>
                <h1>Our Clients Say</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

            </div>

            <Carousel>
              <Carousel.Item>
                <div className="item-wrapper" style={{display:"flex",gap:"30px"}}>

                <div className= "div-1" style={{width:"30%"}} >
                  <img src="https://i.pinimg.com/originals/b9/9c/3a/b99c3a9bbd67aa74d21dafaba60ac551.jpg" alt="" />
                  <div>
                    <h3>Natalia D</h3>
                    <p>New York</p>
                  </div>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nostrum dolor quam possimus in consequuntur quos id? Culpa consectetur aliquam distinctio assumenda repudiandae eligendi deserunt.</p>
                </div>
                <div className="div-2">
                  <img src="https://img.freepik.com/free-photo/emotions-people-concept-headshot-serious-looking-handsome-man-with-beard-looking-confident-determined_1258-26730.jpg?w=2000" alt="" />
                  <div>
                    <h3>Jack Sparrow</h3>
                    <p>New York</p>
                  </div>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nostrum dolor quam possimus in consequuntur quos id? Culpa consectetur aliquam distinctio assumenda repudiandae eligendi deserunt.</p>
                </div>

                <div className="div-3">
                  <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg" alt="" />
                  <div>
                    <h3>Mark John</h3>
                    <p>New York</p>
                  </div>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nostrum dolor quam possimus in consequuntur quos id? Culpa consectetur aliquam distinctio assumenda repudiandae eligendi deserunt.</p>
                </div>
                
               
                </div>
                </Carousel.Item>
                <Carousel.Item>

                <div className="item-wrapper" style={{display:"flex",gap:"30px"}}>
                  
                    <div className="div-4">
                  <img src="https://thumbs.dreamstime.com/b/close-up-photo-cheerful-positive-attractive-black-man-whitened-teeth-looking-you-smile-face-isolated-vivid-163079354.jpg" alt="" />
                  <div>
                    <h3>Mohammed Baghi</h3>
                    <p>New York</p>
                  </div>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nostrum dolor quam possimus in consequuntur quos id? Culpa consectetur aliquam distinctio assumenda repudiandae eligendi deserunt.</p>
                </div>

                <div className="div-5">
                  <img src="https://www.spring.org.uk/images/man-21.jpg" alt="" />
                  <div>
                    <h3>Aleksandr Petrovic</h3>
                    <p>New York</p>
                  </div>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nostrum dolor quam possimus in consequuntur quos id? Culpa consectetur aliquam distinctio assumenda repudiandae eligendi deserunt.</p>
                </div>

                <div className="div-6">
                  <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg" alt="" />
                  <div>
                    <h3>Sabiq Namiq </h3>
                    <p>New York</p>
                  </div>
                  <hr />
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, nostrum dolor quam possimus in consequuntur quos id? Culpa consectetur aliquam distinctio assumenda repudiandae eligendi deserunt.</p>
                </div>











                </div>
                  </Carousel.Item>

               
               
                
                
              
                
                
                
                
                
               
                
                
               

              

            </Carousel>

            <div className="said-container">

            </div>

          
    </div>
        
    )
}

export default Fifth