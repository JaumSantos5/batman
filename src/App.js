import './App.css'; 
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/contato/contato';
import Fotos from './pages/curiosidades/curiosidades';
import Detalhes from './pages/detalhes/detalhes';
import Comentarios from './pages/comentarios/comentarios';

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contato />}/>
        <Route path='/curiosidades' element={<Fotos />}/>
        <Route path='/detalhes/id' element={<Detalhes />}/>
        <Route path='/comentarios' element={<Comentarios />}/>
      </Routes >
    </BrowserRouter>
  );
}

export default App;