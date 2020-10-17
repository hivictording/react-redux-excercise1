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
  addRandom,
  saveCounter
} from "../reducers/actions";

const Counter = ({
  counter,
  increaseCounter,
  decreaseCounter,
  resetCounter,
  addRandom,
  savedList,
  saveCounter,
  name,
}) => {

  return (
    <div className={`${styles.counter} py-5`}>
      {/* Counter */}
      <section className="mb-5">
        <h3 className={`text-center text-capitalize ${styles.textRed}`}>
          counter
        </h3>
        <h3
          className={`text-center text-capitalize ${styles.textGreen}`}
        >{`${counter} ${name}${counter > 1 ? "s" : ""}`}</h3>
        <div className="buttons mt-5 w-75 mx-auto d-flex justify-content-around flex-wrap">
          <button
            className="btn btn-primary text-capitalize my-2"
            onClick={increaseCounter}
          >
            increase
          </button>
          <button
            className="btn btn-primary text-capitalize my-2"
            onClick={decreaseCounter}
          >
            decrease
          </button>
          <button
            className="btn btn-primary text-capitalize my-2"
            onClick={() => addRandom(10)}
          >
            add random
          </button>
          <button
            className="btn btn-primary text-capitalize my-2"
            onClick={resetCounter}
          >
            reset
          </button>
          <button
            className="btn btn-success text-capitalize my-2"
            onClick={() => saveCounter(counter)}
          >
            save
          </button>
        </div>
      </section>

      {/* Saved List */}
      <section className={`${styles.SavedList} w-75 mx-auto text-center text-capitalize text-info`}>
        <h3>saved list</h3>
        <ul className={styles.SavedListCenter}>
          {(savedList && savedList.length > 0) && savedList.map((item,index) => {
            return <li key={index} className={styles.SingleList}>
              {item}
            </li>
          })}
        </ul>
      </section>
    </div>
    
  );
};

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
};

// connect function from react-redux
const mapStateToProps = ({ counterState: { counter }, savedList }) => {
  return { counter, savedList};
};

export default connect(mapStateToProps, {
  increaseCounter,
  decreaseCounter,
  resetCounter,
  addRandom,
  saveCounter
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
