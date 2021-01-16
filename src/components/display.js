import React from 'react';

function Display(props) {
  const { i, increment } = props;

  return (
    <div>
      <h2 className="greeting-text">Hello world!!</h2>

      <br />

      <h2 className="greeting-text" style={{color: 'chartreuse'}}>Hi there..!!</h2>

      <br />

      <h2>Good day..</h2>

      <div>
          <button onClick={() => increment()}>
              Click me
          </button>
          <h4 id="display">{i === 1 ? 'Not clicked..' : i}</h4>
      </div>
    </div>
  );
}

export default Display;
