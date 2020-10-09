import React from 'react'

const withCocktail = (Component,classes,name2) => {
    return (props) => <div className={classes}>
        <Component {...props} name2={name2}/>
        </div>
}

export default withCocktail;