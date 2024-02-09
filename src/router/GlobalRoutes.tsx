import { Route, Routes } from 'react-router-dom';




import { ProtectedRoute } from './protected-route';


import NotFound from '../pages/SpecialPages/NotFound';
import { MainPage } from '@pages/index';
import {LayoutApp} from '../compinents/Layout/index';


const GlobalRoutes = () => {
  // const { token } = useAppSelector((state) => state.authorization);

  return (
    <Routes>
     
      <Route path="/" element={<LayoutApp />}>
        <Route index element={<MainPage />} />
     
        <Route path="*" element={<NotFound />} />
    
 
      </Route>
    </Routes>
  );
};

export default GlobalRoutes;
