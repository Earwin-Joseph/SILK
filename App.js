
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
    </BrowserRouter>
   
  );
}

export default App;
