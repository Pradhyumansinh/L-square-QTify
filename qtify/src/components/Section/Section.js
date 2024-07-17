import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import Card from "../Card/Card";
import { GetTopSongs } from "../../api/api";
import gridCardStyle from "./Section.module.css";
import { styled } from "@mui/material/styles";

const MuiButtonCustom = styled(Button)(() => ({
    height: 30,
    fontFamily: 'Poppins',
    backgroundColor: '#121212',
    color: '#34C94B',
    fontSize: 20,
    margin: 17,
    textTransform: 'capitalize',
}));

const Section = ({ GridHeading }) => {
    const [topSongs, setTopSongs] = useState();

    useEffect(() => {
        const fetchTopSongs = async () => {
            const data = await GetTopSongs();
            setTopSongs(data);
        }
        fetchTopSongs();
    }, [])
    return (
        <div className={gridCardStyle.gridMainContainer}>
            <div className={gridCardStyle.gridHeading}>
                <p className={gridCardStyle.gridHeaderText}>{GridHeading}</p>
                <MuiButtonCustom variant="text">Collapse</MuiButtonCustom>
            </div>
            <div className={gridCardStyle.songContainer}>
                {
                    topSongs && topSongs.map((song) => {
                        return (
                            <Card key={song.id} cardImgUrl={song.image} cardImgAlt={song.slug} chipLabel={song.follows} cardSongName={song.title} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Section;