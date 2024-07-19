import {useState, useEffect} from 'react';
import HeroImage from '../../components/HeroImage/HeroImage';
import Navbar from '../../components/Navbar/Navbar';
import Section from '../../components/Section/Section';
import { GetTopSongs, GetNewSongs, GetAllSongs } from "../../api/api";

const HomePage = () => {
    const [topSongs, setTopSongs] = useState();
    const [newSongs, setNewSongs] = useState();
    const [allSongs, setAllSongs] = useState();

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
        const fetchAllSongs = async () => {
            const data = await GetAllSongs();
            setAllSongs(data);
        }
        fetchAllSongs();
    }, [])
    return (<>
        <Navbar />
        <HeroImage />
        <Section GridHeading="Top Albums" Songs={topSongs} songTabs={false} />
        <Section GridHeading="New Albums" Songs={newSongs} songTabs={false} />
        <Section GridHeading="Songs" Songs={allSongs} songTabs={true} />
    </>)
}

export default HomePage;