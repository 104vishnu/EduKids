
import "./App.scss";
import React, { useState } from "react";
import Layout from "./components/layout/Layout.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/login/Login.jsx";

import LearnNumbers from "./pages/learnnumbers/LearnNumbers.jsx";
import Numbers from "./pages/numbers/Numbers.jsx";
import Tamil from "./pages/languages/Tamil.jsx";
import Hindi from "./pages/languages/Hindi.jsx";
import Telugu from "./pages/languages/Telugu.jsx";
import Malayalam from "./pages/languages/Malayalam.jsx";
import { ProtectedRoutes } from "./ProtectedRoutes";
import Courses from "./pages/courses/Courses.jsx";
import Activity from "./pages/activity/Activity.jsx";
import CountNumbers from "./pages/count-numbers/CountNumbers.jsx";
import AudioToNumbers from "./pages/audiotonumbers/AudioToNumbers.jsx";
import Addition from "./pages/addition/Addition.jsx";
import Subtraction from "./pages/subtraction/Subtraction.jsx";
function App() {

  const [isLoggedIn ,setIsLoggedIn] = useState(false);

  useState(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: isLoggedIn ? <Home /> : <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/home",
          element:      (
          
          <Home />
      
      )
        },
        {
          path: "/courses",
          element: (
          
              <Courses />
            
          ),
        },
        
        {
          path: "/english",
          element: (
            
              <LearnNumbers />
             
          ),
        },
        {
          path: "/activity",
          element: (
          
               <Activity />
           
              
          ),
        },


        {
          path: "/numbers",
          element: (
        
              <Numbers />
           
          ),
        },
        {
          path: "/tamil",
          element: (
            
              <Tamil />
          
          ),
        },
        {
          path: "/hindi",
          element: (
            
              <Hindi />
          
          ),
        },
        {
          path: "/telugu",
          element: (
            
              <Telugu />
            
          ),
        },
        {
          path: "/malayalam",
          element: (
             <ProtectedRoutes>
              <Malayalam />
             </ProtectedRoutes>
          ),
        },

        {
          path: "/count-numbers",
          element: (
             
              <CountNumbers />
             
          ),
        },

        {
          path: "/audio-to-number",
          element: (
          
              <AudioToNumbers />
            
          ),
        },

        {
          path: "/addition",
          element: (
          
               <Addition />
          
             
           
          ),
        },

        {
          path: "/subtraction",
          element: (

         
              <Subtraction />

             
              
           
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
