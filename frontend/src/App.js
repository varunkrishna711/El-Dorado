// import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Checkout from './Checkout';
// import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopularShows from "./components/PopularShows";

// import { useEffect } from 'react';
// import {auth} from './firebase';
// import {useStateValue} from './StateProvider';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <PopularShows /> <Footer />
              </>
            }
          />
        </Routes>

        <Routes>
          <Route path='/competitions' element={<> <Competitions /> </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
