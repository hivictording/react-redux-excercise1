import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'

import withCocktail from '../HO/withCocktail'
import WithCocktail2 from '../HO/WithCocktail2'

import {getCocktail} from '../reducers/actions'

const Cocktail = (props) => {
  React.useEffect(() => {
    props.getCocktail();
  },[]);

return <div>
  Hello from cocktail,{props.name} {props.name2}
  <ul className="cocktails">
    {props.cocktails.map(cocktail => {
      return <li key={+cocktail.idDrink}>{cocktail.strDrink}</li>
    })}
  </ul>
  </div>;
  // return <WithCocktail2 classes="text-center text-warning">Hello from cocktail,{props.name}</WithCocktail2>
};

Cocktail.propTypes = {};

const mapStatetoProps = ({cocktailState}) => {
  return {cocktails: cocktailState}
  
}

export default connect(mapStatetoProps,{getCocktail})(withCocktail(Cocktail,"text-center text-warning","Ding"));
// export default Cocktail;
