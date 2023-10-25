import { useState } from 'react';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Background, Container, Fields, Form, Title } from './styles';

import { FiUser, FiLock } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';

import { Link } from 'react-router-dom';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Form>
                <Title>
                    <h1>Bem-vindo de volta!</h1>
                    <span>Insira seus dados para entrar.</span>
                </Title>
                <Fields>
                    <Input
                        placeholder="E-mail"
                        type="text"
                        icon={FiUser}
                        onChange={(e) => setEmail(e.target.value)}
                    ></Input>
                    <Input
                        placeholder="Senha"
                        type="password"
                        icon={FiLock}
                        onChange={(e) => setPassword(e.target.value)}
                    ></Input>
                </Fields>
                <Button title="Entrar" onClick={handleSignIn}></Button>
                <p>
                    Não tem uma conta? Registre-se{' '}
                    <span>
                        <a>
                            <Link to="/register">aqui</Link>
                        </a>
                    </span>
                    .
                </p>
            </Form>
            <Background></Background>
        </Container>
    );
}
