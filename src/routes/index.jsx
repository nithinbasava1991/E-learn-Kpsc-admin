import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import EcomRoutes from './EcomRoutes';
import KpscRoutes from './KpscRoutes';
import UpskillsRoutes from './UpSkillsRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([MainRoutes, KpscRoutes, UpskillsRoutes, EcomRoutes], {
  // basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
