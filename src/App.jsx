import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Sever from "./Page/Sever";
import View from "./Page/View";

function App() {
  return (
    <>
     <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-400 ">

      <nav className="bg-gray-900/70 backdrop-blur-md text-white px-6 py-4 flex gap-6 shadow-md">

        <Link to="/home" className="hover:text-yellow-300 transition duration-200">
            Home
          </Link>

          
         <Link to="/add" className="hover:text-yellow-300">
         About
         </Link>

      </nav>


      <div className="p-6">
         <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/home" element={<Home />} />
        <Route path="/add" element={<About />} />
       <Route path="/sever/:id" element={<Sever />} />
        <Route path="/view/:id" element={<View />} />
        </Routes>

      </div>
      </div>
    </>
  );
}

export default App;
