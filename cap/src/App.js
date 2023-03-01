import logo from './logo.svg';
import './App.css';
import AllContracts from "./components/contract/AllContracts";
import Form from "./components/form/Form";
import {Route,Routes} from "react-router-dom";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Form />}/>
         <Route path="/allcontracts" element={<AllContracts />} />
      </Routes>

  );
}

export default App;
