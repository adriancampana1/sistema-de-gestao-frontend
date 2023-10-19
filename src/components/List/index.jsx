import { Container } from './styles';

import { MdAdd } from 'react-icons/md';

import { CardItem } from '../Card';

export function List({ data, index: listIndex }) {
    return (
        <Container done={data.done}>
            <header>
                <h2>{data.title}</h2>
                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#FFF"></MdAdd>
                    </button>
                )}
            </header>

            <ul>
                {data.cards.map((card, index) => (
                    <CardItem
                        key={card.id}
                        listIndex={listIndex}
                        index={index}
                        data={card}
                    ></CardItem>
                ))}
            </ul>
        </Container>
    );
}
