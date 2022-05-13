// import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
// import Checkout from './Checkout';
// import Login from './Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PopularShows from './PopularShows';
// import { useEffect } from 'react';
// import {auth} from './firebase';
// import {useStateValue} from './StateProvider';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
            <Route path="/" element={<><Header /> <PopularShows /> <Footer/></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
