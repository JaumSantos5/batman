import React from "react";
import './footer.css'
import Logo from '../../assets/logo.jpg'
import {Link} from 'react-router-dom';

function Footer (){
    return (
        <footer>
        <img id='logo'src={Logo}/>
        <span> Todos os direitos reservados ©</span>
        <span> Desenvolvido por: João Santos </span>

            <nav className="footer-navigation">
                <ul className="footer-list">
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                    <li>Contatos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/curiosidades'>
                    <li>Curiosidades</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer