import { useRef } from 'react';

import {
    useDisclosure,
    Button,
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogOverlay,
} from '@chakra-ui/react';

export function CustomAlert({ deletConfirm }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const cancelRef = useRef();

    function handleDeletConfirm() {
        deletConfirm(true);
        onClose();
    }
    return (
        <div>
            <Button colorScheme="red" onClick={onOpen}>
                Excluir
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                size="3xl"
                isCentered
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader
                            fontSize="xl"
                            fontWeight="bold"
                            textAlign="center"
                            color="#101010"
                        >
                            Deletar
                        </AlertDialogHeader>

                        <AlertDialogBody color="#404040">
                            Você tem certeza? Essa ação não pode ser revertida.
                        </AlertDialogBody>

                        <AlertDialogFooter justifyContent="center">
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancelar
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={handleDeletConfirm}
                                ml={3}
                            >
                                Deletar
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </div>
    );
}
