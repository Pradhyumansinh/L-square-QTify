import { Button } from "@mui/material";
import Card from "../Card/Card";
import gridCardStyle from "./Section.module.css";
import { styled } from "@mui/material/styles";
import { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab, Box } from '@mui/material';
import { GetAllGenre } from "../../api/api";

const MuiButtonCustom = styled(Button)(() => ({
    height: 30,
    fontFamily: 'Poppins',
    backgroundColor: '#121212',
    color: '#34C94B',
    fontSize: 20,
    margin: 17,
    textTransform: 'capitalize',
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const Section = ({ GridHeading, Songs, songTabs = false }) => {
    const [flag, setFlag] = useState(true);
    const [genreValue, setGenreValue] = useState('All');
    const [allGerne, setAllGerne] = useState([]);


    const handleFlag = () => {
        setFlag(!flag);
    }

    useEffect(() => {
        const getGenre = async () => {
            const gernes = await GetAllGenre();
            setAllGerne(gernes);
        }
        getGenre();
    }, [])



    const handleChange = (e, newValue) => {
        setGenreValue(e => newValue);
    };
    const filteredSongs = genreValue === 'All' ? Songs : Songs.filter((song) => song.genre.label === genreValue);

    const CustomTab = styled(Tab)(({ theme, selected }) => ({
        fontWeight: 'bold',
        fontFamily: 'Poppins',
        color: 'white',
        textTransform: 'capitalize',
        '&.Mui-selected': {
            color: '#34C94B',
            indicatorColor: "Success",
        },
    }));

    return (

        <div className={gridCardStyle.gridMainContainer} style={songTabs ? { borderTop: '1px solid #34C94B' } : { borderTop: 'none' }}>
            <div className={gridCardStyle.gridHeading}>
                <p className={gridCardStyle.gridHeaderText}>{GridHeading}</p>
                {songTabs ? <></> : (
                    <MuiButtonCustom variant="text" onClick={handleFlag}>{songTabs ? `Show All` : 'Collapse'}</MuiButtonCustom>
                )}
            </div>
            {
                songTabs &&
                <Box sx={{ width: '100%' }}>
                    <Tabs value={genreValue} onChange={handleChange} aria-label="music genre tabs"
                        sx={{
                            borderBottom: 1,
                            width: '40%',
                            borderColor: 'divider',
                            '&.Mui-selected': {
                                backgroundColor: '#34C94B',
                            },
                        }}
                    >
                        {allGerne && allGerne.map((item) => {
                            return (<CustomTab key={item.key} label={item.label} value={item.label} />)
                        })}
                    </Tabs>
                    <TabPanel value={0} index={0}>
                        {songTabs && (
                            <div>
                                <Carousel Songs={filteredSongs} isSong={true} />
                            </div>)
                        }
                    </TabPanel>
                </Box>
            }
            {
                flag ? (
                    (!songTabs) && (
                        <div>
                            <Carousel Songs={Songs} />
                        </div>
                    )
                ) : (
                    (!songTabs) && (
                        <div className={gridCardStyle.songContainer}>
                            {
                                Songs && Songs.map((song) => {
                                    return (
                                        <Card key={song.id} cardImgUrl={song.image} cardImgAlt={song.slug} chipLabel={song.follows} cardSongName={song.title} />
                                    )
                                })
                            }
                        </div>
                    )

                )
            }
        </div >
    )
}

export default Section;