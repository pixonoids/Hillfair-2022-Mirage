import { useState, useEffect } from 'react';
import './Gallery.scss';
import { motion } from 'framer-motion';
import { useGetGallery } from '../../hooks/api/gallery';

// framer motion varients
const containerVarientsUp = {
  hidden: {
    y: '-50%',
  },
  animate: {
    y: '0%',
    transition: {
      duration: 3,
      type: 'tween',
    },
  },
};
const imgVarientsUp = {
  hidden: {
    y: '0',
  },
  animate: {
    y: '-100%',
    transition: {
      duration: 10,
      type: 'tween',
      repeat: Infinity,
    },
  },
};
const imgVarientsDown = {
  hidden: {
    y: '-100%',
  },
  animate: {
    y: '0',
    transition: {
      duration: 10,
      type: 'tween',
      repeat: Infinity,
    },
  },
};
const containerVarientsDown = {
  hidden: {
    y: '50%',
  },
  animate: {
    y: '-50%',
    transition: {
      duration: 3,
      type: 'tween',
    },
  },
};

export default function Gallery() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { data } = useGetGallery();
  const images = data?.reduce((acc, cur) => [...acc, ...cur.urls], []);
  const [img1, setImg1] = useState([]);
  const [img2, setImg2] = useState([]);
  const [img3, setImg3] = useState([]);

  // effects
  useEffect(() => {
    const resize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  useEffect(() => {
    let im1 = [],
      im2 = [],
      im3 = [];
    for (let i = 0; i < images?.length; i++) {
      if (i >= (2 * images.length) / 3) {
        im1.push(images[i]);
      } else if (i >= images.length / 3) {
        im2.push(images[i]);
      } else {
        im3.push(images[i]);
      }
    }
    setImg1(im1);
    setImg2(im2);
    setImg3(im3);
  }, [data]);
  if (!data || img1.length === 0) return <div>Loading...</div>;
  return (
    <div className="gallery">
      <div className="heading">Gallery</div>
      {screenWidth > 760 && (
        <div className="container">
          <motion.div
            className="container-one"
            initial="hidden"
            animate="animate"
            variants={containerVarientsUp}
          >
            {img1.map((item, index) => {
              return (
                <motion.div
                  className="pics"
                  key={index + 'img1'}
                  variants={imgVarientsUp}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                >
                  <motion.img
                    src={item}
                    whileHover={{
                      scale: 1.1,

                      transition: { duration: 0.5 },
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            className="container-two"
            initial="hidden"
            animate="animate"
            variants={containerVarientsDown}
          >
            {img2.map((item, index) => {
              return (
                <motion.div
                  className="pics"
                  key={index + 'img2'}
                  variants={imgVarientsDown}
                  whileHover={{
                    scale: 1.1,

                    transition: { duration: 0.5 },
                  }}
                >
                  <motion.img
                    src={item}
                    whileHover={{
                      scale: 1.1,

                      transition: { duration: 0.5 },
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            className="container-three"
            initial="hidden"
            animate="animate"
            variants={containerVarientsUp}
          >
            {img3.map((item, index) => {
              return (
                <motion.div
                  className="pics"
                  key={index + 'img3'}
                  variants={imgVarientsUp}
                  whileHover={{
                    scale: 1.1,

                    transition: { duration: 0.5 },
                  }}
                >
                  <motion.img
                    src={item}
                    whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.5 },
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
      {screenWidth < 450 && (
        <div className="container">
          <motion.div
            className="container-one"
            initial="hidden"
            animate="animate"
            variants={imgVarientsUp}
          >
            {images.map((item, index) => {
              return (
                <motion.div className="pics" key={index + 'imgm'}>
                  <motion.img src={item} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
      {screenWidth > 450 && screenWidth < 760 && (
        <div className="container">
          <motion.div
            className="container-one"
            initial="hidden"
            animate="animate"
            variants={imgVarientsUp}
          >
            {img1.map((item, index) => {
              return (
                <motion.div className="pics" key={index + 'imgm1'}>
                  <motion.img src={item} />
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            className="container-two"
            initial="hidden"
            animate="animate"
            variants={imgVarientsDown}
          >
            {img2.map((item, index) => {
              return (
                <motion.div className="pics" key={index + 'imgm2'}>
                  <img src={item} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      )}
    </div>
  );
}
