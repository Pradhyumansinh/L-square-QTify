import rightButtonImg from '../../assets/right.svg';
import rightButtonStyle from './RightButton.module.css';

const RightButton = ({ onClick }) => {
    return (<button className={rightButtonStyle.rightButton} onClick={onClick}>
        <img src={rightButtonImg} alt="Right" />
    </button>)
}

export default RightButton;