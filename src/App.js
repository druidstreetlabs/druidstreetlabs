import React from 'react';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import Background from './components/layout/Background';
import './app.css';

export default function App() {
  return (
    <div className="app">
      <Background />
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
