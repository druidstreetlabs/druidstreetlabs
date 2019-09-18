import React from 'react';
import Header from './components/layout/Header';
import Body from './components/layout/Body';
import Footer from './components/layout/Footer';
import './app.css';

function Separator({ color }) {
  return <div className={`separator ${color}`} />;
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <Separator color="grey-300" />
      <Body />
      <Separator color="grey-300" />
      <Footer />
    </div>
  );
}
