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

export {
    GetTopSongs
}