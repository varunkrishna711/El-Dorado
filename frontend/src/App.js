// import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
// import Checkout from './Checkout';
// import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Arts from "./components/Arts";
import Profile from "./components/Profile Page/Profile";
import Competitions from "./components/Competitions";
import Bookingpage from "./components/Booking_page/Bookingpage";
import Login from "./components/login/Login";
import StudentForm from "./components/registration/StudentForm";
import TeacherForm from "./components/registration/TeacherForm";
import Registration from "./components/registration/Registration";
import Archives from "./components/Archives/Archives";
import Kathakali from "./components/Description/Kathakalipg";
import Mohiniyattom from "./components/Description/Mohiniyattompg";
import Kuchipodi from "./components/Description/Kuchipodipg";
import Learn from './components/Learn/Learncards';

// import { useEffect } from 'react';
// import {auth} from './firebase';
// import {useStateValue} from './StateProvider';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<> <Header /> <Arts /> <Footer /> </>} />
        </Routes>

        <Routes>
          <Route path='/profile' element={<> <Header /> <Profile /> <Footer /> </>} />
        </Routes>

        <Routes>
          <Route path='/competitions' element={<> <Header /> <Competitions /> <Footer /> </>} />
        </Routes>
        
        <Routes>
          <Route path='/book' element = {<> <Header /> <Bookingpage/> <Footer /> </>} />
        </Routes>

        <Routes>
          <Route path='/login' element = {<> <Header /> <Login /> <Footer /> </>} />
        </Routes>  

        <Routes>
          <Route path='/archives' element = {<> <Header /> <Archives /> <Footer /> </>} />
        </Routes>

        <Routes>
          <Route path='/regstudent' element = {<> <Header /> <StudentForm /> <Footer /> </>}/>
        </Routes>

        <Routes>
          <Route path='/regteacher' element = {<><Header /> <TeacherForm /> <Footer /> </>} /> 
        </Routes>

        <Routes>
          <Route path='/registration' element={<> <Header /> < Registration />  </>} />
        </Routes>

        <Routes>
          <Route path='/kathakali' element={<> <Header /> < Kathakali />  <Footer /> </>} />
        </Routes>

        <Routes>
          <Route path='/mohiniyattom' element={<> <Header /> < Mohiniyattom />  <Footer /> </>} />
        </Routes>

        <Routes>
          <Route path='/kuchipodi' element={<> <Header /> < Kuchipodi />  <Footer /> </>} />
        </Routes>

        <Routes>
          <Route path='/learn' element={<> <Header /> <Learn/> <Footer /> </>} />
        </Routes>


      </div>
    </Router>
  );
}

export default App;
