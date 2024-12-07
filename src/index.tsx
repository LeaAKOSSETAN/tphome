import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Kitchen from './Components/Kitchen/Kitchen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Kitchen from './Kitchen';  
import Home from './Home';  

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Router>   
      <div>
        <nav>
          <a href="/kitchen" className="text-sm/6 font-semibold text-white">Kitchen</a>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />  {/* Page d'accueil */}
          <Route path="/kitchen" element={<Kitchen />} />  {/* Page de la cuisine */}
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
