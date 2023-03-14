import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "../modules/scenes/dashboard";
import Team from "../modules/scenes/team";
// import Invoices from "../modules/scenes/invoices";
// import Contacts from "../modules/scenes/contacts";
// import Bar from "../modules/scenes/bar";
// import Form from "../modules/scenes/form";
// import Line from "../modules/scenes/line";
// import Pie from "../modules/scenes/pie";
// import FAQ from "../modules/scenes/faq";
// import Geography from "../modules/scenes/geography";
// import Calendar from "../modules/scenes/calendar";

interface RoutersProps {}

export const Routers: FC<RoutersProps> = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/my-dashboard' />} />
        <Route path='/my-dashboard' element={<Dashboard />} />
        <Route path='/my-dashboard/team' element={<Team />} />
        {/*<Route path='/my-dashboard/invoices' element={<Invoices />} />*/}
        {/*<Route path='/my-dashboard/contacts' element={<Contacts />} />*/}
        {/*<Route path='/my-dashboard/bar' element={<Bar />} />*/}
        {/*<Route path='/my-dashboard/form' element={<Form />} />*/}
        {/*<Route path='/my-dashboard/line' element={<Line />} />*/}
        {/*<Route path='/my-dashboard/pie' element={<Pie />} />*/}
        {/*<Route path='/my-dashboard/faq' element={<FAQ />} />*/}
        {/*<Route path='/my-dashboard/geography' element={<Geography />} />*/}
        {/*<Route path='/my-dashboard/calendar' element={<Calendar />} />*/}
      </Routes>
    </>
  );
};