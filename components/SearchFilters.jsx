import { Flex, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DB, getFilterValues } from '../utils/@fake_db';
import { Spinner } from '@chakra-ui/react'

const SearchFilters = () => {
    const [filters] = useState(DB);
    const [searchTerm, setSearchTerm] = useState('');
    const [locationData, setLocationData] = useState();
    const [showLocations, setShowLocations] = useState(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues)

        values.forEach((item) => {
            if (item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({ pathname: path, query: query });
    }

    useEffect(() => {
        if (searchTerm !== '') {
            const fetchData = async () => {
                setLoading(true);
                const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
                setLoading(false);
                setLocationData(data?.hits);
            };

            fetchData();
        }
    }, [searchTerm]);

    return (
        <Flex
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            bgColor="gray.200"
        >
            {
                loading ? <Spinner size="xl" /> :
                    (
                        filters.map((category, index) => (
                            <Select
                                key={index}
                                placeholder={category.placeholder}
                                width="44"
                                onChange={(e) => searchProperties({ [category.queryName]: e.target.value })}
                            >
                                {category.items.map((item, index) => (
                                    <option key={index} value={item.value}>{item.name}</option>
                                ))}
                            </Select>
                        ))
                    )
            }
        </Flex >
    );
};

export default SearchFilters;