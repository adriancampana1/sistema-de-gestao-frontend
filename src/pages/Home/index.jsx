import React, { useState } from 'react';
import { Container, Sidebar, Header, Content } from './styles';
import { Menu } from '../../components/Menu';
import { Input } from '../../components/Input';
import { Board } from '../../components/Board';
import { BoardContext } from '../../components/Board/context';
import { ModalCreateBudgets } from '../../components/Modal/CreateBudgets';
import { FiSearch } from 'react-icons/fi';

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
                    <BoardContext.Provider
                        value={{
                            addProductToList: () => {
                                console.log('ta na home');
                            },
                        }}
                    >
                        <ModalCreateBudgets></ModalCreateBudgets>
                    </BoardContext.Provider>
                </div>
            </Header>
            <Content>
                <Board></Board>
            </Content>
        </Container>
    );
}
