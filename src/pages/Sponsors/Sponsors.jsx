import { useState } from "react";
import SponsorCard from "../../components/molecules/SponsorCard/SponsorCard";
import "./Sponsors.scss";

const GOLD = [
  { img: "/images/sponsors/sjvn_logo.png" },
];
const SILVER = [
  { img: "/images/sponsors/unacademy_logo.png" },
];
const DEFAULT = [
  { img: "/images/sponsors/vidyapeeth_logo.png" },
  // { img: "/images/pixonoids_logo.png" }, 
];

const Sponsors = () => {
  let [goldSponsors, setGoldSponsors] = useState(GOLD);
  let [silverSponsors, setSilverSponsors] = useState(SILVER);
  let [sponsors, setSponsors] = useState(DEFAULT);
 
  return (
    <div className="sponsors-container">
      {/* pharo :: start*/}
      <img className="pharo-img-left" src="/images/guarding_pharo.png" alt="" />

      {/* title sponsors */}
      <div className="title-sponsors-container">
        {/* <h1>TITLE SPONSORS</h1>*/}
        <p>Dayal brings you Hill'ffair 2k22</p>
        <div className="sponsors-inner-container">
          <SponsorCard img={'/images/sponsors/dayal_logo.png'} className="title-sponsors"/>
        </div>
      </div>

      {/* gold sponsors */}
      <div className="gold-sponsors-container">
        <h1>GOLD SPONSORS</h1>
        <div className="gold-sponsors-inner-container">
        {goldSponsors.map((sponsor) => {
          return <SponsorCard img={sponsor.img} />;
        })}
        </div>
      </div>  

        {/* silver sponsors */}
      <div className="silver-sponsors-container">
        <h1>SILVER SPONSORS</h1>
        <div className="silver-sponsors-inner-container">
        {silverSponsors.map((sponsor) => {
          return <SponsorCard img={sponsor.img} />;
        })}
        </div>
      </div>

      {/* sponsors */}
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

    </div>
  );
};

export default Sponsors;
