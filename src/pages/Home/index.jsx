import { useState } from 'react';

import { Container, Sidebar, Header, Content } from './styles';

import { Menu } from '../../components/Menu';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Board } from '../../components/Board';

import { Modal } from '../../components/Modal';
import { ModalCreateBudgets } from '../../components/ModalCreateBudgets';

import { FiSearch, FiExternalLink, FiSliders } from 'react-icons/fi';

import BoardContext from '../../components/Board/context';

export function Home() {
    const [modalOpen, setModalOpen] = useState(false);
    const [search, setSearch] = useState('');

    return (
        <Container>
            <Modal
                isOpen={modalOpen}
                setIsOpen={setModalOpen}
                backdropClose={true}
            >
                <ModalCreateBudgets></ModalCreateBudgets>
            </Modal>
            <Sidebar>
                <Menu></Menu>
            </Sidebar>
            <Header>
                <div className="search">
                    <Input
                        placeholder="Pesquisar"
                        type="text"
                        icon={FiSearch}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    ></Input>
                </div>

                <div className="btn">
                    <Button
                        title="+ Criar novo orçamento"
                        onClick={() => setModalOpen(true)}
                    ></Button>
                </div>
            </Header>
            <Content>
                <Board></Board>
            </Content>
        </Container>
    );
}
