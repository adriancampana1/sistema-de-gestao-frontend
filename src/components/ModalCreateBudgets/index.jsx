import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Header } from './styles';

import { api } from '../../services/api';

import { Button } from '../Button';
import { InputTW } from '../InputTW';

import { FcBriefcase } from 'react-icons/fc';
import { ImBin, ImCheckboxChecked } from 'react-icons/im';
import { SlNotebook } from 'react-icons/sl';

export function ModalCreateBudgets() {
    const [addProducts, setAddProducts] = useState(false);
    const [addNotes, setAddNotes] = useState(false);

    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('contact');
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({});

    function handleShowAddProducts() {
        addProducts ? setAddProducts(false) : setAddProducts(true);
    }

    function handleShowAddNotes() {
        addNotes ? setAddNotes(false) : setAddNotes(true);
    }

    function handleAddNote() {
        setNotes((prevState) => [...prevState, newNote]);
        alert('Nota adicionada com sucesso!');
        setAddNotes(false);
    }

    function handleRemoveNote(deleted) {
        setNotes((prevState) => prevState.filter((note) => note !== deleted));
    }

    async function handleRegisterBusiness() {
        if (!title) {
            return alert('Digite o título do novo negócio.');
        }

        await api.post('/businesses', {
            title,
            description,
            negotiated_value: value,
            status,
            notes,
        });

        const newProduct = {
            title,
            description,
            negotiated_value: value,
            status,
            notes,
        };

        alert('Negócio criado com sucesso!');
        addProductsToList(newProduct);
    }

    return (
        <Container>
            <Header>
                <FcBriefcase></FcBriefcase>
                <h2>Cadastrando novo orçamento</h2>
                <p>Você está adicionando um novo orçamento ao sistema</p>
            </Header>
            <form>
                <div className="title-value input row">
                    <div className="size-8 col">
                        <label htmlFor="business-title">
                            Título do orçamento
                        </label>
                        <input
                            type="text"
                            id="business-title"
                            placeholder="Insira um título"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="size-4 col">
                        <label htmlFor="business-value">Valor estimado</label>
                        <input
                            type="text"
                            id="business-value"
                            placeholder="R$ 0,00"
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                </div>
                <div className="input row">
                    <div className="size-12 col">
                        <label htmlFor="business-description">Descrição</label>
                        <textarea
                            placeholder="Insira mais detalhes da sua negociação:"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="input row">
                    <div className="size-12 col">
                        <label htmlFor="business-description">
                            Status da operação
                        </label>
                        <select
                            value={status}
                            onChange={(e) => {
                                setStatus(e.target.value);
                            }}
                        >
                            <option value="contact">Contato</option>
                            <option value="follow-up">Follow-up</option>
                            <option value="negotiation">Em negociação</option>
                        </select>
                    </div>
                </div>
                <div className="input row">
                    <div className="size-12 col">
                        {addNotes ? (
                            <>
                                <div className="add-notes">
                                    <div className="title-note size-12 col">
                                        <label htmlFor="title-note">
                                            Título da nota
                                        </label>
                                        <input
                                            type="text"
                                            id="total"
                                            placeholder="Adicione um texto"
                                            onChange={(e) => {
                                                setNewNote({
                                                    ...newNote,
                                                    title: e.target.value,
                                                });
                                            }}
                                        />
                                    </div>
                                    <div className="description-note size-8 col">
                                        <label htmlFor="description-note">
                                            Descrição da nota
                                        </label>
                                        <textarea
                                            placeholder="Descrição"
                                            onChange={(e) => {
                                                setNewNote({
                                                    ...newNote,
                                                    description: e.target.value,
                                                });
                                            }}
                                        ></textarea>
                                    </div>
                                </div>
                                <div className="btn-controls">
                                    <div
                                        className="remove-product size-2"
                                        onClick={handleShowAddNotes}
                                    >
                                        <ImBin></ImBin>
                                        <p>Remover</p>
                                    </div>
                                    <div
                                        className="add-product size-2"
                                        onClick={handleAddNote}
                                    >
                                        <ImCheckboxChecked></ImCheckboxChecked>
                                        <p>Adicionar</p>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p
                                className="show-add-notes"
                                onClick={handleShowAddNotes}
                            >
                                <SlNotebook></SlNotebook> Adicionar notas
                            </p>
                        )}
                    </div>
                </div>
                <div className="input row">
                    <div className="size-12 col">
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
                                            <option value="default" selected>
                                                Selecione
                                            </option>
                                            <option value="climatizador">
                                                Climatizador de Teto
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
                                            type="text"
                                            id="quantity-products"
                                            placeholder="R$ 0,00"
                                        />
                                    </div>
                                    <div className="total-value size-2 col">
                                        <label htmlFor="total">Total</label>
                                        <input
                                            type="text"
                                            id="total"
                                            placeholder="R$ 0,00"
                                        />
                                    </div>
                                </div>
                                <div
                                    className="remove-product size-2"
                                    onClick={handleShowAddProducts}
                                >
                                    <ImBin></ImBin>
                                    <p>Remover</p>
                                </div>
                            </>
                        ) : (
                            <p
                                className="show-add-products"
                                onClick={handleShowAddProducts}
                            >
                                + Adicionar produto/serviço
                            </p>
                        )}
                    </div>
                </div>

                <div className="input row">
                    <div className="size-12 col">
                        <section className="created-notes">
                            {notes.length > 0 ? (
                                <>
                                    <h4>Notas adicionadas:</h4>
                                    {notes.map((note, index) => (
                                        <Fragment key={index}>
                                            <div className="note-item">
                                                <header>
                                                    <div className="content">
                                                        <SlNotebook></SlNotebook>
                                                        <div>
                                                            <h4>
                                                                {note.title}
                                                            </h4>
                                                            <p>
                                                                Criada em:
                                                                01/09/2023
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ImBin
                                                        className="remove-note"
                                                        onClick={() =>
                                                            handleRemoveNote(
                                                                note
                                                            )
                                                        }
                                                    ></ImBin>
                                                </header>
                                                <main>
                                                    <p>{note.description}</p>
                                                    <span>
                                                        Criada por: Adrian
                                                        Campana
                                                    </span>
                                                </main>
                                            </div>
                                        </Fragment>
                                    ))}
                                </>
                            ) : (
                                ''
                            )}
                        </section>
                    </div>
                </div>

                <div className="input row">
                    <div className="size-12 col">
                        <Button
                            title="Cadastrar orçamento"
                            onClick={handleRegisterBusiness}
                        ></Button>
                    </div>
                </div>
            </form>
        </Container>
    );
}
