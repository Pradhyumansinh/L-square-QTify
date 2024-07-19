import LeftButtonStyle from './LeftButton.module.css';
import leftButtonImg from '../../assets/left.png';

const LeftButton = ({ onClick }) => {
    return (<>
        <button className={LeftButtonStyle.leftButton} onClick={onClick}>
            <img src={leftButtonImg} alt="Left" />
        </button>
    </>)
}

export default LeftButton;