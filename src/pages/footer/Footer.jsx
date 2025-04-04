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
                <p>&copy; <a href="#">2025 PlayNerd.</a></p>
                <p>Todos os direitos reservados</p>
            </div>
        </footer>
    )
}

export default Footer 