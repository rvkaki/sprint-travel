import { Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { getSlides } from '../util/apiCalls';
import SingleCarousel from '../components/SingleCarousel';
import { Carousel } from '../components/Carousel3D';
import Slide from '../components/Slide';

const Home = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    getSlides().then(data => setImages(data));
  }, []);

  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Flex
          w="100%"
          mt={8}
          h={{ base: '90vh', md: '50vh' }}
          direction="column"
          align="center"
        >
          <Box pos="relative" w="100%">
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
                      };
                    })}
                  />
                </Box>
              </>
            ) : null}
          </Box>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
