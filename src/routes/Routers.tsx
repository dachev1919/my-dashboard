import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from "../modules/scenes/dashboard";

interface RoutersProps {}

export const Routers: FC<RoutersProps> = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/my-dashboard' />} />
        <Route path='/my-dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
};