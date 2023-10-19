import {
    useEditableControls,
    Editable,
    EditablePreview,
    EditableInput,
    Input,
    ButtonGroup,
    IconButton,
    Flex,
} from '@chakra-ui/react';

import { BsCheckSquare, BsXSquare, BsPencilSquare } from 'react-icons/bs';

export function CustomEditableInput({ title }) {
    function EditableControls() {
        const {
            isEditing,
            getSubmitButtonProps,
            getCancelButtonProps,
            getEditButtonProps,
        } = useEditableControls();

        return isEditing ? (
            <ButtonGroup justifyContent="center" size="sm">
                <IconButton
                    icon={<BsCheckSquare />}
                    {...getSubmitButtonProps()}
                />
                <IconButton icon={<BsXSquare />} {...getCancelButtonProps()} />
            </ButtonGroup>
        ) : (
            <Flex justifyContent="center">
                <IconButton
                    size="sm"
                    icon={<BsPencilSquare />}
                    {...getEditButtonProps()}
                />
            </Flex>
        );
    }

    return (
        <Editable
            textAlign="center"
            defaultValue={title}
            fontSize="2xl"
            isPreviewFocusable={false}
            display="flex"
            alignItems="center"
            gap="5"
        >
            <EditablePreview />
            <Input as={EditableInput} />
            <EditableControls />
        </Editable>
    );
}
