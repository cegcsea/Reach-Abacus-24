import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
    Home, Events, SingleEvent,
    Workshop, Login, SignUpDetails,
    About, ForgotPassWord, Profile,
    SingleWorkshop, ForgotPassWordDetails,
    WorkshopPayment,
} from '../pages';

import ProtectedRoute from './ProtectedRoutes';

function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/workshops' element={<Workshop />} />
            <Route path='/workshops/:id' element={<SingleWorkshop />} />
            <Route path='/workshops/:id/payment' element={<WorkshopPayment />} />
            <Route path='/events' element={<Events />} />
            <Route path='/events/:id' element={<SingleEvent />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register/:email/:token' element={<SignUpDetails />} />
            <Route path='/reset-password' element={<ForgotPassWord />} />
            <Route path='/reset-password/:id/:token' element={<ForgotPassWordDetails />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/profile' element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default AllRoutes;