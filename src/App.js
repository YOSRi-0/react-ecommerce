import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

function App(props) {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
