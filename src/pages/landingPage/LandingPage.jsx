import './LandingPage.scss';
import CountdownTimer from '../../components/molecules/countdown/CountdownTimer';
import ParticlesBackground from './ParticlesBackground';
import AudioButton from '../../components/molecules/AudioButton/AudioButton';

const LandingPage = () => {


    return (
        <div className="container">
            <img className='pixonoids_logo' src="/images/pixonoids_logo_color.png" alt="" />
            <AudioButton />
           <ParticlesBackground />

            <img src="/images/hillfair-logo-light.png" alt="hill'ffair logo" id='logo'/>
            <h1 className='coming-soon'>COMING SOON</h1>

            {/* < CountdownTimer /> */}
        </div>
    );
}

export default LandingPage;