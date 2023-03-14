import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "../modules/dashboard";
import Team from "../modules/team";
import Contacts from "../modules/contacts";
import Invoices from "../modules/invoices";
import Form from "../modules/form";
import Calendar from "../modules/calendar";
import Faq from "../modules/faq";

interface RoutersProps {}

export const Routers: FC<RoutersProps> = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/my-dashboard' />} />
        <Route path='/my-dashboard' element={<Dashboard />} />
        <Route path='/my-dashboard/team' element={<Team />} />
        <Route path='/my-dashboard/contacts' element={<Contacts />} />
        <Route path='/my-dashboard/invoices' element={<Invoices />} />
        {/*<Route path='/my-dashboard/bar' element={<Bar />} />*/}
        <Route path='/my-dashboard/form' element={<Form />} />
        {/*<Route path='/my-dashboard/line' element={<Line />} />*/}
        {/*<Route path='/my-dashboard/pie' element={<Pie />} />*/}
        <Route path='/my-dashboard/faq' element={<Faq />} />
        {/*<Route path='/my-dashboard/geography' element={<Geography />} />*/}
        <Route path='/my-dashboard/calendar' element={<Calendar />} />
      </Routes>
    </>
  );
};