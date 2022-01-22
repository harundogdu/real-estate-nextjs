import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <Flex width={"full"} minH={"100vh"} height="100%" alignItems={"center"} justifyContent={"center"} flexDirection={"column"} gap={"40px 0"}>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Navbar />
            {children}
            <Footer />
        </Flex>
    );
};

export default Layout;