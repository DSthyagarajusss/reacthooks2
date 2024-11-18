import React, { useState } from 'react';

function UseState() {
  // useState with object 
  let [detailes, setDetailes] = useState({ Counter: 0, name: "" });

  // Function to increment the Counter
  let Incr = () => {
    setDetailes((prev) => ({
      ...prev,
      Counter: prev.Counter + 1,
    }));
  };

  // Function to update the name property in state
  let updateName = (e) => {
    setDetailes((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5">
            <div className="card">
              <div className="card-header bg-dark text-white">
                <h1>UseState</h1>
              </div>
              <div className="card-body">
                <input
                  type="text"
                  placeholder="Enter name"
                  onChange={updateName}
                  value={detailes.name}
                />
                <h1>
                  {detailes.name} has clicked {detailes.Counter} times!
                </h1>
                <button onClick={Incr} className="mt-2 btn btn-primary">
                  Click me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>useState:</h1>
      <h4>
        UseState is a function to add state in functional components and track
        component state in a functional component.
      </h4>
    </>
  );
}

export default UseState;
