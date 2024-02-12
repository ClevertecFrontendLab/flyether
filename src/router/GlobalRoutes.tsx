import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../pages/SpecialPages/NotFound';
import { MainPage } from '@pages/index';
import { LayoutApp } from '../components/Layout/index';


export const GlobalRoutes = () => {

  return (
    <Routes>
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

