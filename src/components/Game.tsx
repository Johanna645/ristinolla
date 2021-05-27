import React from 'react';

function Game() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div>status</div>

            <Board />
          </div>

          <div className="col">
            <Log />
          </div>
        </div>
      </div>
    </div>
  );
}

function Board() {
  return (
    <div>
      <div className="container">
        <div className="row gx-6 gy-6">
          <div className="col">
            <Square />
            <Square />
            <Square />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Square />
            <Square />
            <Square />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Square />
            <Square />
            <Square />
          </div>
        </div>
      </div>
    </div>
  );
}

function Square() {
  return (
    <button type="button" className="btn btn-outline-dark btn-lg">
      X
    </button>
  );
}

function Log() {
  return (
    <div>
      <ol>
        <li>
          <button type="button" className="btn btn-outline-dark btn-lg">
            Go to move
          </button>
        </li>
      </ol>
    </div>
  );
}

export default Game;
