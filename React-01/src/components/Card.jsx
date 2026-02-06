import "./Card.css"
import {FaBookmark} from "react-icons/fa"
export default function Card({company, logo, posted, title, tags, salary, location, saved}){
    return(
        <div className="Card">
            <div className = "top-section">
                <div className="logo-section">
                    <img className = "company-logo" src= {logo} alt="Logo" />
                    <button className="save-button">Save <span className = "bookmark"><FaBookmark size= {10} color = "#908f8f"/></span></button>
                </div>
                <div className="title-section">
                    <h5 className="forth-heading"> {company}<span className="time">{posted}</span></h5>
                    <h3 className="third-heading">{title}</h3>
                    <div className="type">
                        <button className="type-button">{tags[0]}</button>
                        <button className="type-button">{tags[1]}</button>
                    </div>
                </div>
            </div>
            <div className = "botton-section">
                <div>
                    <h3>{salary}</h3>
                    <p className="time location">{location}</p>
                </div>
                <div>
                    <button className="apply-button">Apply now</button>
                </div>
                
                
            </div>

            
        </div>
    )
}