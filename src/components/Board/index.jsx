import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { Container } from './styles';
import { api } from '../../services/api';

import BoardContext from './context';
import { List } from '../List';

export function Board() {
    const [lists, setLists] = useState([]);
    const [updatedLists, setUpdatedLists] = useState(lists);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/businesses');
                if (response.data && Array.isArray(response.data)) {
                    const listsData = response.data.map((item) => ({
                        title: item.title,
                        creatable: false,
                        cards: item.cards.map((card) => ({
                            id: card.id,
                            content: card.content,
                            description: card.description,
                            price: card.price,
                            category: card.category,
                            created_at: card.created_at,
                            notes: card.notes,
                            user: card.user,
                        })),
                    }));

                    setLists(listsData);
                } else {
                    console.error(
                        'Dados da API não estão no formato esperado:',
                        response.data
                    );
                }
            } catch (error) {
                console.error('Erro ao buscar dados da API:', error);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        setUpdatedLists(lists);
    }, [lists]);

    function addProductToList(newProduct) {
        setLists((prevLists) => {
            return produce(prevLists, (draft) => {
                const list = draft.find((list) => list.title === card.category);

                if (list) {
                    list.cards.push(newProduct);
                }
            });
        });
    }

    function removeProductFromList(listIndex, cardIndex) {
        setLists((prevLists) => {
            return produce(prevLists, (draft) => {
                if (draft[listIndex] && draft[listIndex].cards[cardIndex]) {
                    draft[listIndex].cards.splice(cardIndex, 1);
                }
            });
        });
    }

    function move(fromList, toList, from, to) {
        setLists(
            produce(lists, (draft) => {
                const dragged = draft[fromList].cards[from];

                draft[fromList].cards.splice(from, 1);
                draft[toList].cards.splice(to, 0, dragged);
            })
        );
    }

    return (
        <BoardContext.Provider value={{ lists, move, addProductToList }}>
            <Container>
                {updatedLists.map((list, index) => (
                    <List key={list.title} index={index} data={list}></List>
                ))}
            </Container>
        </BoardContext.Provider>
    );
}
