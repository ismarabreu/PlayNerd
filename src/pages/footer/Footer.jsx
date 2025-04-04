import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="#" className="logo-footer">
                    <img src="./img/logo-playnerd.png" alt="logo" />
                </a>
                <p>Siga-nos também nas nossas redes sociais:</p>
                <div className="socials-logos">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
            </div>
            <div className="copy">
                <ul>
                    <li><a href="">Sobre o PlayNerd</a></li>
                    <li><a href="">Contato</a></li>
                    <li><a href="">Termos e condições</a></li>
                    <li><a href="">Política e privacidade</a></li>
                    <li><span>&copy; 2025 PlayNerd</span></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer 