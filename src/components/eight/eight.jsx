import "./eight.css"


function Eight(){

    return(
        <div className="eight-container">
            <div className="eight-inner-container">
                <button>RESERVATION</button>
                <h1>BOOK YOUR TABLE</h1>
                <div>
                    <input className="input-1" type="text" placeholder="Name" />
                    <input className="input-2" type="text" placeholder="Email" />
                    <input className="input-3" type="text" placeholder="Persons" />
                    <input className="input-4" type="text" placeholder="Timing" />
                    <input className="input-5" type="text" placeholder="Date" />
                    
                </div>
                <button className="end-btn">BOOK A TABLE</button>
            </div>
        </div>
    )
}
export default Eight