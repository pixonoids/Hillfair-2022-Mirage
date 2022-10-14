import "./Newsletter.scss";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();
let currentTime = new Date();
let hour = currentTime.getHours();

const Newsletter = () => {
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
        <button
          type="submit"
          style={{
            backgroundColor: hour >= 9 && hour <= 17 ? "#7c4730" : "#080648",
          }}
        >
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
