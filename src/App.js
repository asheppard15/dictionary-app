import logo from './library.jpeg';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>
      <footer className="App-footer">
        <small>
        Coded by Andrea Sheppard and is open-sourced on{" "}<a href="https://github.com/asheppard14/dictionary-app" target="blank" rel="noopener noreferrer">GitHub</a>
        </small>
      </footer>
      </div>
    </div>
  );
}


