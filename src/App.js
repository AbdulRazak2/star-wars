import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layouts/Layout';
import ImageSlider from './components/Carousel/ImageSlider';


function App() {
  return (
    <div className="App">
      <Layout />
      <ImageSlider/>
    </div>
  );
}

export default App;
