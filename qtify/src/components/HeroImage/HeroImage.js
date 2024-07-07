import HeroImg from '../../assets/HeroImg.png';
import HeroImgStyle from './HeroImage.module.css';

const HeroImage = () => {
    return (
        <div className={HeroImgStyle.HeroImgContent}>
            <img src={HeroImg} alt='HeroImage' className={HeroImgStyle.heroImages} />
        </div>
    )
}

export default HeroImage;