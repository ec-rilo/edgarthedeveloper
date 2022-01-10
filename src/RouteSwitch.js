import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
