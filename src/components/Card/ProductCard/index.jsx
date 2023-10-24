import { Container } from './styles';

import { useState } from 'react';
import { useEffect } from 'react';

import { api } from '../../../services/api';
import { CustomAlert } from '../../CustomAlert';

import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    SimpleGrid,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
} from '@chakra-ui/react';

export const ProductCard = ({ updateProducts }) => {
    const [data, setData] = useState([]);
    const [productID, setProductID] = useState('');
    const [isDeletConfirmed, setIsDeletConfirmed] = useState(false);

    async function handleDeletConfirm(confirmation) {
        setIsDeletConfirmed(confirmation);
        if (isDeletConfirmed) {
            await api.delete(`/products/${productID}`);
            alert('Produto removido com sucesso!');
            setData(data.filter((product) => product.id !== productID));
        }
    }

    async function fetchProducts() {
        const response = await api.get('/products');

        setData(response.data);
    }

    useEffect(() => {
        fetchProducts();
    }, [updateProducts]);

    return (
        <Container>
            {data.length > 0 ? (
                <>
                    <SimpleGrid spacing={4}>
                        {data.map((val, key) => {
                            return (
                                <Card
                                    key={key}
                                    cursor="pointer"
                                    shadow="md"
                                    border={`1px solid #e0e0e0}`}
                                >
                                    <CardHeader
                                        display="flex"
                                        justifyContent="space-between"
                                        margin="2"
                                        onClick={() => setProductID(val.id)}
                                    >
                                        <Heading size="16">{val.title}</Heading>
                                        <CustomAlert
                                            className="delete-card"
                                            deletConfirm={handleDeletConfirm}
                                        ></CustomAlert>
                                    </CardHeader>
                                    <CardBody display="flex" gap="10">
                                        <TableContainer>
                                            <Table variant="simple">
                                                <Thead>
                                                    <Tr>
                                                        <Th fontSize="md">
                                                            Custo
                                                        </Th>
                                                        <Th fontSize="md">
                                                            Código
                                                        </Th>
                                                        <Th fontSize="md">
                                                            Categoria
                                                        </Th>
                                                    </Tr>
                                                </Thead>
                                                <Tbody>
                                                    <Tr>
                                                        <Td>{val.price}</Td>
                                                        <Td>{val.id}</Td>
                                                        <Td>
                                                            {val.category_id}
                                                        </Td>
                                                    </Tr>
                                                </Tbody>
                                            </Table>
                                        </TableContainer>
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </SimpleGrid>
                </>
            ) : (
                <>
                    <h3>Você ainda não adicionou nenhum produto!</h3>
                </>
            )}
        </Container>
    );
};
