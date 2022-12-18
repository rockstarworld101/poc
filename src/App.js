import './App.css';
import React, { Suspense } from "react";
// import ErrorBoundary from "./error.boundary.js";
import Second from './function/second';
import Third from './function/Third';
// import Fourth from './function/GraphQL/Fourth'

const Car = React.lazy(()=> import('./class/First'))

function App() {
  return (
    <div >
      <header >
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Suspense fallback={<div>loading...</div>}><Car /></Suspense>
        {/*  */}
          
        <Second></Second>
        <Third></Third>
        {/* <Fourth></Fourth> */}
      </header>
    </div>
  );
}

export default App;
