import "./seven.css"
import React from "react"
import Carousel from "react-bootstrap/Carousel"
import CarouselItem from "react-bootstrap/esm/CarouselItem"


function Seven(){
    return (
        <div className="seven-container">
            <div className="seven-inner-container">
                <button>MENU</button>
                <h1>POPULAR DISHES</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, expedita praesentium! Blanditiis itaque ex quaerat accusantium esse eius, tempora incidunt harum et! Id, provident debitis.</p>
            </div>

            <Carousel>
                <Carousel.Item>

                    <div className="item-wrapper" style={{display:"flex",gap:"30px"}}>

                    <div style={{width: "30%"}}>
                        <img src="https://www.chilitochoc.com/wp-content/uploads/2020/06/ChickenManchurian1-e1596062497253.jpg" alt="" />
                        <h3>Chicken MAnjori</h3>
                      <h2>15$</h2>
                        <hr />
                        <p className="p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus!</p>
                    </div>

                    <div style={{width: "30%"}}>
                        <img src="https://img.freepik.com/free-photo/top-view-fresh-delicious-fruit-juices-served-with-apple-feijoas-oranges-wooden-cutting-board_140725-94735.jpg" alt="" />
                        <h3>Fresh Salmon</h3>
                      <h2>15$</h2>
                        <hr />
                        <p className="p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus!</p>
                    </div>

                    <div style={{width: "30%"}}>
                        <img src="https://cdn.yemek.com/mnresize/1250/833/uploads/2022/10/hot-dog-sunum-yemekcom.jpg" alt="" />
                        <h3>HOT DOG</h3>
                      <h2>15$</h2>
                        <hr />
                        <p className="p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus!</p>
                    </div>

                    </div>



                </Carousel.Item>

                <Carousel.Item>

                    <div className="item-wrapper" style={{display:"flex",gap:"30px"}}>
                <div style={{width: "30%"}}>
                        <img src="https://www.vegrecipesofindia.com/wp-content/uploads/2020/12/burger-recipe-1.jpg" alt="" />
                        <h3>VEG BURGER</h3>
                      <h2>15$</h2>
                        <hr />
                        <p className="p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus!</p>
                    </div>

                    <div style={{width: "30%"}}>
                        <img src="https://cdn.yemek.com/uploads/2015/12/domates-soslu-makarna-yemekcom-2.jpg" alt="" />
                        <h3>SPAGETTI</h3>
                      <h2>15$</h2>
                        <hr />
                        <p className="p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus!</p>
                    </div>

                    <div style={{width: "30%"}}>
                        <img src="https://i.ytimg.com/vi/q9OiW8qfbL0/maxresdefault.jpg" alt="" />
                        <h3>Chicken MAnjori</h3>
                      <h2>15$</h2>
                        <hr />
                        <p className="p-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, accusamus!</p>
                    </div>
                    </div>


                </Carousel.Item>
            </Carousel>
            


        </div>
    )
}


export default Seven