import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { Profile } from '../pages/Profile';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/products" element={<Products></Products>}></Route>
            <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
    );
}
