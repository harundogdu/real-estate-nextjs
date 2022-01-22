import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Flex flexDirection="column" justifyContent="center" alignItems="center" p="4" bgColor="gray.800" color="white" w="full">
            Copyright &copy; {new Date().getFullYear()} Real Estate | All rights reserved.
        </Flex>
    );
};

export default Footer;