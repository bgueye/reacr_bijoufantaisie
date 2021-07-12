import React, { Component } from 'react'
import TitleH1 from '../../../components/UI/titres/Title';
import Header from '../../../components/UI/Header/header';

class Accueil extends Component {
    render() {
        return (
            <div>
                <Header />
                <TitleH1>Page d'accueil</TitleH1>

                <div className="categories">
                    <div className="small-container">
                        <div className="row">
                            <div className="col-3">
                                <a href="produit.html"><img src="images/category-1.jpg" alt="" /></a>
                            </div>
                            <div className="col-3">
                                <a href="produit.html"><img src="images/category-2.jpg" alt="" /></a>
                            </div>
                            <div className="col-3">
                                <a href="produit.html"><img src="images/category-3.jpg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            

                <div class="small-container">
                    <h1 class="title">Nos derniers produits</h1>
                    <div class="row">
                        <div class="col-4">
                            <img src="images/product-1.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-2.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-3.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-4.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                    </div>

                    <h1 class="title">Nouveautés</h1>
                    <div class="row">
                        <div class="col-4">
                            <img src="images/product-5.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-6.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-7.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-8.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <img src="images/product-9.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-10.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-11.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                        <div class="col-4">
                            <img src="images/product-12.jpg" alt=""/>
                            <h4>Le nom du produit</h4>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <p>Prix : 50.00€</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Accueil;