import React from 'react';
import ReactDOM from 'react-dom/client';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Routes } from './routes';

import { AuthProvider } from './hooks/auth';

import { ChakraProvider } from '@chakra-ui/react';

import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider>
            <ThemeProvider theme={theme}>
                <DndProvider backend={HTML5Backend}>
                    <GlobalStyles></GlobalStyles>
                    <AuthProvider>
                        <Routes />
                    </AuthProvider>
                </DndProvider>
            </ThemeProvider>
        </ChakraProvider>
    </React.StrictMode>
);
