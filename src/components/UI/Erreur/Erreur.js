import React from 'react'
import TitleH1 from '../titres/Title';

const Erreur = (props) => {
    return (
        <>
            <TitleH1>Erreur {props.type}</TitleH1>
            <div>{props.children}</div>
            
        </>
    )
}
export default Erreur;