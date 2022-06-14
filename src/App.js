import
{
BrowserRouter as Router,
Routes, 
Route,
Link
}from "react-router-dom";

import CounterExempele from './CounterExemple';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import Product from "./Views/Product";



function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
      <Header/>
      
     

     

      <div className="p-3">
      <Routes>
          <Route  path="/"  element={<Home/>}>
          </Route>

          <Route  path="/Products/:id" element={<Product/>}>
          </Route>

          <Route  path="/About" element={<About/>}>
          </Route>
         
        </Routes>
      </div>

      <Footer/>
      </Router>
    </div>
  );
}

export default App;
