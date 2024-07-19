import axios from "axios";

const GetTopSongs = async () => {
    const TopSongsURL = 'https://qtify-backend-labs.crio.do/albums/top';
    try {
        const fetchTopSongs = await axios.get(TopSongsURL);
        return fetchTopSongs.data;
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

const GetNewSongs = async () => {
    const NewSongsURL = 'https://qtify-backend-labs.crio.do/albums/new';
    try {
        const fetchTopSongs = await axios.get(NewSongsURL);
        return fetchTopSongs.data;
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

const GetAllSongs = async () => {
    const allSongsURL = 'https://qtify-backend-labs.crio.do/songs';
    try {
        const fetchAllSongs = await axios.get(allSongsURL);
        return fetchAllSongs.data;
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

const GetAllGenre = async () => {
    const allGenreURL = 'https://qtify-backend-labs.crio.do/genres';
    try {
        const fetchAllGenre = await axios.get(allGenreURL);
        const allGerne = fetchAllGenre.data.data;
        allGerne.unshift({ key: 'all', label: 'All' });
        return allGerne;
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

export {
    GetTopSongs,
    GetNewSongs,
    GetAllSongs,
    GetAllGenre
}