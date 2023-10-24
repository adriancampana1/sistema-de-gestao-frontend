import { Fragment, useState } from 'react';
import { Container, Header } from './styles';

import { api } from '../../../services/api';

import { FcShop } from 'react-icons/fc';
import { ImBin, ImCheckboxChecked } from 'react-icons/im';
import { SlNotebook } from 'react-icons/sl';

import {
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalFooter,
    useDisclosure,
    Input,
    Textarea,
    Select,
} from '@chakra-ui/react';

export function CreateProducts({ updateProducts }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState();

    async function handleRegisterProduct() {
        if (!title || !price || !category) {
            return alert('Insira todas as informações.');
        }

        api.post('/products', {
            title,
            price,
            category_id: category,
        })
            .then(
                alert('Produto cadastrado com sucesso!'),
                onClose(),
                updateProducts()
            )
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível cadastrar o produto!');
                }
            });
    }

    return (
        <>
            <Button
                onClick={onOpen}
                backgroundColor="gray.700"
                padding="8"
                fontSize="xl"
                fontWeight="medium"
                color="floralwhite"
            >
                + Cadastrar novo produto
            </Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered size="4xl">
                <ModalOverlay />
                <Container>
                    <ModalContent padding="4">
                        <ModalHeader>
                            <Header>
                                <FcShop></FcShop>
                                <h2>Cadastrando novo produto</h2>
                                <p>
                                    Você está adicionando um novo produto no
                                    sistema.
                                </p>
                            </Header>
                        </ModalHeader>
                        <ModalCloseButton
                            size="lg"
                            margin="5"
                            color="#101010"
                            border="1px solid #c0c0c0"
                        />
                        <ModalBody>
                            <form>
                                <div className="title-value input row">
                                    <div className="size-8 col">
                                        <label htmlFor="product-title">
                                            Título do produto
                                        </label>
                                        <Input
                                            placeholder="Insira um título"
                                            type="text"
                                            id="produt-title"
                                            fontSize="xl"
                                            onChange={(e) =>
                                                setTitle(e.target.value)
                                            }
                                            color="#404040"
                                        ></Input>
                                    </div>
                                    <div className="size-4 col">
                                        <label htmlFor="product-value">
                                            Preço
                                        </label>
                                        <Input
                                            placeholder="R$ 0,00"
                                            type="text"
                                            id="business-title"
                                            fontSize="xl"
                                            onChange={(e) =>
                                                setPrice(e.target.value)
                                            }
                                            color="#404040"
                                        ></Input>
                                    </div>
                                </div>
                                <div className="input row">
                                    <div className="size-12 col">
                                        <label htmlFor="product-category">
                                            Categoria
                                        </label>
                                        <Select
                                            placeholder="Selecione uma opção: "
                                            fontSize="xl"
                                            height="auto"
                                            onChange={(e) => {
                                                setCategory(e.target.value);
                                            }}
                                            color="#808080"
                                        >
                                            <option value="Climatizador Industrial">
                                                Climatizador industrial
                                            </option>
                                            <option value="Portateis">
                                                Climatizador portátil
                                            </option>
                                        </Select>
                                    </div>
                                </div>
                                <div className="input row">
                                    <div className="size-12 col">
                                        <Button
                                            onClick={handleRegisterProduct}
                                            background="green.400"
                                            padding="7"
                                            marginBottom="5"
                                            textDecor="ButtonText"
                                            fontSize="xl"
                                        >
                                            Cadastrar orçamento
                                        </Button>
                                    </div>
                                </div>
                            </form>
                        </ModalBody>
                    </ModalContent>
                </Container>
            </Modal>
        </>
    );
}
