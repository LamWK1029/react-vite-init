import { React, useState, useEffect, useReducer } from "react";
import { StateContext, DispatchContext } from "./context/appContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { initialState, appReducer } from "./context/appReducer";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // multi process here, don't update ui if not necessary
    console.log("init app");
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <ErrorBoundary fallback={<LoadingPage />}>
          <Layout>{displayPage}</Layout>;
        </ErrorBoundary>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
