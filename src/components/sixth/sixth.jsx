import "./sixth.css"
import img from "./hamburger.jpeg"
import img1 from "./pizza.jpeg"

function Sixth(){
    return(
        <div className="six-container">
            <div className="six-inner-container">
                <button>OFFERS</button>
            <h1>OUR OFFER DISHES</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dolores hic commodi dicta magni quasi nulla perspiciatis dolorum. Incidunt, unde!</p>
            </div>

            <div className="six-inner2-container">
                <div>
                    <img src={img} alt="" />
                </div>
                <div>
                    <img src={img1} alt="" />
                </div>
                
            </div>
            
        </div>
    )
}

export default Sixth