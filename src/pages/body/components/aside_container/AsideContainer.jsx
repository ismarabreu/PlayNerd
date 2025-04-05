import "./AsideContainer.css"
import { CardsAside } from "../aside_cards/CardsAside";

const AsideContainer = () => {
    return (
        <aside>
            <div className="asideContainer">
                <h3 className="sectionName">Destaques</h3>
                <CardsAside />
                <CardsAside />
                <CardsAside />
                <CardsAside />
            </div>

        </aside>
    );
};

export default AsideContainer;