import Card from "./cards/cards"
import "./Home.css"
export default function Home(){
    return(
        <div className = "items-container">
          <Card title = "FrontEnd" desc= "This is the card that I am trying to display"/>
          <Card title = "BackEnd" desc= "This is the card that I am trying to display"/>  
        </div>
    )
}