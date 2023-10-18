import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import {
    Background,
    Container,
    Fields,
    Form,
    Title,
    LinkToLogin,
} from './styles';

import { FiMail, FiUser, FiLock } from 'react-icons/fi';

export function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos!');
        }

        api.post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com sucesso!');
                navigate('/');
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível cadastrar o usuário!');
                }
            });
    }

    return (
        <Container>
            <Form>
                <Title>
                    <h1>Crie a sua conta!</h1>
                </Title>
                <Fields>
                    <Input
                        placeholder="Nome de usuário"
                        type="text"
                        icon={FiUser}
                        onChange={(e) => setName(e.target.value)}
                    ></Input>
                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiMail}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                    <Input
                        placeholder="Senha"
                        type="password"
                        icon={FiLock}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                </Fields>
                <Button title="Cadastrar" onClick={handleSignUp}></Button>
                <p>
                    Já tem uma conta? Clique{' '}
                    <LinkToLogin to="/">aqui</LinkToLogin>.
                </p>
            </Form>
            <Background></Background>
        </Container>
    );
}
