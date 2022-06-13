import logo from './logo.svg';
import './App.css';
// import MainPage from './components/mainPage'
import MainPage from './components/mainPage'
import { Routes, Route, Link } from "react-router-dom";
import MyTut from './components/Tutorial'
function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="tutorial" element={<MyTut />} />
      </Routes>
    
    </div>
  );
}

export default App;
