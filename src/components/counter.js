import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

// css modules
import styles from "./counter.module.css";

import {
  COUNTER,
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "../reducers/actions";

const Counter = ({
  counter,
  increaseCounter,
  decreaseCounter,
  resetCounter,
  name,
}) => {
  return (
    // <section className={`counter py-5`}> // this doesn't work
    <section className={`${styles.counter} py-5`}>
      <h3 className={`text-center text-capitalize ${styles.textRed}`}>
        counter
      </h3>
      <h3
        className={`text-center text-capitalize ${styles.textGreen}`}
      >{`${counter} ${name}${counter > 1 ? "s" : ""}`}</h3>
      <div className="buttons mt-5 w-75 mx-auto d-flex justify-content-around">
        <button
          className="btn btn-primary text-capitalize"
          onClick={increaseCounter}
        >
          increase
        </button>
        <button
          className="btn btn-primary text-capitalize"
          onClick={decreaseCounter}
        >
          decrease
        </button>
        <button
          className="btn btn-primary text-capitalize"
          onClick={resetCounter}
        >
          reset
        </button>
      </div>
    </section>
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

// connect function from react-redux
const mapStateToProps = ({ counterState: { counter } }) => {
  return { counter };
};

export default connect(mapStateToProps, {
  increaseCounter,
  decreaseCounter,
  resetCounter,
})(Counter);

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     // using functions
//     increaseCounter() {
//       return dispatch({ type: COUNTER.INCREASE });
//     },
//     // using objects
//     decreaseCounter: () => dispatch({ type: COUNTER.DECREASE }),
//     resetCounter: () => dispatch({ type: COUNTER.RESET }),
//     // name: ownProps.name,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
