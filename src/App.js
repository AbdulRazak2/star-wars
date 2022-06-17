import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/Layout';
import Display from './components/Display/Display';
import Planet from './pages/planets/Planet';


function App() {
  return (
    <div className="App">
      <Layout />
      <Display/>
      <Planet />
    </div>
  );
}

export default App;
