import { useState } from 'react';
import { Container, Header, Content, CheckboxLabel } from './styles';

import {
    IoMdCreate,
    IoMdWalk,
    IoIosTrophy,
    IoIosJournal,
} from 'react-icons/io';
import { IoAlertOutline } from 'react-icons/io5';
import { FcKindle } from 'react-icons/fc';
import { ImBin, ImCheckmark, ImPlus } from 'react-icons/im';
import { SlNotebook } from 'react-icons/sl';

import { api } from '../../../services/api';

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
    Editable,
    EditablePreview,
    EditableTextarea,
} from '@chakra-ui/react';

import { CustomEditableInput } from '../../CustomEditableInput';
import { CustomAlert } from '../../CustomAlert';

export function ModalDetails({ productData }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [isDeletConfirmed, setIsDeletConfirmed] = useState(false);

    const [addProducts, setAddProducts] = useState(false);

    const [businessTitle, setBusinessTitle] = useState(productData.title);
    const [businessPrice, setBusinessPrice] = useState(productData.price);
    const [businessStatus, setBusinessStatus] = useState(productData.status);
    const [showBusinessDescription, setShowBusinessDescription] = useState();
    const [businessDescription, setBusinessDescription] = useState('');
    const [businessID, setBusinessID] = useState('');

    const [addNotes, setAddNotes] = useState(false);
    const [notes, setNotes] = useState(productData.notes);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');

    function handleShowAddProducts() {
        addProducts ? setAddProducts(false) : setAddProducts(true);
    }

    function handleShowAddNotes() {
        addNotes ? setAddNotes(false) : setAddNotes(true);
    }

    async function handleAddNotes() {
        if (!noteTitle || !noteDescription) {
            return alert('Preencha todos os campos.');
        }

        const newNote = {
            title: noteTitle,
            description: noteDescription,
        };

        setNotes([...notes, newNote]);

        api.post(`/notes/${productData.id}`, {
            title: noteTitle,
            description: noteDescription,
        })
            .then(() => {
                setAddNotes(false);
                alert('Nota cadastrada com sucesso!');
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert('Não foi possível cadastrar a nota!');
                }
            });
    }

    async function handleRemoveNotes({ noteID, index }) {
        try {
            await api.delete(`/notes/${noteID}`);
            const updatedNotes = [...notes];
            updatedNotes.splice(index, 1);
            setNotes(updatedNotes);
            alert('Nota removida com sucesso!');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível remover a nota!');
            }
        }
    }

    function handleShowChangeDescription() {
        showBusinessDescription
            ? setShowBusinessDescription(false)
            : setShowBusinessDescription(true);
    }

    async function handleChangeDescription() {
        try {
            api.put(`/businesses/${productData.id}`, {
                title: businessTitle,
                description: businessDescription,
                negotiated_value: businessPrice,
                status: businessStatus,
            });

            alert('Descrição alterada com sucesso!');
            setShowBusinessDescription(false);
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert('Não foi possível editar o produto.');
            }
        }
    }

    async function handleDeletConfirm(confirmation) {
        setIsDeletConfirmed(confirmation);
        if (isDeletConfirmed) {
            await api.delete(`/businesses/${productData.id}`);
            alert('Orçamento removido com sucesso!');
            onClose();
        }
    }

    return (
        <>
            <Button onClick={onOpen}>Mais detalhes</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered size="6xl">
                <ModalOverlay />
                <Container>
                    <ModalContent padding="5" marginTop="5">
                        <ModalHeader>
                            <Header>
                                <div className="business-data">
                                    <div className="business-title">
                                        <h2>
                                            <CustomEditableInput
                                                title={productData.content}
                                            ></CustomEditableInput>
                                        </h2>
                                    </div>
                                </div>
                            </Header>
                        </ModalHeader>
                        <ModalCloseButton size="lg" margin="10" />
                        <ModalBody>
                            {productData && (
                                <>
                                    <Content>
                                        <div className="sidebar-col">
                                            <div className="value-products">
                                                <p className="subtitle">
                                                    Valor do negócio
                                                </p>
                                                <div>
                                                    <h2>{productData.price}</h2>
                                                    <span>
                                                        Produtos/Serviços
                                                    </span>
                                                    <p className="cost">
                                                        R$5.436,93
                                                    </p>
                                                    <span>
                                                        Lucro na operação:
                                                    </span>
                                                    <p className="profit">
                                                        R$3.927,32
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="notes">
                                            <span>
                                                <p>
                                                    <IoIosJournal></IoIosJournal>{' '}
                                                    Adicionar nota
                                                </p>
                                                <button
                                                    onClick={handleShowAddNotes}
                                                >
                                                    + Adicionar nota
                                                </button>
                                            </span>
                                            {addNotes && (
                                                <div className="add-notes">
                                                    <input
                                                        type="text"
                                                        placeholder="Título da nota"
                                                        onChange={(e) =>
                                                            setNoteTitle(
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                    <textarea
                                                        placeholder="Descrição da nota"
                                                        onChange={(e) =>
                                                            setNoteDescription(
                                                                e.target.value
                                                            )
                                                        }
                                                    ></textarea>
                                                    <div className="btn-add-remove">
                                                        <button
                                                            className="btn-remove"
                                                            onClick={
                                                                handleShowAddNotes
                                                            }
                                                        >
                                                            Cancelar
                                                        </button>
                                                        <button
                                                            className="btn-add"
                                                            onClick={
                                                                handleAddNotes
                                                            }
                                                        >
                                                            Adicionar nota
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                            {notes.length > 0 ? (
                                                <>
                                                    {notes.map(
                                                        (note, index) => {
                                                            return (
                                                                <div
                                                                    className="note-item"
                                                                    key={index}
                                                                >
                                                                    <header>
                                                                        <div className="content">
                                                                            <SlNotebook></SlNotebook>
                                                                            <div>
                                                                                <h4>
                                                                                    {
                                                                                        note.title
                                                                                    }
                                                                                </h4>
                                                                                <p>
                                                                                    Criada
                                                                                    em:
                                                                                    {
                                                                                        '  '
                                                                                    }
                                                                                    {
                                                                                        productData.created_at
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                        <ImBin
                                                                            className="remove-note"
                                                                            onClick={() =>
                                                                                handleRemoveNotes(
                                                                                    {
                                                                                        noteID: note.id,
                                                                                        index,
                                                                                    }
                                                                                )
                                                                            }
                                                                        ></ImBin>
                                                                    </header>
                                                                    <main>
                                                                        <p>
                                                                            {
                                                                                note.description
                                                                            }
                                                                        </p>
                                                                        <span>
                                                                            Criada
                                                                            por:
                                                                            Adrian
                                                                            Campana
                                                                        </span>
                                                                    </main>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </>
                                            ) : (
                                                <p className="note">
                                                    Alguma anotação importante?
                                                    Salve aqui!
                                                </p>
                                            )}
                                        </div>
                                        <div className="description">
                                            <div>
                                                <h2>Descrição detalhada:</h2>
                                            </div>
                                            {productData.description ? (
                                                <p
                                                    className={`${
                                                        showBusinessDescription
                                                            ? 'hide'
                                                            : ''
                                                    }`}
                                                >
                                                    <Editable
                                                        defaultValue={
                                                            productData.description
                                                        }
                                                    >
                                                        <EditablePreview
                                                            background="white"
                                                            width="full"
                                                        />
                                                        <EditableTextarea />
                                                    </Editable>
                                                </p>
                                            ) : (
                                                <span
                                                    className={`${
                                                        showBusinessDescription
                                                            ? 'hide'
                                                            : ''
                                                    }`}
                                                >
                                                    <FcKindle></FcKindle>
                                                    <p>
                                                        Nenhuma descrição
                                                        inserida...
                                                    </p>
                                                </span>
                                            )}
                                            {showBusinessDescription && (
                                                <>
                                                    <textarea
                                                        onChange={(e) =>
                                                            setBusinessDescription(
                                                                e.target.value
                                                            )
                                                        }
                                                    >
                                                        {
                                                            productData.description
                                                        }
                                                    </textarea>
                                                    <div className="btn-add-remove">
                                                        <button
                                                            className="btn-remove"
                                                            onClick={
                                                                handleShowChangeDescription
                                                            }
                                                        >
                                                            Cancelar
                                                        </button>
                                                        <button
                                                            className="btn-add"
                                                            onClick={
                                                                handleChangeDescription
                                                            }
                                                        >
                                                            Adicionar descrição
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                        <div className="profit-calculation">
                                            <h2>Calculadora de lucro</h2>
                                            {addProducts ? (
                                                <>
                                                    <div className="add-product">
                                                        <div className="select-product size-2 col">
                                                            <label htmlFor="business-description">
                                                                Produto/Serviço
                                                            </label>
                                                            <select
                                                                name="business-description"
                                                                id="business-description"
                                                            >
                                                                <option
                                                                    value="default"
                                                                    selected
                                                                >
                                                                    Selecione
                                                                </option>
                                                                <option value="climatizador">
                                                                    Climatizador
                                                                    de Teto
                                                                </option>
                                                                <option value="servico">
                                                                    Instalação
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div className="price size-2 col">
                                                            <label htmlFor="product-value">
                                                                Valor unitário:
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="product-value"
                                                                placeholder="R$ 0,00"
                                                            />
                                                        </div>
                                                        <div className="quant-products size-2 col">
                                                            <label htmlFor="quantity-products">
                                                                Quant.
                                                            </label>
                                                            <input
                                                                type="number"
                                                                id="quantity-products"
                                                                placeholder="0"
                                                            />
                                                        </div>
                                                        <div className="total-value size-2 col">
                                                            <label htmlFor="total">
                                                                Total
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="total"
                                                                placeholder="R$ 0,00"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="btn-product size-2">
                                                        <span className="add">
                                                            <ImCheckmark></ImCheckmark>
                                                            <p>Adicionar</p>
                                                        </span>
                                                        <span
                                                            className="remove"
                                                            onClick={
                                                                handleShowAddProducts
                                                            }
                                                        >
                                                            <ImBin></ImBin>
                                                            <p>Remover</p>
                                                        </span>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <p
                                                        className="show-add-products"
                                                        onClick={
                                                            handleShowAddProducts
                                                        }
                                                    >
                                                        <ImPlus></ImPlus>{' '}
                                                        Adicionar
                                                        produto/serviço
                                                    </p>
                                                </>
                                            )}
                                            <div className="product-cardlist">
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th>
                                                                Produto/serviço
                                                            </th>
                                                            <th>Preço unit.</th>
                                                            <th>Quant.</th>
                                                            <th>Total</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Climatizador
                                                                portátil
                                                            </td>
                                                            <td>R$7.345,32</td>
                                                            <td>1</td>
                                                            <td>R$7.345,32</td>
                                                            <td className="btnRemove">
                                                                <ImBin></ImBin>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Climatizador
                                                                portátil
                                                            </td>
                                                            <td>R$7.345,32</td>
                                                            <td>1</td>
                                                            <td>R$7.345,32</td>
                                                            <td className="btnRemove">
                                                                <ImBin></ImBin>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="additional-costs"></div>
                                        </div>
                                    </Content>
                                </>
                            )}
                        </ModalBody>
                        <ModalFooter justifyContent="center">
                            <CustomAlert
                                className="delete-card"
                                deletConfirm={handleDeletConfirm}
                            ></CustomAlert>
                        </ModalFooter>
                    </ModalContent>
                </Container>
            </Modal>
        </>
    );
}
