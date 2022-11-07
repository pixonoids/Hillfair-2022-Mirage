import { useState } from "react";
import SponsorCard from "../../components/molecules/SponsorCard/SponsorCard";
import "./Sponsors.scss";

const DEFAULT = [
  { img: "/images/sponsors/sjvn_logo.png" },
  // { img: "/images/pixonoids_logo.png" },
  // { img: "/images/hillfair-logo-light.png" },
  // { img: "/images/pixonoids_logo_color.png" },
  // { img: "/images/pixonoids_logo.png" },
  // { img: "/images/hillfair-logo-light.png" },
  // { img: "/images/pixonoids_logo_color.png" },
  // { img: "/images/pixonoids_logo.png" },
  // { img: "/images/hillfair-logo-light.png" },
  // { img: "/images/pixonoids_logo_color.png" },
  // { img: "/images/pixonoids_logo.png" },
];

const Sponsors = () => {
  let [sponsors, setSponsors] = useState(DEFAULT);

  return (
    <div className="sponsors-container">
      {/* pharo :: start*/}
      <img className="pharo-img-left" src="/images/guarding_pharo.png" alt="" />

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
