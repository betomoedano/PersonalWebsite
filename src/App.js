import './App.css';
import Header from './components/Header';
import Hello from './components/Hello';
import Lovers from './components/Lovers';
import Rockets from './components/Rockets';
import Underchat from "./components/Underchat";
import Souls from "./components/Souls";

function App() {
  return (
    <div className="bg-gray-50 dark:bg-darkBackground">
      <Header/>
      <Hello/>
      <Lovers/>
      <Rockets/>
      <Underchat/>
      <Souls/>
    </div>
  );
}

export default App;
