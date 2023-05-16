import React from 'react'
import {Link, useNavigate} from 'react-router-dom';
import './header.css'
import Logo from '../../assets/logo.jpg';

function Header() {
    const navigate = useNavigate();

    return (
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{textDecoration: 'none'}} to='/'>
                    <li>Home</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/contato'>
                    <li>Contatos</li>
                    </Link>
                    <Link style={{textDecoration: 'none'}} to='/curiosidades'>
                    <li>Curiosidades</li>
                    </Link>
                    <li onClick={() => navigate('/comentarios')}>Comentários</li>
                </ul>
            </nav>
        </header>
    )
}


export default Header;