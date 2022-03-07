import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import './App.css';
import Login from "../src/components/Login"
import Create_Account from './components/Create_Account';
import Homepage from "./components/Homepage"
import ConnectH from './components/Bottom-Homepage'
import Connect1 from './components/Connect0'

function App() {
  
  return (
    // <Login/>npm yarn add react-router-dom
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>}>
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/create-new-account" element={<Create_Account/>}>
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/homepage" element={<Homepage title1="Welcome Oliver!" title2={["Lets start the process for ", <strong>Reuse, Remanufacture</strong>, " and ",<strong>Recycle</strong>, " for this battery"]} c={0}/>}>
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/connect1" element={<Homepage title1="Let's start Oliver." title2="Choose an option to get started." c={1}/>}>
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/connect2" element={<Homepage title1="Connect the Car" title2="Connect the car with On Boarding Diagonistics(OBD). " c={2}/>}>
        </Route>
      </Routes>
      {/* <Routes>
        <Route exact path="/connect3" element={<Homepage title1="Connect the Car" title2="Connect the car with On Boarding Diagonistics(OBD). " c={3}/>}>
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/connect4" element={<Homepage title1="Connect the Car" title2="Connect the car with On Boarding Diagonistics(OBD). " c={4}/>}>
        </Route>
      </Routes>
      <Routes>
        <Route exact path="/4m" element={<FourM/>}>
        </Route>
      </Routes> */}
    </Router>

  );
}

export default App;