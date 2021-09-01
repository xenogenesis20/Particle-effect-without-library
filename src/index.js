import React from 'react';
import ReactDOM from 'react-dom';
import { HeroCanvas } from './components/Canvas';
import './styles.css';

function App() {
  return <HeroCanvas />;
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
