import { useState, useEffect } from 'react';
import { produce } from 'immer';
import { Container } from './styles';
import { api } from '../../services/api';

import { BoardContext } from './context';
import { List } from '../List';

export function Board() {
    const [lists, setLists] = useState([]);

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

    function move(fromList, toList, from, to) {
        setLists(
            produce(lists, (draft) => {
                const dragged = draft[fromList].cards[from];

                draft[fromList].cards.splice(from, 1);
                draft[toList].cards.splice(to, 0, dragged);
            })
        );
    }

    function addProductToList(product) {
        setLists(
            produce(lists, (draft) => {
                console.log('passou');
                const listIndex = product.category; // Use the appropriate list index where you want to add the product.
                draft[listIndex].cards.push(product);
            })
        );
    }

    return (
        <BoardContext.Provider value={{ lists, move, addProductToList }}>
            <Container>
                {lists.map((list, index) => (
                    <List key={list.title} index={index} data={list}></List>
                ))}
            </Container>
        </BoardContext.Provider>
    );
}
