import Card from "./Card";
import jobs from "../data/jobs"
import "./CardsContainer.css"

export default function CardsContainer(){
    return(
        <div className="cards-container">
            {
                jobs.map((item, index) => (
                    <Card {...item} key = {index} />
                ))
            }
        </div>
    )
}
