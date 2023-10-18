import { createContext, useContext, useState, useEffect } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password });
            const { user, token } = response.data;

            localStorage.setItem('@sistema:user', JSON.stringify(user));
            localStorage.setItem('@sistema:token', token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível entrar.');
            }
        }
    }

    function signOut() {
        localStorage.removeItem('@sistema:user');
        localStorage.removeItem('@sistema:token');

        setData({});
    }

    async function updateProfile({ user }) {
        try {
            await api.put('/users', user);
            localStorage.setItem('@sistema:user', JSON.stringify(user));
            alert('Perfil atualizado com sucesso!');

            setData({ user, token: data.token });
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível atualizar o perfil.');
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@sistema:token');
        const user = localStorage.getItem('@sistema:user');

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user),
            });
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                updateProfile,
                user: data.user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
