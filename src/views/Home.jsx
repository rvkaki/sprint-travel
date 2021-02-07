import { Box, Flex, Text } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import { getSlides } from '../util/apiCalls';
import SingleCarousel from '../components/SingleCarousel';
import { Carousel } from '../components/Carousel3D';

const Home = () => {
  const [images, setImages] = useState();

  useEffect(() => {
    getSlides().then(data => setImages(data));
  }, []);

  console.log(images);
  return (
    <Box>
      <Box minH="100vh">
        <Header />
        <Flex
          w="100%"
          h={{ base: '90vh', md: '50vh' }}
          direction="column"
          justify="center"
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
                      <Box position="relative">
                        <Box
                          as="img"
                          src={`${process.env.REACT_APP_SERVER_URL}${i.url}`}
                          alt={i.name}
                          objectFit="cover"
                          h="300px"
                          w="600px"
                        />
                        <Flex
                          position="absolute"
                          top={0}
                          left={0}
                          w="100%"
                          h="100%"
                          align="center"
                          justify="center"
                        >
                          <Text fontSize="2xl" color="black" fontWeight="semibold">{i.name}</Text>
                        </Flex>
                      </Box>
                    ))}
                  />
                </Box>
                <Box display={{ base: 'inherit', md: 'none' }}>
                  <SingleCarousel
                    images={images.map(i => {
                      return {
                        src: `${process.env.REACT_APP_SERVER_URL}${i.url}`,
                        alt: i.name,
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
