import React from "react";
import PropTypes from "prop-types";

import withCocktail from '../HO/withCocktail'
import WithCocktail2 from '../HO/WithCocktail2'

const Cocktail = (props) => {
return <div>Hello from cocktail,{props.name} {props.name2}</div>;
  // return <WithCocktail2 classes="text-center text-warning">Hello from cocktail,{props.name}</WithCocktail2>
};

Cocktail.propTypes = {};

export default withCocktail(Cocktail,"text-center text-warning","Ding");
// export default Cocktail;
