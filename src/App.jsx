import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Planets from './pages/Planets/Planets';
import Galaxy from './pages/Galaxy/Galaxy';
import Missions from './pages/Missions/Missions';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="space-app">
        <div className="space-app__bg" aria-hidden="true" />
        <header className="topbar">
          <div className="brand">SPACE.ONE</div>
          <nav>
            <NavLink to="/" end>
             Солнечная система
            </NavLink>
            <NavLink to="/planet-lab">Планеты</NavLink>
            <NavLink to="/galaxies">Галактики</NavLink>
            <NavLink to="/missions">Миссии</NavLink>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planet-lab" element={<Planets />} />
          <Route path="/galaxies" element={<Galaxy />} />
          <Route path="/missions" element={<Missions />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
