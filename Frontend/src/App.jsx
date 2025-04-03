import { Routes, Route, Navigate } from "react-router-dom";

import { Suspense } from "react";
import Home from './pages/Home.jsx';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Pain from './category/pain.jsx';

import Vitamins from './category/vitamins.jsx';
import Wellness from './category/wellness.jsx';
import DoctorPanel from './pages/DoctorPanel.jsx';
import PharmacistPanel from './pages/PharmacistPanel.jsx';
import './App.css';

function App() {
  return (
    <div className="min-h-screen">
      <Suspense fallback={<div className="text-center mt-10">Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doctor-panel" element={<DoctorPanel />} />
          <Route path="/pharmacist-panel" element={<PharmacistPanel />} />


          <Route path="/category/pain" element={<Pain />} />
          <Route path="/category/vitamins" element={<Vitamins />} />
          <Route path="/category/wellness" element={<Wellness />} />

        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
