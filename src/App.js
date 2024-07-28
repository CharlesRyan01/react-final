import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import Nav from './Nav.js';
import Login from './Login.js';
import Register from './Register.js';
import EventList from './EventList.js';
import TicketGenerator from './Ticket.js';
import HomePage from './Home.js';

function App() {
  const [registered, setRegistered] = useState(false);
  const [generate, setgenerate] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Nav/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='home' element={<HomePage/>}/>
        <Route path='register' element={<Register />}/>
        <Route path='event' element={<EventList/>}/>
        <Route path='ticket' element={<TicketGenerator/>}/>
      </Route>
    )
  );

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
