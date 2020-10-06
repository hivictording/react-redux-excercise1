import React from "react";
import PropTypes from "prop-types";

const Counter = (props) => {
  const { counter = 10 } = props;
  return (
    <section className="py-5">
      <h3 className="text-secondary text-center text-capitalize">counter</h3>
      <h3 className="text-info text-center text-capitalize">{counter}</h3>
      <div className="buttons mt-5 w-75 mx-auto d-flex justify-content-around">
        <button className="btn btn-primary text-capitalize">increase</button>
        <button className="btn btn-primary text-capitalize">decrease</button>
        <button className="btn btn-primary text-capitalize">reset</button>
      </div>
    </section>
  );
};

Counter.propTypes = {};

export default Counter;
