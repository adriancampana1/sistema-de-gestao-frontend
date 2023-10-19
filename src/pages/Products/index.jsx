import { useState } from 'react';

import { Container, Sidebar, Header, Content, Filters } from './styles';

import { Menu } from '../../components/Menu';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ProductCard } from '../../components/ProductCard';
import { Dropdown } from '../../components/Dropdown';

import { ModalCreateBudgets } from '../../components/ModalCreateBudgets';
import { ModalDetails } from '../../components/ModalDetails';

import { FiSearch, FiExternalLink, FiSliders, FiFilter } from 'react-icons/fi';
import { FaBook, FaAddressCard } from 'react-icons/fa';

import { useEffect } from 'react';

export function Products() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Container>
            <ModalCreateBudgets></ModalCreateBudgets>
            {/* <ModalDetails></ModalDetails> */}
            <Sidebar>
                <Menu></Menu>
            </Sidebar>
            <Header>
                <div className="search">
                    <Input
                        placeholder="Pesquisar"
                        type="text"
                        icon={FiSearch}
                        onChange={(e) => setSearch(e.target.value)}
                    ></Input>
                </div>

                <div className="btn">
                    <Button
                        title="+ Cadastrar novo produto"
                        onClick={() => setModalOpen(true)}
                    ></Button>
                </div>
            </Header>
            <Content>
                <Filters>
                    <header>
                        <h2>Produtos cadastrados:</h2>
                        <p>25 resultados encontados</p>
                    </header>
                    <Dropdown></Dropdown>
                </Filters>
                <ProductCard></ProductCard>
            </Content>
        </Container>
    );
}
