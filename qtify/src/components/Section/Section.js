import { Button } from "@mui/material";
import Card from "../Card/Card";
import gridCardStyle from "./Section.module.css";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Carousel from "../Carousel/Carousel";

const MuiButtonCustom = styled(Button)(() => ({
    height: 30,
    fontFamily: 'Poppins',
    backgroundColor: '#121212',
    color: '#34C94B',
    fontSize: 20,
    margin: 17,
    textTransform: 'capitalize',
}));

const Section = ({ GridHeading, Songs }) => {
    const [flag, setFlag] = useState(true);

    const handleFlag = () => {
        setFlag(!flag);
    }

    return (
        <div className={gridCardStyle.gridMainContainer}>
            <div className={gridCardStyle.gridHeading}>
                <p className={gridCardStyle.gridHeaderText}>{GridHeading}</p>
                <MuiButtonCustom variant="text" onClick={handleFlag}>{flag ? `Show All` : 'Collapse'}</MuiButtonCustom>
            </div>
            {flag ? (
                <div>
                    <Carousel Songs={Songs} />
                </div>) : (
                <div className={gridCardStyle.songContainer}>
                    {
                        Songs && Songs.map((song) => {
                            return (
                                <Card key={song.id} cardImgUrl={song.image} cardImgAlt={song.slug} chipLabel={song.follows} cardSongName={song.title} />
                            )
                        })
                    }
                </div>)}


        </div >
    )
}

export default Section;