import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { getHighlights, getSlides } from '../util/apiCalls';
import SingleCarousel from '../components/SingleCarousel';
import { Carousel } from '../components/Carousel3D';
import Slide from '../components/Slide';
import MainSearch from '../components/MainNav';
import Highlights from '../components/Highlights';

const Home = () => {
  const [images, setImages] = useState();
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    getSlides().then(data => setImages(data));
    getHighlights().then(data => setHighlights(data));
  }, []);

  return (
    <Box>
      <Box minH="100vh" overflow="hidden">
        <Header />
        <Box
          pos="relative"
          w="100%"
          mt={6}
          h={{ base: '150px', sm: '300px', md: '400px', lg: '450px' }}
        >
          {images ? (
            <>
              <Box display={{ base: 'none', md: 'inherit' }}>
                <Carousel
                  autoplay={true}
                  interval={2500}
                  showArrows={true}
                  slides={images.map(i => (
                    <Slide
                      src={`${process.env.REACT_APP_SERVER_URL}${i.image.url}`}
                      alt={i.image.name}
                      title={i.title}
                      info={i.info}
                    />
                  ))}
                />
              </Box>
              <Box display={{ base: 'inherit', md: 'none' }}>
                <SingleCarousel
                  images={images.map(i => {
                    return {
                      src: `${process.env.REACT_APP_SERVER_URL}${i.image.url}`,
                      alt: i.image.name,
                      title: i.title,
                      info: i.info,
                    };
                  })}
                />
              </Box>
            </>
          ) : null}
        </Box>
        <MainSearch />
        <Highlights data={highlights} />
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
