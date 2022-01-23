import React from 'react';
import Image from 'next/image';
import millify from 'millify';
import { Box, Flex, Text } from '@chakra-ui/react';
import { HiBadgeCheck } from 'react-icons/hi'
import { Avatar } from '@chakra-ui/react'
import { FaBed, FaBath } from 'react-icons/fa'
import { RiApps2Fill } from 'react-icons/ri'
import DefaultImage from '../assets/images/house.jpg';
import Link from 'next/link';

const Property = ({ item }) => {
    const { rooms, bath, isVerified, agency: { logo }, price, title, rentFrequency, area, externalID } = item;
    return (
        <Link href={`/property/${externalID}`} passHref>
            <Flex flexDirection="column" cursor="pointer">
                <Box>
                    <Image src={item.coverPhoto ? item.coverPhoto.url : DefaultImage} alt="bannerImage" width="450px" height="250px" />
                </Box>

                <Box mt={1}>
                    <Flex justifyContent="space-between" alignItems="center" >
                        <Flex flex alignItems="center" justifyContent="space-between" gap="0 5px">
                            <Box paddingRight='3' color='green.400'>{isVerified && <HiBadgeCheck size={24} />}</Box>
                            <Text fontSize="lg" fontWeight="bold">AED {price}{rentFrequency ? `/${rentFrequency}` : ""}</Text>
                        </Flex>
                        <Avatar size="md" name="Agency" src={logo.url} />
                    </Flex>
                    <Flex alignItems="center" fontSize="16px" color="blue.500" gap="0 15px">
                        {rooms} <FaBed /> | {bath} <FaBath /> | {millify(area)} sqft <RiApps2Fill />
                    </Flex>
                    <Box mt={4}>
                        <Text fontSize="lg">{title.length > 40 ? `${title.substring(0, 40)}...` : title}</Text>
                    </Box>
                </Box>
            </Flex>
        </Link>
    );
};

export default Property;