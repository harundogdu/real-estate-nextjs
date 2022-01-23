import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { BsFillFilterSquareFill } from 'react-icons/bs'
import SearchFilters from '../components/SearchFilters';
import { baseUrl, estateApi } from "../services/estateApi";
import Property from '../components/Property';

const Search = ({ properties }) => {
    const [searchFiltersOpen, setSearchFiltersOpen] = React.useState(false);
    return (
        <>
            <Flex
                bgColor="gray.200"
                width="full"
                alignItems="center"
                justifyContent="center"
                py="4"
                gap="0 10px"
                onClick={() => setSearchFiltersOpen(!searchFiltersOpen)}
                fontSize="xl"
                fontWeight="bold"
            >
                Search Property By Filters  {<BsFillFilterSquareFill size={24} />}
            </Flex>
            {searchFiltersOpen && <SearchFilters />}

            <Flex flexWrap="wrap" alignItems={"center"} justifyContent={"center"} gap={"20px"} my="5">
                {
                    properties.length > 0 ?
                        (
                            properties.map(item => {
                                return <Property key={item.id} item={item} />
                            })
                        )
                        : (
                            <Flex flexDirection="column" justifyContent="center" alignItems="center">
                                <svg width="300pt" height="300pt" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="m544.95 297.5h-313.07c-3.9375 0.023438-7.375 2.6719-8.3984 6.4766l-35 125.12-12.602-215.43c-0.12891-1.293 0.31641-2.5742 1.2266-3.5 0.92188-0.93359 2.1875-1.4414 3.5-1.4023h64.398c3.4375 0.015624 6.6758 1.6328 8.75 4.375l21.352 27.477c1.6328 2.1094 4.1562 3.3398 6.8242 3.3242h190.57v26.25c0 4.832 3.918 8.75 8.75 8.75s8.75-3.918 8.75-8.75v-35c0.046875-2.3516-0.85547-4.6211-2.5-6.3008-1.6445-1.6797-3.8984-2.625-6.25-2.625h-196l-18.551-23.977v0.003906c-5.25-6.7227-13.18-10.812-21.699-11.199h-64.398c-6.1719 0.10156-12.039 2.6875-16.277 7.1719-4.1641 4.4297-6.3203 10.383-5.9492 16.453l16.625 266.52c0.22266 1.8516 0.82031 3.6367 1.75 5.25 1.6328 2.2266 4.2383 3.5273 7 3.5h295.93c7.4297-0.003906 14.645-2.4844 20.508-7.0469 5.8633-4.5664 10.039-10.953 11.867-18.152l12.949-50.574c1.2578-4.8359-1.6406-9.7695-6.4766-11.027-4.832-1.2539-9.7656 1.6445-11.023 6.4766l-13.301 50.75c-0.94531 3.4219-2.9727 6.4492-5.7773 8.6289-2.8086 2.1758-6.2461 3.3828-9.7969 3.4453h-283.32l43.227-157.5h295.05l-11.898 45.148c-1.207 4.8359 1.7305 9.7305 6.5625 10.938 4.832 1.2109 9.7305-1.7266 10.938-6.5625l14.699-56.176v0.003906c0.70703-2.6211 0.15625-5.4219-1.4883-7.5781-1.6445-2.1602-4.1992-3.4336-6.9102-3.4492z" />
                                        <path d="m352.62 422.27c-1.6562 1.6445-2.5898 3.8828-2.5898 6.2148s0.93359 4.5703 2.5898 6.2109c1.5859 1.6914 3.8047 2.6523 6.125 2.6523s4.5391-0.96094 6.125-2.6523c3.0195-3.0117 7.1094-4.707 11.375-4.707s8.3555 1.6953 11.375 4.707c1.5859 1.6914 3.8047 2.6523 6.125 2.6523s4.5391-0.96094 6.125-2.6523c1.6562-1.6406 2.5898-3.8789 2.5898-6.2109s-0.93359-4.5703-2.5898-6.2148c-6.2461-6.3047-14.75-9.8516-23.625-9.8516s-17.379 3.5469-23.625 9.8516z" />
                                        <path d="m306.25 367.5c-4.832 0-8.75 3.918-8.75 8.75s3.918 8.75 8.75 8.75h17.5c4.832 0 8.75-3.918 8.75-8.75s-3.918-8.75-8.75-8.75z" />
                                        <path d="m428.75 367.5c-4.832 0-8.75 3.918-8.75 8.75s3.918 8.75 8.75 8.75h17.5c4.832 0 8.75-3.918 8.75-8.75s-3.918-8.75-8.75-8.75z" />
                                        <path d="m350 197.75c-0.69141 3.3828 0.51562 6.8711 3.1484 9.1016 1.5469 1.2227 3.457 1.8984 5.4258 1.9219 1.2695 0.26562 2.582 0.26562 3.8516 0l46.898-23.625c14.727 4.6016 30.074 6.9062 45.5 6.8281 58.801 0 105-30.801 105-70 0-32.375-30.977-59.5-77.176-67.898v-0.003906c-4.832-0.86719-9.4531 2.3438-10.324 7.1758-0.86719 4.832 2.3438 9.457 7.1758 10.324 37.102 5.4258 63 26.25 63 49.352 0 28.523-40.074 52.5-87.5 52.5-14.75 0.050781-29.414-2.3125-43.398-7-2.1133-0.96094-4.5391-0.96094-6.6523 0l-33.074 17.5 7.5234-30.625c0.71875-2.7812-0.003907-5.7383-1.9219-7.875-6.2656-6.6367-9.8242-15.375-9.9766-24.5 0-23.449 27.301-44.801 64.75-50.926 4.8125-0.80469 8.0859-5.3281 7.3516-10.148-0.80859-4.8125-5.3281-8.0898-10.152-7.3516-46.727 7.6992-79.449 35-79.449 68.25 0.13672 11.641 4.1367 22.906 11.375 32.023z" />
                                        <path d="m435.75 113.93 6.8242 7-6.8242 6.8242c-3.4727 3.4844-3.4727 9.1172 0 12.602 3.4375 3.2422 8.8125 3.2422 12.25 0l7-7 7 7c3.4375 3.2422 8.8125 3.2422 12.25 0 3.4727-3.4844 3.4727-9.1172 0-12.602l-6.8242-6.8242 6.8242-7c1.6562-1.6445 2.5898-3.8789 2.5898-6.2148 0-2.332-0.93359-4.5664-2.5898-6.2109-1.5859-1.6914-3.8047-2.6523-6.125-2.6523s-4.5391 0.96094-6.125 2.6523l-7 7-7-7c-1.5859-1.6914-3.8047-2.6523-6.125-2.6523s-4.5391 0.96094-6.125 2.6523c-1.6562 1.6445-2.5898 3.8789-2.5898 6.2109 0 2.3359 0.93359 4.5703 2.5898 6.2148z" />
                                    </g>
                                </svg>

                                <Text fontSize="2xl" fontWeight="bold">
                                    No properties found
                                </Text>
                            </Flex>
                        )
                }
            </Flex>
        </>
    );
};

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await estateApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

    return {
        props: {
            properties: data?.hits,
        },
    };
}

export default Search;