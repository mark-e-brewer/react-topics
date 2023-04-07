import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function Counter({ color, children }) {
  const [like, setLike] = React.useState(0);

  const handleClick = () => {
    setLike(like + 1);
  };

  const handleReset = () => {
    setLike(0);
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={handleClick}
          style={{
            color,
            width: '60px',
            height: '35px',
          }}
        >like ({like})
        </button>
        {children}
        <button type="button" onClick={handleReset} id="resetBtn">Reset</button>
      </div>
    </>
  );
}

Counter.propTypes = {
  color: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.any]),
};

Counter.defaultProps = {
  color: 'blue',
  children: 'Click Like Button to Increment or Reset to start over!',
};
