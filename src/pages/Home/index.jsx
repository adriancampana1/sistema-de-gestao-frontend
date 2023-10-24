import { useState } from 'react';

import { Container, Sidebar, Header, Content } from './styles';

import { Menu } from '../../components/Menu';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Board } from '../../components/Board';

import { ModalCreateBudgets } from '../../components/Modal/CreateBudgets';

import { FiSearch, FiExternalLink, FiSliders } from 'react-icons/fi';

import BoardContext from '../../components/Board/context';

export function Home() {
    const [search, setSearch] = useState('');

    return (
        <Container>
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
                    <ModalCreateBudgets></ModalCreateBudgets>
                </div>
            </Header>
            <Content>
                <Board></Board>
            </Content>
        </Container>
    );
}
