import { Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { FcHome } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { RiKey2Line } from 'react-icons/ri'
import { SiCashapp } from 'react-icons/si'
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Navbar = () => {
    return (
        <Flex justifyContent="space-between" w="full" py="4" px="36" borderBottom="1px" borderColor="gray.200">
            <Heading as="h1" color="blue.400">
                <Link href="/">Realtor</Link>
            </Heading>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                />
                <MenuList>
                    <MenuItem icon={<FcHome />} >
                        <Link href="/">Home</Link>
                    </MenuItem>
                    <MenuItem icon={<BsSearch />} >
                        <Link href="/">Search</Link>
                    </MenuItem>
                    <MenuItem icon={<SiCashapp />} >
                        <Link href="/search?purpose=for-sale">Buy Property</Link>
                    </MenuItem>
                    <MenuItem icon={<RiKey2Line />} >
                        <Link href="/search?purpose=for-rent">Rent Property</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Flex>
    );
};

export default Navbar;