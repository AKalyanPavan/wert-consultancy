import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage.js';
import PrivacyPolicy from './components/PrivacyPolicy.js';
import TermsAndConditions from './components/TermsAndConditions.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={'/'}>
      <Routes>

        <Route index path='/' element={<Homepage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<TermsAndConditions />} />

      </Routes>
  </BrowserRouter>
);
