import "./cards.css"

export default function Card({title, desc}){
    return(
        <div className = "card-container">
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}