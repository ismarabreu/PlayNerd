import { Card } from "../cards/Card";
import "./CardsContainer.css"

const CardsContainer = () => {
    return (
        <section className="cardsContainer">
            <h3 className="sectionName">Notícias</h3>
            <Card />
            <Card />
            <Card />
            <Card />
        </section>
    );
};

export default CardsContainer;