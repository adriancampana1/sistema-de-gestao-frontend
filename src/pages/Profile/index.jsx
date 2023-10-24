import { useState } from 'react';

import { Container, Sidebar, Content, Form } from './styles';

import { useAuth } from '../../hooks/auth';

import { Menu } from '../../components/Menu';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { ModalDetails } from '../../components/Modal/ModalDetails';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [modalOpen, setModalOpen] = useState(false);
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setPasswordNew] = useState();

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        };

        await updateProfile({ user });
    }

    return (
        <Container>
            {/* <ModalCreateBudgets></ModalCreateBudgets> */}
            <ModalDetails></ModalDetails>
            <Sidebar>
                <Menu></Menu>
            </Sidebar>

            <Content>
                <section>
                    <h2>Atualizar dados do perfil</h2>
                    <Form>
                        <div className="row-2">
                            <Input
                                placeholder="Nome"
                                icon={FiUser}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></Input>
                            <Input
                                placeholder="Email"
                                icon={FiMail}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></Input>
                        </div>
                        <div className="row-2">
                            <Input
                                placeholder="Senha antiga"
                                type="password"
                                icon={FiLock}
                                onChange={(e) => setPasswordOld(e.target.value)}
                            ></Input>
                            <Input
                                placeholder="Nova senha"
                                type="password"
                                icon={FiLock}
                                onChange={(e) => setPasswordNew(e.target.value)}
                            ></Input>
                        </div>
                    </Form>
                    <Button
                        title="Salvar alterações"
                        onClick={handleUpdate}
                    ></Button>
                </section>
            </Content>
        </Container>
    );
}
