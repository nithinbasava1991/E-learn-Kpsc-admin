import { lazy } from 'react';
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import Home from 'landing/Home';
import Login from 'views/pages/authentication3/Login3';
import Register from 'views/pages/authentication3/Register3';
import ForgotPassword from 'views/pages/authentication3/ForgotPassword';
import VerifyOtp from 'views/pages/authentication3/VerifyOtp';
import ResetPassword from 'views/pages/authentication3/ResetPassword';
import ProtectedRoute from './ProtectedRoute';
import HomePage from 'views/utilitiess/LandingPageUtilities/HomePage';
import KpscHomepage from 'views/utilitiess/LandingPageUtilities/exam/KpscHomepage';
import ClassTwo from 'views/utilitiess/LandingPageUtilities/exam/ClassTwo';
import ClassOne from 'views/utilitiess/LandingPageUtilities/exam/ClassOne';
import ClassSecondPU from 'views/utilitiess/LandingPageUtilities/exam/ClassSecondPU';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing

const UtilsSettings = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/Settings')));
const UtilsPayments = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/Payments')));
const ViewAllPromos = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/ViewAllPromos')));
const ViewAllNews = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/ViewAllNews')));
const ViewAllSuccessStories = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/ViewAllSuccessStories')));
const ViewAllSubjects = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/Subjects')));
const ViewAllCategories = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/Categories')));
const ViewSubCategories = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/SubCategories')));
const ViewAllSubjectDetails = Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/SubjectDetails')));
const Course1 = Loadable(lazy(() => import('landing/courses/Class1')));
const McqTest = Loadable(lazy(() => import('views/utilitiess/testUtilities/McqTest')));
const StartTest = Loadable(lazy(() => import('views/utilitiess/testUtilities/StartTest')));
const PracticeTest = Loadable(lazy(() => import('views/utilitiess/testUtilities/practice/PracticeTest')));
const StartPracticeTest = Loadable(lazy(() => import('views/utilitiess/testUtilities/practice/StartPracticeTest')));
const UtilsQandA = Loadable(lazy(() => import('views/utilitiess/testUtilities/McqQandA')));
const UtilsModules=Loadable(lazy(() => import('views/utilitiess/dashboardUtilities/Modules')));

const MainRoutes = {
  path: '/',
  children: [
    { path: '/', element: <HomePage/> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/forgot-password', element: <ForgotPassword /> },
    { path: '/verify-otp', element: <VerifyOtp /> },
    { path: '/reset-password', element: <ResetPassword /> },
    { path: '/class1', element: <Course1 /> },
    { path: 'class-one', element: <ClassOne /> }, // Child route for ClassOne
    { path: 'class-two', element: <ClassTwo /> }, // Child route for ClassTwo
    { path: 'class-second', element: <ClassSecondPU/> }, // Child route for ClassSecondPU
    {path: '/kpsc-home', // Parent route for KPSC
    element: <KpscHomepage/>, // Main component for KPSC page
    }, 
    {
      path: '/',

      element: <ProtectedRoute element={<MainLayout />} />,

      children: [
        {
          path: 'dashboard',
          children: [
            { path: '', element: <DashboardDefault /> },
            { path: 'payments', element: <UtilsPayments /> },
            { path: 'settings', element: <UtilsSettings /> },
            { path: 'promo', element: <ViewAllPromos /> },
            { path: 'news', element: <ViewAllNews /> },
            { path: 'success', element: <ViewAllSuccessStories /> },
            { path: 'subjects', element: <ViewAllSubjects /> },
            { path: 'categories', element: <ViewAllCategories /> },
            { path: 'modules', element: <UtilsModules /> },
            { path: 'categories/subCategories', element: <ViewSubCategories /> },
            { path: 'categories/subCategories/subjects/details', element: <ViewAllSubjectDetails /> },
            { path: 'test', element: <McqTest /> },
            { path: 'test/start', element: <StartTest /> },
            { path: 'practice', element: <PracticeTest /> },
            { path: 'practice/start', element: <StartPracticeTest /> },
            { path: 'questions', element: <UtilsQandA /> }
          ]
        }
      ]
    }
  ]
};

export default MainRoutes;
