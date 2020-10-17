import React from "react";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import styles from './cocktail.module.css';

import withCocktail from '../HO/withCocktail'
import WithCocktail2 from '../HO/WithCocktail2'

import {getCocktail} from '../reducers/actions'

const Cocktail = (props) => {
  const [search, setSearch] = React.useState('');
  React.useEffect(() => {
    props.getCocktail(search);
  },[search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  }

  console.log(props.cocktails);

  let cocktails;
  if (props.cocktails && props.cocktails.length > 0) {
    cocktails = (props.cocktails.map(cocktail => {
      return <li className={styles.singleCocktail} key={+cocktail.idDrink}>{cocktail.strDrink}</li>
    }))
  } else {
    cocktails = (
      <h3>No Cocktails Found</h3>
    )
  }

return <div className={styles.Cocktail}>
  Hello from cocktail,{props.name} {props.name2}
  <input className="d-block w-25 mx-auto px-3 py-1 my-3" 
  type="text" name="search" id="search" value={search} 
  onChange={handleSearch}
  placeholder="Search Cocktail"/>
  <ul className={`${styles.CocktailCenter} text-success text-bold`}>
    {cocktails}
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
