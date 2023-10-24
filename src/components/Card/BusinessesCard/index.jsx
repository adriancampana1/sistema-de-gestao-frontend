import { useRef, useContext, useState } from 'react';

import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../../Board/context';
import { Container, Label } from './styles';

import { ModalDetails } from '../../Modal/ModalDetails';

import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    Text,
    Stack,
    CardFooter,
    Button,
} from '@chakra-ui/react';

import { BsArrowsAngleExpand } from 'react-icons/bs';

export function CardItem({ data, index, listIndex }) {
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
            <Card>
                <CardBody>
                    <Stack>
                        <Heading size="2md">{data.content}</Heading>
                        <Text opacity="0.8">{data.description}</Text>
                    </Stack>
                </CardBody>
                <CardFooter>
                    <ModalDetails productData={{ ...data }}></ModalDetails>
                </CardFooter>
            </Card>
        </Container>
    );
}
