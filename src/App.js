import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomMenu from './componentes/CustomMenu';
import Footer from './componentes/Footer';
import MyCarousel from './componentes/MyCarousel';
import ElectronicsPage from './componentes/ElectronicsPage';
import LaptopsPage from './componentes/LaptopsPage';
import UbicaionesPage from './componentes/UbicaionesPage';
import ContactosPage from './componentes/ContactosPage';
import SobreNosotrosPage from './componentes/SobreNosotrosPage';
import SoporteTecnicoPage from './componentes/SoporteTecnicoPage';
import ComponentesPage from './componentes/ComponentesPage';
import PerifericosPage from './componentes/PerifericosPage';
import ComputadorasPage from './componentes/ComputadorasPage';

function App() {
  return (
    <Router>
      <div className="App">
        <CustomMenu />
        <Routes>
          <Route path="/electronics" element={<ElectronicsPage />} />
          <Route path="/Laptops" element={<LaptopsPage />} />
          <Route path="/ubicaciones" element={<UbicaionesPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
          <Route path="/sobrenosotros" element={<SobreNosotrosPage />} />
          <Route path="/soporte" element={<SoporteTecnicoPage />} />
          <Route path="/comp" element={<ComponentesPage />} />
          <Route path="/perifericos" element={<PerifericosPage />} />
          <Route path="/compu" element={<ComputadorasPage />} />
        </Routes>
        <MyCarousel />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
