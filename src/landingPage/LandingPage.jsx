import './LandingPage.scss';
import CountdownTimer from './CountdownTimer';

const LandingPage = () => {


    return (
        <div className="container">
            < CountdownTimer />
            
            <img src="../images/hillfair-logo-light.png" alt="hill'ffair logo" id='logo'/>
            <h1 className='coming-soon'>COMING SOON ...</h1>

        </div>
    );
}

export default LandingPage;