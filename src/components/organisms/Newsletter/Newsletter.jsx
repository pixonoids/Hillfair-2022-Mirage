import "./Newsletter.scss";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import React, { useEffect, useState } from 'react';

// AOS.init();
let currentTime = new Date();
let hour = currentTime.getHours();

const Newsletter = () => {
  /*
  State for the subscribe button
  failed--> -1
  not subscribed--> null
  subscribing--> 0
  subscribed--> 1
  
   */
  const [subscribe, setSubscribe] = useState(null);

  useEffect(() => {
    // subscribeHandler()

  }, [subscribe]);

  const subscribeHandler = () => {
    setSubscribe("subscribing");
    setTimeout(() => {
      setSubscribe("subscribed");
    }, 2000);
  };












  return (
    <div className="Newsletter">
      <div className="Heading">Get the latest news abOut HILLFFAIR</div>
      <div className="Subheading">
        Register to our newsletter and don't miss anything anymore. We promise
        we will not spam you!{" "}
      </div>
      <div className="Subscribe">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email"
          required=""
          className="inputNewsletter"
        />
        <button onClick={subscribeHandler}
          type="submit"
          style={{
            backgroundColor: (subscribe !== null && subscribe !== "subscribing") ? subscribe === "subscribed" && "green" || subscribe === "failed" && "red" : hour >= 9 && hour <= 17 ? "#7c4730" : "#080648",


          }}
          disabled={subscribe === "subscribing" || subscribe === "subscribed"}
        >
          {(subscribe === null) && <span>Subscribe</span>}
          {(subscribe === "subscribed") && <span className="subscribed">Subscribed</span>}
          {(subscribe === "failed") && <span className="failed">Try again</span>}
          {(subscribe === "subscribing") && <svg style={{
            backgroundColor: hour >= 9 && hour <= 17 ? "#7c4730" : "#080648",
          }} id="svg-spinner" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="4" r="4" fill="#fff" />
            <circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2" />
            <circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4" />
            <circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7" />
            <circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9" />
            <circle cx="24" cy="44" r="2.5" fill="#feebbc" />
            <circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af" />
            <circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1" />
            <circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94" />
            <circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86" />
          </svg>}
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
