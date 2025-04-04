import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faXmark, faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons"
import "./Header.css"
import {Theme} from "./components/dark mode/Theme.jsx"
import Search from "./components/search/Search.jsx"
import { useState } from "react"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenSearch, setIsOpenSearch] = useState(false)


    const openSearch = (val) => {
        setIsOpenSearch(val)
    }

    const closeNav = (val) => {
        setIsOpen(val);
    }


    return (
        <header className="head">
            <div className="top-head">
                <button onClick={() => { closeNav(true); openSearch(false) }} className="ham-menu resp"> {/*---BOTÃO ABRIR NAV---*/}
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className="logo">
                    <img src="./img/logo-playnerd.png" alt="logo" />
                </div>

                <button onClick={() => { closeNav(false); openSearch(!isOpenSearch) }} className="ham-menu resp"> {/*---BOTÃO ABRIR SEARCH---*/}
                    {isOpenSearch ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faMagnifyingGlass} />}
                </button>
                <div className="bgTopHeader"></div>
                <Search secondClass={isOpenSearch ? "openSearch" : ""}/>
                <Theme addClass="theme-desktop" />
            </div>
            <nav className={isOpen ? "open" : ""}>
                <div className="close-nav resp"> {/*---BOTÃO FECHAR NAV---*/}
                    <button onClick={() => closeNav(false)}>
                        <FontAwesomeIcon icon={faXmark} className="close-btn" />
                    </button>
                </div>
                <ul>
                    <li><a href="#">Animes</a></li>
                    <li><a href="#">Séries</a></li>
                    <li><a href="#">Filmes</a></li>
                    <li><a href="#">Doramas</a></li>
                    <li className="theme-container">
                        <div className="home resp">
                        <FontAwesomeIcon icon={faHouse} />
                        </div>
                        <div className="theme-mob">
                        <Theme addClass="theme-resp" />

                        </div>
                    </li>
                </ul>
            </nav>

        </header>
    )

}

export default Header