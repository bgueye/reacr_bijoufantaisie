import React from 'react'
import logo from "../../../assets/images/logobf.png"
import panier from "../../../assets/images/cart.png"
import menu from "../../../assets/images/menu.png"
import { NavLink } from 'react-router-dom'

const navBar = () => {
    return (
        <div className="navbar">
            <div class="logo">
                <NavLink to="/" className="nav-link"><img src={logo} width="125px" alt="logo" /></NavLink>
            </div>
            <nav>
                <ul id="menuItem">
                    <li>
                    <NavLink to="/" exact className="nav-link">Accueil</NavLink>
                    </li>
                    <li><a href="produit.html">Produits</a></li>
                    <li><a href="nous">Nous</a></li>
                    <li><NavLink to="/contact" exact className="nav-link">Contact</NavLink></li>
                    <li><a href="compte.html">Connexion</a></li>
                </ul>
            </nav>
            <a href="panier.html"><img src={panier} width="30px" height="30px" alt="panier" /></a>
            <img src={menu} className="menu-icon" onClick="menutoggle()" alt="menu" />
        </div>
    )
}
export default navBar;