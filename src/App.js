import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/Layout';
import Display from './components/Display/Display';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Characters from './pages/Characters';
import Planets from './pages/planets/Planets';



function App() {
  return (
    <Router>
    <div className="App">
      <Layout />
      <Routes>
      <Route path="/" element={<Display />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/planets" element={<Planets />} />
      </Routes>
    </div>
    </Router>
  );
  
}

export default App;
