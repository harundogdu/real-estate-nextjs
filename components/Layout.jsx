import { Flex } from '@chakra-ui/react';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <Flex width={"full"} minH={"100vh"} height="100%" alignItems={"center"} justifyContent={"center"} flexDirection={"column"}>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Navbar />
            <main style={{ flex: 1, width: "100%", height: "100%", marginTop: "80px" }}>{children}</main>
            <Footer />
        </Flex>
    );
};

export default Layout;