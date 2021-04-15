import logo from "./logo.svg";
import "./App.css";
import { ipcRenderer } from "electron";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with electron
        </a>

        <button
          onClick={() => {
            ipcRenderer.send("robotjs");
          }}
        >
          {"move your mouse"}
        </button>

        <div>
          We are using Node.js <span id="node-version" />, Chromium{" "}
          <span id="chrome-version" />, and Electron{" "}
          <span id="electron-version" />.
        </div>
      </header>
    </div>
  );
}

export default App;
