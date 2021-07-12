import React from 'react'
import LogoBlanc from '../../../assets/images/logobf_blanc.png'
import PlayStore from '../../../assets/images/play-store.png'
import AppStore from '../../../assets/images/app-store.png'
import { NavLink } from 'react-router-dom'


 const footer = (props) => {
    return (

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Télécharger notre application</h3>
                        <p>Application disponible sur Android et sur Aple</p>
                        <div className="app-logo">
                            <img src={PlayStore} alt=""/>
                            <img src={AppStore} alt=""/>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <NavLink to='/' exact className="nav-link"> <img src={LogoBlanc} alt=""/></NavLink>
                        <p>Notre objectif est de rendre accessible les accessoires de la mode </p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Nos liens utils</h3>
                        <ul>
                            <li><NavLink to='/coupon' exact className="nav-link">Coupon</NavLink></li>
                            <li><NavLink to='/blog' exact className="nav-link">Le blog du styliste</NavLink></li>
                            <li><NavLink to='/politiques' exact className="nav-link">Politique de retour</NavLink></li>
                            <li><NavLink to='/contact' exact className="nav-link">Nous joindre</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-col-3">
                        <h3>Nous suivre</h3>
                        <ul>
                            <li><a href='https://www.facebook.com/bocar.gueye' target='_blank' rel="noreferrer">Faceboock</a></li>
                            <li><a href='https://twitter.com/billGueye' target='_blank' rel="noreferrer">Twitter</a></li>
                            <li><a href='https://www.instagram.com/bocarguey/' target='_blank' rel="noreferrer">Instagram</a></li>
                            <li><a href='https://www.youtube.com/channel/UCGn6Fd9JOwe4Z2kz2p81Fhw' target='_blank' rel="noreferrer">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <p className="copyright">Copyright 2021 - BG Innov</p>
            </div>
        </div>

    )
}
export default footer;