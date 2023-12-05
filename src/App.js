import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import {LoginPage} from './LoginPage'
import {Description} from './Description'
import {Quiz} from './Quiz'
import {Stats} from './Stats'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<LoginPage/>}/>
        <Route path="/description" element={<Description/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/stats" element={<Stats/>}/>
      </Routes>
    </div>
  );
}

export default App;
