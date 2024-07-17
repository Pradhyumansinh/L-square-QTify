import HeroImage from '../../components/HeroImage/HeroImage';
import Navbar from '../../components/Navbar/Navbar';
import Section from '../../components/Section/Section';

const HomePage = () => {
    return (<>
        <Navbar />
        <HeroImage />
        <Section GridHeading="Top Albums" />
    </>)
}

export default HomePage;