import logo from './logo.svg';
import './App.css';
import PromoForm from './components/PromoForm';
import ThankYouPage from './components/ThankYouPage'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='/' element={<PromoForm/>}/>
        <Route path='/thankyou' element={<ThankYouPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
