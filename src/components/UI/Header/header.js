import React from 'react'
import Image from '../../../assets/images/colliers/collier.png'
import NavBar from '../navBar/navBar'

 const header = (props) => {
    return (
        
        <div className="header">
            <div className="container">
                <NavBar/>
                <div className="row">
                    <div className="col-2">
                        <h1>Retrouvez votre style<br/> avec nos bijoux ! </h1>
                        <p>Le succès n'est pas toujours une question de grandeur. C'est une question de cohérence. <br/> travaille acharné constant gagne du succès. La grandeur viendra.</p>
                        <a href="/" className="btn">Nos bijoux &#8594;</a>
                    </div>
                    <div className="col-2">
                        <img src={Image} alt="collier"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default header;