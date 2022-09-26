import Header from '../../components/Header';
import TopBar from '../../components/TopBar';
import MainBanner from '../../components/MainBanner';
import NextMatch from '../../components/NextMatch';
import PlayersStat from '../../components/PlayersStat';
import SuccessStory from '../../components/SuccessStory';
import ClubStuff from '../../components/ClubStuff';
import CallToAction from '../../components/CallToAction';
import TeamStore from '../../components/TeamStore';
import BreakingNews from '../../components/BreakingNews';
import Footer from '../../components/Footer';

const Home = () => {
    return (
        <>
            <TopBar />
            <Header />
            <MainBanner />
            <NextMatch />
            <PlayersStat />
            <SuccessStory />
            <ClubStuff />
            <CallToAction />
            <TeamStore />
            <BreakingNews />
            <Footer />
        </>
    );
};

export default Home;
