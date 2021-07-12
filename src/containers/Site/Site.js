import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Accueil from './Accueil/Accueil'
import Contact from './Contact/Contact'
import Erreur from '../../components/UI/Erreur/Erreur'
import Footer from '../../components/UI/Footer/footer'

class Site extends Component {
    render() {
        return (
            <>
                
                <Switch>
                    <Route path="/contact" exact render={()=> <Contact />} />
                    <Route path="/politiques" exact render={()=> <h1>Politique de retour</h1>} />
                    <Route path="/blog" exact render={()=> <h1>Le blog du styliste</h1>} />
                    <Route path="/coupon" exact render={()=> <h1>Coupons de réduction</h1>} />
                    <Route path="/coupon" exact render={()=> <h1>Coupons de réduction</h1>} />
                    <Route path="/" exact render={()=> <Accueil />} />
                    <Route render={()=> <Erreur type='404'>La page recherchée n'existe pas</Erreur>} />
                </Switch>
                <Footer />
            </>
        )
    }
}
export default Site;