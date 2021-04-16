import logo from './logo.svg';
import './App.css';

function App() {
  let deploy = "Then deploy to Kubernetes"
  return (
    <div className="App">
      <header className="App-header">
        <div> {"Tamish Trying for Docker..."}</div>
        <div> {deploy}</div>
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';
// import Header from "./MyComponents/Header";

// function App() {
//   let deploy = "Then deploy to Kubernetes"
//   return (
//     <>
//      <Header/>
//      <Todos/>
//      <Footer/>
     
//     </>
//   );
// }

// export default App;
