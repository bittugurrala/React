import Card from "./Card";
import data from "../data/data.json"

export default function CardsContainer(){
    return (
        <div className="flex flex-col items-center gap-10 p-20 ">
            {data.map((item) => (
                <Card key = {item.id} {...item}/>
            ))}
        </div>
    )

}