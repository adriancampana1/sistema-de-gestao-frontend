import { api } from '../../services/api';

import { Container, Sidebar, Header, Content, Filters } from './styles';
import { useEffect, useState } from 'react';

import { Menu } from '../../components/Menu';
import { Input } from '../../components/Input';

import { ProductCard } from '../../components/Card/ProductCard';
import { CreateProducts } from '../../components/Modal/CreateProducts';

import { FiSearch } from 'react-icons/fi';

import { Select } from '@chakra-ui/react';

export function Products() {
    const [data, setData] = useState([]);

    async function fetchProducts() {
        const response = await api.get('/products');
        setData(response.data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

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
                        onChange={(e) => setSearch(e.target.value)}
                    ></Input>
                </div>

                <div className="btn">
                    <CreateProducts
                        updateProducts={fetchProducts}
                    ></CreateProducts>
                </div>
            </Header>
            <Content>
                <Filters>
                    <header>
                        <h2>Produtos cadastrados:</h2>
                        <p>{data.length} resultados encontados</p>
                    </header>
                    <Select
                        placeholder="Filtre por categoria"
                        width={'auto'}
                        fontSize="2xl"
                        color="#080808"
                        border="1px solid #c0c0c0"
                    >
                        <option value="">Industrial</option>
                        <option value="">Portáteis</option>
                    </Select>
                </Filters>
                <ProductCard updateProducts={fetchProducts}></ProductCard>
            </Content>
        </Container>
    );
}
