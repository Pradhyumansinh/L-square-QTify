import {useState, useEffect} from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import Navbar from '../../components/Navbar/Navbar';
import Section from '../../components/Section/Section';
import { GetTopSongs, GetNewSongs } from "../../api/api";

const HomePage = () => {
    const [topSongs, setTopSongs] = useState();
    const [newSongs, setNewSongs] = useState();

    useEffect(() => {
        const fetchTopSongs = async () => {
            const data = await GetTopSongs();
            setTopSongs(data);
        }
        fetchTopSongs();
        const fetchNewSongs = async () => {
            const data = await GetNewSongs();
            setNewSongs(data);
        }
        fetchNewSongs();
    }, [])
    return (<>
        <Navbar />
        <HeroImage />
        <Section GridHeading="Top Albums" Songs={topSongs} />
        <Section GridHeading="New Albums" Songs={newSongs} />
    </>)
}

export default HomePage;