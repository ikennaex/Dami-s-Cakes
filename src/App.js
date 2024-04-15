import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Homepage from './Pages/Homepage';
import Placeorder from './Pages/Placeorder';
import Flavourmenu from './Pages/Flavourmenu';
import Servingguide from './Pages/Servingguide';
import Availability from './Pages/Availability';
import Gallery from './Pages/Gallery';
import Cupcakes from './Pages/Cupcakes';
import Corperateorders from './Pages/Corperateorders';

function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element = {<Layout />}>
          <Route index element = {<Homepage />} />
          <Route path='/placeorder' element = {<Placeorder />} />
          <Route path='/flavour-menu' element = {<Flavourmenu />} />
          <Route path='/serving-guide' element = {<Servingguide />} />
          <Route path='/availability' element = {<Availability />} />
          <Route path='/gallery' element = {<Gallery />} />
          <Route path='/cupcakes' element = {<Cupcakes />} />
          <Route path='/corperate-orders' element = {<Corperateorders />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
