import { Card } from "../cards/Card";
import "./CardsContainer.css"

const CardsContainer = () => {
    return (
        <div className="cardsContainer">
            <h3>Notícias</h3>
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardsContainer;