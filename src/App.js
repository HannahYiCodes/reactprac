import logo from './logo.svg';
import './App.css';
import Test from './components/Test/Test';
import AppRouter from './components/Routers/AppRouter';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
