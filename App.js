
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Containers/Register/Register';
import Home from './Containers/Home/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
