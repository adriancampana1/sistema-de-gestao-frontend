import { Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';

export function AuthRoutes() {
    return (
        <Routes>
            <Route path="/" element={<SignIn></SignIn>}></Route>
            <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
    );
}
