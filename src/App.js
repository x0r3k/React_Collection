// import './App.css';
import Router from './routing';
import { BrowserRouter } from 'react-router-dom';
// import TestPage from "./pages/testPage";
// import Timer from "./mobx/timer";

// const myTimer1 = new Timer();
// const myTimer2 = new Timer();

function App() {
  return (
    <BrowserRouter>
      {/* <TestPage timer={myTimer1}/>
      <br/>
      <TestPage timer={myTimer2}/> */}
      <Router/>
      {/* <div>Main page</div> */}
    </BrowserRouter>
  );
}

// setInterval(() => {
//   myTimer1.increaseTimer();
//   myTimer2.increaseTimer();
// }, 1000);

export default App;
