import { PropTypes } from "prop-types";
import "./CounterButton.css";

export default function CounterButton({
  by,
  incrementMethod,
  decrementMethod,
}) {
  return (
    <div className="Counter">
      <div>
        <button
          className="counterButton"
          onClick={() => {
            incrementMethod(by);
          }}
        >
          +{by}
        </button>
        <button
          className="counterButton"
          onClick={() => {
            decrementMethod(by);
          }}
        >
          -{by}
        </button>
      </div>
    </div>
  );
}

CounterButton.propTypes = {
  by: PropTypes.number,
};

CounterButton.defaultProps = {
  by: 7,
};
