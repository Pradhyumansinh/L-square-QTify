import CardStyle from './Card.module.css';
import Chip from "@mui/material/Chip";
import { styled } from "@mui/material/styles";

const MuiChipCustom = styled(Chip)(() => ({
    width: 80,
    margin: 8,
    height: 23,
    backgroundColor: '#121212',
    borderRadius: 10,
    color: '#FFFFFF',
    fontSize: 10,
}));

const Card = ({ cardImgUrl, cardImgAlt, chipLabel, cardSongName }) => {
    return (
        <div className={CardStyle.CardBody}>
            <img className={CardStyle.CardImage} src={cardImgUrl} alt={cardImgAlt} />
            <div className={CardStyle.CardFollowContent}>
                <MuiChipCustom label={`follows ${chipLabel}`} variant="filled" />
            </div>
            <div className={CardStyle.SongNameContent}>
                <p>{cardSongName}</p>
            </div>
        </div>
    )
}

export default Card;