import HeroImg from '../../assets/HeroImg.png';
import HeroImgStyle from './HeroImage.module.css';

const HeroImage = () => {
    return (
        <div className={HeroImgStyle.HeroImgContent}>
            <div className={HeroImgStyle.HeroImgBox}>
                <h2 className={HeroImgStyle.HeroH2}>100 Thousand songs, ad-free Over thounds podcast episodes</h2 >
                <img src={HeroImg} alt='HeroImage' className={HeroImgStyle.heroImages} />
            </div>
        </div >
    )
}

export default HeroImage;