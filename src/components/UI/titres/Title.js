import React from 'react'

 const TitleH1 = (props) => {
     let backgroundColor = props.bgColor ? props.bgColor : "bg-primary";
     let monCss = `${backgroundColor} title`
    return (
        <h1 className={monCss}>
            {props.children}
        </h1>
    )
}
export default TitleH1;