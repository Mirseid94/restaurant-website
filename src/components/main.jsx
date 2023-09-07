import "./main.css"
import img from "../pngwing.com (2).png"

function Main (){
    return(
        <div className="main-container">
            <div className="inner-container">
                <button className="number-btn">Call-125 456 789</button>
                <img src={img} alt="" />
                <button className="reserve-btn"> Reservation</button>
            </div>
            <div>
                <hr />
            </div>

            <div className="nav-container">
                <div className="ul-container">
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Our Menu</li>
                        <li>Pagers</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="icon-container">
                   <a href="#"> <i class="fa-brands fa-instagram"></i></a>
                   <a href="#"> <i class="fa-brands fa-facebook"></i> </a>
                   <a href="#"> <i class="fa-brands fa-twitter"></i></a>
                   <a href="#"> <i class="fa-brands fa-google"></i></a>
                </div>
            </div>

            <div className="welcome-container">
                <div>
                    <h1>Welcome to <br /> Restaurant</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptates! Ea alias magni nesciunt commodi.</p>
                    <button>View Menu</button>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" />
                </div>
            </div>
        </div>
    )
}


export default Main