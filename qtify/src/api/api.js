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

const GetOldSongs = async () => {
    const oldSongsURL = 'https://qtify-backend-labs.crio.do/albums/old';
    try {
        const fetchOldSongs = await axios.get(oldSongsURL);
        return fetchOldSongs.data;
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

export {
    GetTopSongs,
    GetNewSongs,
    GetOldSongs
}