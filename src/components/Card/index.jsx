import { useRef, useContext, useState } from 'react';

import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';
import { Container, Label } from './styles';

import { Modal } from '../Modal';
import { ModalDetails } from '../ModalDetails';

import { BsArrowsAngleExpand } from 'react-icons/bs';

export function Card({ data, index, listIndex }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [productData, setProductData] = useState(null);

    const ref = useRef();

    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        type: 'CARD',
        item: { index, listIndex },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            if (
                draggedIndex === targetIndex &&
                draggedListIndex === targetListIndex
            ) {
                return;
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex < targetIndex && draggedTop < targetCenter) {
                return;
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return;
            }

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
            item.index = targetIndex;
            item.listIndex = targetListIndex;
        },
    });

    dragRef(dropRef(ref));

    return (
        <Container ref={ref} $isdragging={isDragging}>
            <Modal
                isOpen={modalOpen}
                setIsOpen={setModalOpen}
                backdropClose={true}
            >
                <ModalDetails productData={{ ...productData }}></ModalDetails>
            </Modal>
            <section>
                <button
                    onClick={() => {
                        setProductData(data);
                        setModalOpen(true);
                    }}
                >
                    <BsArrowsAngleExpand></BsArrowsAngleExpand>
                </button>
            </section>

            <main>
                <p>{data.content}</p>
                <span>{data.description}</span>
            </main>
        </Container>
    );
}
