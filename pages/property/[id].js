import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { baseUrl, estateApi } from "../../services/estateApi";
import Slider from "react-slick";
import Image from 'next/image';
import { Box, Text, Heading, Flex, Avatar } from '@chakra-ui/react';
import { HiBadgeCheck } from 'react-icons/hi'
import { Settings } from '../../utils/settings';
import { FaBath, FaBed } from 'react-icons/fa';
import { RiApps2Fill } from 'react-icons/ri';
import millify from 'millify';
import parse from 'html-react-parser';

const Detail = ({ propertyDetails }) => {
    console.log(propertyDetails);
    const { photos, title, isVerified, rentFrequency, price, agency, description, amenities, rooms, bath, area, type, furnishingStatus, purpose } = propertyDetails;

    return (
        <Box my="2" px="16">
            <Slider {...Settings}>
                {photos.map((photo, index) => (
                    <Box key={index}>
                        <Image src={photo.url} alt="bannerImage" width="690px" height="400px" objectFit='cover' />
                    </Box>
                ))}
            </Slider>


            <Flex mt="8" gap="0 20px" flexDirection="column">
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex flexDirection="column">
                        <Flex>
                            <Box paddingRight='3' color='green.400'>{isVerified && <HiBadgeCheck size={24} />}</Box>
                            <Text fontSize="lg" fontWeight="bold">AED {price}{rentFrequency ? `/${rentFrequency}` : ""}</Text>
                        </Flex>
                        <Flex alignItems="center" fontSize="16px" color="blue.500" gap="0 15px">
                            {rooms} <FaBed /> | {bath} <FaBath /> | {millify(area)} sqft <RiApps2Fill />
                        </Flex>
                    </Flex>
                    <Avatar size="xl" name="Agency" src={agency.logo.url} />
                </Flex>

                <Heading fontSize="lg" fontWeight="bold" my="2">{title}</Heading>
            </Flex>


            <Flex flexDirection="column">
                <Text my="2" textAlign="justify" lineHeight="2">
                    {parse(description)}
                </Text>

                <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between' my="2">
                    <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100'>
                        <Text>Type</Text>
                        <Text fontWeight='bold'>{type}</Text>
                    </Flex>
                    <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100'>
                        <Text>Purpose</Text>
                        <Text fontWeight='bold'>{purpose}</Text>
                    </Flex>
                    {furnishingStatus && (
                        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' >
                            <Text>Furnishing Status</Text>
                            <Text fontWeight='bold'>{furnishingStatus}</Text>
                        </Flex>
                    )}
                </Flex>

                <Heading fontSize="xl">Amenties</Heading>
                <Flex gap="10px" my="4" flexWrap="wrap">
                    {
                        amenities.map((amenitie, index) => (
                            <Flex
                                key={index}
                                bgColor="gray.200"
                                alignItems="center"
                                justifyContent="center"
                                p="2"
                                px="3"
                                color="blue.400"
                                borderRadius="5px"
                            >{amenitie.text}</Flex>
                        ))
                    }
                </Flex>
            </Flex>
        </Box>
    );
};


export async function getServerSideProps({ params: { id } }) {
    const data = await estateApi(`${baseUrl}/properties/detail?externalID=${id}`);

    return {
        props: {
            propertyDetails: data,
        },
    };
}



export default Detail;