import './App.css';
import PromoForm from './components/PromoForm';
import ThankYouPage from './components/ThankYouPage'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/promo' element={<PromoForm/>}/>
        <Route path='/thankyou' element={<ThankYouPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
