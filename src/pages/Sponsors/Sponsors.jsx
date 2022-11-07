import { useState } from "react";
import SponsorCard from "../../components/molecules/SponsorCard/SponsorCard";
import "./Sponsors.scss";

const DEFAULT = [
  { img: "/images/sponsors/sjvn_logo.png" },
  { img: "/images/pixonoids_logo.png" },
  { img: "/images/hillfair-logo-light.png" },
  { img: "/images/pixonoids_logo_color.png" },
  { img: "/images/pixonoids_logo.png" },
  { img: "/images/hillfair-logo-light.png" },
  { img: "/images/pixonoids_logo_color.png" },
  { img: "/images/pixonoids_logo.png" },
  { img: "/images/hillfair-logo-light.png" },
  { img: "/images/pixonoids_logo_color.png" },
  { img: "/images/pixonoids_logo.png" },
  { img: "/images/sponsors/sjvn_logo.png" },
  { img: "/images/pixonoids_logo.png" },
  { img: "/images/hillfair-logo-light.png" },
  { img: "/images/pixonoids_logo_color.png" },
  { img: "/images/pixonoids_logo.png" },
  { img: "/images/hillfair-logo-light.png" },
  { img: "/images/pixonoids_logo_color.png" },
  { img: "/images/pixonoids_logo.png" },
  { img: "/images/hillfair-logo-light.png" },
  { img: "/images/pixonoids_logo_color.png" },
  { img: "/images/pixonoids_logo.png" },
];

const Sponsors = () => {
  let [sponsors, setSponsors] = useState(DEFAULT);

  return (
    <div className="sponsors-container">
      {/* pharo :: start*/}
      <img className="pharo-img-left" src="/images/guarding_pharo.png" alt="" />

      {/* title sponsors */}
      <div className="title-sponsors-container">
        <h1>TITLE SPONSORS</h1>
        <div className="sponsors-inner-container">
          <SponsorCard img={'/images/sponsors/sjvn_logo.png'} className="title-sponsors"/>
        </div>
        <p>... brings you Hill'ffair 2k22</p>
      </div>
        

      <h1>SPONSORS</h1>
      <div className="sponsors-inner-container">
        {sponsors.map((sponsor) => {
          return <SponsorCard img={sponsor.img} />;
        })}

        {/* pharo :: end*/}
        <img
          className="pharo-img-right"
          src="/images/guarding_pharo.png"
          alt=""
        />
      
      </div>

       {/* footer waves */}
       <svg  
        className="footer-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A697E8" fill-opacity="1" 
        d="M0,160L13.3,144C26.7,128,53,96,80,85.3C106.7,75,133,85,160,122.7C186.7,160,213,224,240,208C266.7,192,293,96,320,64C346.7,32,373,64,400,74.7C426.7,85,453,75,480,101.3C506.7,128,533,192,560,192C586.7,192,613,128,640,90.7C666.7,53,693,43,720,80C746.7,117,773,203,800,202.7C826.7,203,853,117,880,74.7C906.7,32,933,32,960,37.3C986.7,43,1013,53,1040,53.3C1066.7,53,1093,43,1120,74.7C1146.7,107,1173,181,1200,181.3C1226.7,181,1253,107,1280,80C1306.7,53,1333,75,1360,90.7C1386.7,107,1413,117,1427,122.7L1440,128L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"></path>
        </svg>

    </div>
  );
};

export default Sponsors;
