import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Login from 'views/pages/authentication3/Login3';
import Register from 'views/pages/authentication3/Register3';
import ProtectedRoute from './ProtectedRoute';

// utilities routing
const UtilsPayments = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/Payments')));
const UtilsUsers = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/Users')));
const UtilsSettings = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/Settings')));
const UtilsJobPost = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/masters/JobPost')));
const UtilsCategory = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/masters/Category')));
const UtilsSubCategory = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/masters/SubCategory')));
const UtilsRole = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/masters/Role')));
const UtilsSubject = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/courses/Subject')));
const UtilsModules = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/courses/Module')));
const UtilsTopics = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/courses/Topic')));
const UtilsOccupation = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/masters/Occupation')));
const UtilsQualification = Loadable(lazy(() => import('views/utilitiess/kpscUtilities/masters/Qualification')));
const Kpsc = Loadable(lazy(() => import('views/kpsc')));

const KpscRoutes = {
  path: '/',
  children: [
    { path: '/', element: <Login /> },
    { path: '/register', element: <Register /> },
    {
      path: '/',
      element: <ProtectedRoute element={<MainLayout />} />,
      children: [
        {
          path: 'kpsc',
          children: [
            { path: '', element: <Kpsc/>},
            { path: 'payments', element: <UtilsPayments/>},
            { path: 'users', element: <UtilsUsers />},
            { path: 'settings', element: <UtilsSettings/>},
            { path: 'jobPost', element: <UtilsJobPost />},
            { path: 'category', element: <UtilsCategory/>},
            { path: 'subCategory', element: <UtilsSubCategory/>},
            { path: 'role', element: <UtilsRole/>},
            { path: 'qualification', element: <UtilsQualification/>},
            { path: 'occupation', element: <UtilsOccupation/>},
            { path: 'subject', element: <UtilsSubject/>},
            { path: 'modules', element: <UtilsModules/>},
            { path: 'topics', element: <UtilsTopics /> }
          ]
        }
      ]
    }
  ]
};

export default KpscRoutes;
