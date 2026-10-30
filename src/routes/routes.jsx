

import {createBrowserRouter} from 'react-router-dom';


import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import DoctorForm from '../pages/doctors/DoctorForm';
import DoctorTable from '../pages/doctors/DoctorTable';
import DoctorDashboard from '../pages/doctors/DoctorDashboard';
import AdminDashboard from '../pages/admin/AdminDashboard';
import Register from '../pages/Register';
import DoctorRegister from '../pages/doctors/DoctorRegister';
import UserRegister from '../pages/users/UserRegister';
import Doctors from '../pages/doctors/Doctors';


const routes=createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
         path:'/doctors/add',
          element:<DoctorForm />
      },
      {
        path:'/doctors-admin',
        element:<DoctorTable />
      },
      {
        path:"doctor-dashboard",
        element:<DoctorDashboard />
      },
      {
        path:"/admin-dashboard",
        element:<AdminDashboard />
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"/doctor-register",
        element:<DoctorRegister/>
      },
      {
        path:"/patient-register",
        element:<UserRegister/>
      },
      {
        path:'/doctors',
        element:<Doctors/>
      }

    ]
  }
])

export default routes;