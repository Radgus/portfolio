import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/home/index.jsx';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route exac path='/' element={<Home/>} />
        <Route exac path='/portfolio' element={<Home/>} />
      </Routes>
    </Layout>
  </BrowserRouter>
)

export default App;
