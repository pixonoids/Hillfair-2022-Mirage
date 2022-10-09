import "./Newsletter.scss";

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
        >
          <span>Subscribe</span>
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
