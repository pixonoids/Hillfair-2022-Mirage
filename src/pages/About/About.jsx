import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      {/* <h1>About</h1> */}
      <div className="about-inner-container">
        <img className="scroll" src="/images/scroll.png" alt="" />
        <div className="about-text-container">
        <h1>About</h1>
          <p className="about-text">
            The National Institute of Technology, Hamirpur, is one of India's
            most prestigious engineering institutions. This institute is home to
            brilliant, innovative, striving brains who are hungry for
            information and eager to contribute to the growth of science and
            technology. ndia is rich in culture and diversity. To celebrate our
            homeland's heritage and culture, every year this fiesta of hilarity
            and hysterics, draws thousands of students to participate in this
            captivating festival. Hill'ffair offers the participants the chance
            to unleash their hidden talents from a plethora of genres ranging
            from creative skills to singing, dancing, acting, and finally
            rocking up the stage with band music and fashion show. The event is
            sure to leave fond memories to 8000 plus students for years to
            cherish. The weary creative brains and logic-driven geeks look
            forward to these three days of Hill'ffair, filled with liveliness,
            energy, and excitement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
