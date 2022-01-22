import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const estateApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': "9c5f6f27d0msh6dd405afb26e558p1be517jsn9211d4a36138",
        },
    });

    return data;
}