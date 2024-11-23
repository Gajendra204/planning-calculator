import React from 'react';
import logo from './logo.svg';
import './App.css';
import Top from './component/top/Top';
import PieChart from './component/CostCalculator/chart/Chart';

function App() {
  return (
    <div>
      <Top/>
      <PieChart/>
    </div>
  );
}

export default App;
