import TopBar from "./components/topbar/Topbar"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import BloodGroup from "./pages/bloodGroup/BloodGroup"
import Register from "./pages/register/Register"
import Contact from "./pages/contact/Contact"
import Footer from "./pages/footer/footer"

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <Router>
      <TopBar/>
      <Routes>
          <Route exact path="/" element={[<Home/>,<Footer/>]}  />
          <Route exact path="/about" element={<About/>}/>
          <Route exact path="/contact" element={<Contact/>}/>
          <Route exact path="/getusers" element={<BloodGroup/>}/>
          <Route exact path="/register" element={<Register/>}/>
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
           
     

  </Router>
  );
}

export default App;
