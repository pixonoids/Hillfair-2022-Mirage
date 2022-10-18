import "./About.scss";

const About = () => {
  return (
    <div className="about-wrapper">

      <h1 className="page-heading">ABOUT</h1>

      <div className="about-outer-container">
        <div className="about-left-container">
          <div className="about-hillfair">
            <h1>About Hill'ffair</h1>
            <p>
              India is rich in culture and diversity. To celebrate our homeland's
              heritage and culture, every year this fiesta of hilarity and
              hysterics, draws thousands of students to participate in this
              captivating festival. Hill'ffair offers the participants the chance
              to unleash their hidden talents from a plethora of genres ranging
              from creative skills to singing, dancing, acting, and finally
              rocking up the stage with band music and fashion show. The event is
              sure to leave fond memories for years to cherish. The weary creative
              brains and logic-driven geeks look forward to these three days of
              Hillffair, filled with liveliness, energy, and excitement, to sneak
              them from the monotonous routine and enjoy a little R and R.
            </p>
          </div>
          <br />
          <div className="about-theme">
            <h1>About Theme</h1>
            <p>
              Finally giving life to a profusion of your wishes, the immersive
              world has begun encircling NITH with its phenomenal cosmic powers.
              As the adventure of surprises begins and the door to the beyond
              world finally unlocks, the forces from the other side conjure. A
              mythical endeavor starts as people from the land and the sea
              decipher the glamour of enchantment. The genie appears with limited
              wishes but an infinite chance to shape your destiny and discover the
              realm of your dreams. In this crusade of magic carpets, mirrors, and
              the wonderful lamp as fantasies ignite higher than ever, be careful
              what you wish for. It's your call to dare to dream and transcend,
              Picking jewels from the garden of riches put together your best
              costumes and ensembles. Will everyone get their wishes to come true
              as we entail the truth of life to humanity?
            </p>
          </div>
        </div>
        <div className="about-right-container">
          <h1>Star Events</h1>
          <p>
            <span className="quote-text">
              The waves echo in the darkness In the lonely, cold beach <br />
              Like a shining star <br />
              No matter how far, we'll find the light and <br />
              Waited for the sunrise together at the guardrails <br />
              Just staring at the stars silently
            </span>
            <br />
            <br />A night filled with laughter, dance, and music. A
            conglomeration of all the stars and celebrities and bands, Star
            Night is one gleeful night of Hill fair. From unstoppable laughter
            and giggles to the dulcet melodies, star Night has it all covered.
            Vipul Goyal, an Indian stand-up comedian, and actor became a part of
            the glorious fest filling the realm of NITH with roars of laughter.
            He is counted among the top comedy performers in India and also
            plays the main protagonist in the web series Humorously Yours, Indie
            rock bands like THE LOCAL TRAIN and NALAYAK, have it the fest with
            their energy over the hills. These bands whose music has filled the
            heart of our young minds all through the college years and life.
            Simon Taufel graced and addressed the students of NIT Hamirpur with
            his mind-boggling speech, citing his journey as a cricket umpire and
            sharing with us his high-performance leamings, and motivational
            messages.
          </p>
          <div className="event-images-container">
            <img className="event-images localTrain" src="/images/localTrain.jpg" alt="localTrain" />
            <img className="event-images naalayak" src="/images/naalayak.jpg" alt="Nalaayak" />
            <img className="event-images vipulGoyal" src="/images/vipulGoyal.jpg" alt="vipulGoyal" />
          </div>
        </div>
      </div>
      <div className="about-team-outer-container">
        <div className="about-team">
          <h1>COMPANY SOCIAL RESPONSIBILITY PARTNERSHIP</h1>
          <p>
            NIT Hamirpur is an educational institute of national importance with
            a legacy of decades Any contribution to its welfare is an important
            act of social responsibility. Apart from this, our institution also
            believes in giving back to the community. You can be a part of all
            this. and support our noble endeavors. Apart from the fest our
            projects also cover Go Green initiatives,Swachhta Abhiyan, awareness
            programs (on drug abuse, AIDS, population education), and other
            significant initiatives. Let's have a partnership and fulfill our
            social responsibility, together!
          </p>
        </div>
        <div className="about-team">
          <h1>NSS</h1>
          <p>
            NSS undertakes various activities in adopted villages and slums for
            community service. NSS volunteers in adopted villages for
            eradication of illiteracy, watershed management, wasteland
            development, agricultural operations, health, nutrition, hygiene,
            mother and child care, family life education, etc.
          </p>
        </div>
        <div className="about-team">
          <h1>PRAYAS</h1>
          <p>
            The Annual cultural-cum-charity festival of our Literacy Mission. It
            provides a platform forthe children to come forward and showcase
            their talents by performing various arts like Dance, Drama, Music,
            etc, which in turn enhances their confidence. In this fest, the
            students of NIT Hamirpur perform with students of Literacy Mission.
            Over the years this function has generated a lot of interest among
            the students and faculty of NIT Hamirpur
          </p>
        </div>
      </div>
      {/* video */}
      <div className="video-preview">
        <iframe
          src="https://www.youtube.com/embed/a54iX0QUZQs"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
