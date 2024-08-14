
import './Footer.css'; 
import facebook from '../../assets/imagenes/facebook.jpeg';
import instagram from '../../assets/imagenes/instagram.jpeg';

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <p>©Derechos reservado Fumitecno2024</p>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/fumitecno_arg/">
                            <img className="instagram" src={instagram} alt="Instagram" />
                        </a>
                    </li>
                    <li>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Fumitecno/">
                            <img className="facebook" src={facebook} alt="Facebook" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;