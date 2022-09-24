import { Link } from "react-router-dom"
import { PrimeIcons } from 'primereact/api';

import './Menu.scss'
import { useState } from "react";

export const Menu = () => {

    const activePage = window.location.pathname
    const [renderMenu, setRenderMenu] = useState(false)

    const listaMenu = [
        { label: 'Home', path: '/', icon: PrimeIcons.HOME, key: 1 },
        { label: 'Contato', path: '/contato', icon: PrimeIcons.PHONE, key: 2 },
        { label: 'FeedBack', path: '/feedback', icon: PrimeIcons.THUMBS_UP, key: 3 },
        { label: 'Adaptações', path: '/adpatacoes', icon: PrimeIcons.COG, key: 4 },
        { label: 'Sobre', path: '/sobre', icon: PrimeIcons.INFO_CIRCLE, key: 5 },
    ]

    function renderizaMenu() {
        setRenderMenu(!renderMenu)
    }

    return (
        <ul className="listaMenu" >
            {listaMenu.map(item =>
                <div onClick={renderizaMenu} className={`links ${item.path == activePage ? "active" : ""}`} key={item.key}>
                    <Link to={item.path} >
                        <i className={item.icon}></i>
                        <label>{item.label}</label>
                    </Link>
                </div>)}
        </ul>
    )
}