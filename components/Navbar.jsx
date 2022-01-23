/* eslint-disable @next/next/link-passhref */
import { Box, Flex, Heading, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React from 'react';
import { FcHome } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { RiKey2Line } from 'react-icons/ri'
import { SiCashapp } from 'react-icons/si'
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <Flex justifyContent="space-between" w="full" py="4" px="2" borderBottom="1px" borderColor="gray.200" position="sticky">
                <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
                    <Link href="/">Realtor</Link>
                </Box>
                <Menu>
                    <MenuButton
                        as={IconButton}
                        aria-label='Options'
                        icon={<HamburgerIcon />}
                        variant='outline'
                    />
                    <MenuList>
                        <Link href="/">
                            <MenuItem icon={<FcHome />} >
                                Home
                            </MenuItem>
                        </Link>
                        <Link href="/" passHref>
                            <MenuItem icon={<BsSearch />} >
                                Search
                            </MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-sale" passHref>
                            <MenuItem icon={<SiCashapp />} >
                                Buy Property
                            </MenuItem>
                        </Link>
                        <Link href="/search?purpose=for-rent" passHref>
                            <MenuItem icon={<RiKey2Line />} >
                                Rent Property
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Flex>
        </div>
    );
};

export default Navbar;