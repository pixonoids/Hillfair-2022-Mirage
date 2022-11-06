import React, { useState, useEffect, useCallback } from "react";
import "./ReaderDigest.scss";
import { SquareAnimation } from "../../atoms";

const ReaderDigest = () => {
  const [newQuote, setnewQuote] = useState("Coca-Cola was the first soft drink consumed in space");
  const shuffle = useCallback(() => {
    const index = Math.floor(Math.random() * quote.length);
    setnewQuote(quote[index]);
  }, []);
  useEffect(() => {
    const intervalID = setInterval(shuffle, 20000);

    return () => clearInterval(intervalID);
  }, [shuffle]);
  return (
    <div className="readerDigest">
      <div className="heading">
        <div className="squareAnimation">
          <SquareAnimation />
        </div>
        Fun Fact
      </div>
      <div className="quote">{newQuote}</div>
    </div>
  );
};
const quote = [
  "Clouds at the centre of the Milky Way smell of rum, taste of raspberries and are packed with booze",
  "Neptune has only completed one orbit around the Sun since its discovery",
  "Pluto is smaller than the United States",
  "One day on Venus is longer than one year on Earth",
  "If two pieces of the same type of metal touch in space, they will bond and be permanently stuck together. This effect is known as cold welding",
  "Andromeda is on a collision course with the Milky Way Galaxy. It is believed that they will merge to form an even bigger galaxy in around 4.5 billion years",
  "Light from some stars takes so long to travel to our eyes that when you look at the star-speckled night sky you're actually peering deep into the past",
  "There are more stars in space than there are grains of sand in the world",
  "There is Floating water in Space. Astronomers have found a massive water vapor cloud which holds 140 trillion times the mass of water in the Earth's oceans somewhere around 10 billion light years away. It is the largest discovery of water ever found",
  "Coca-Cola was the first soft drink consumed in space",
  "The centre of our galaxy contains a super massive black hole, which is responsible for holding the galaxy together.",
  "Arabian Nights is also known as One Thousand and One Nights",
  "A pulsar star has such a high density   that one spoon of its surface weighs about 100 times the weight of the earth",
  'The first printed Arabic-language edition of the One Thousand and One Nights was published in 1775. It contained an Egyptian version of The Nights known as "ZER" (Zotenberg\'s Egyptian Recension) and 200 tales.',
  "The Arabian Nights aren't just from Arabia.Dating back as far as the 10th century A.D., these tales have origins in North African, Arabic, Turkish, Persian, Indian, and East Asian cultures",
  "Humans have explored outer space more than the ocean: only 5% of the ocean has been discovered",
  "The magnificent Sultan's Palace in Aladdin was inspired by the Taj Mahal in Agra, India",
];
export default ReaderDigest;
