import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Search.css";

const Search = ({secondClass = null}) => {

    return (
        <div className={`backSearch ${secondClass || ""}`}>
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="fa-solid" />
                <input type="search" placeholder="Procurar..." />
                <FontAwesomeIcon icon={faArrowRight} className="fa-solid fa-arrow-right" />
            </div>
        </div>

    )
}

export default Search