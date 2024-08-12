import "../../styles/Layout/HeaderDesktop.css"
import { Link } from "react-scroll";

function HeaderDesktop() {

    return (
        <div id="Header">
            <center>
                <div id="Header-content">
                    <Link to="jogos-eletronicos" offset={-100} smooth={true} duration={500} className="comum">Jogos Eletronicos</Link>
                    <Link to="div-financeiro" smooth={true} duration={500} className="comum">Arte Moderna</Link>
                    <Link to="div-juridico" smooth={true} duration={500} className="comum">Santos Drumont </Link>
                    <Link to="div-parceiros" smooth={true} duration={500} className="comum">Jogos Olimpicos</Link>
                </div>

            </center>

        </div>
    )
}

export default HeaderDesktop